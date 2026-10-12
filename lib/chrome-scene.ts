import {
  ACESFilmicToneMapping,
  BackSide,
  BoxGeometry,
  CanvasTexture,
  Color,
  CubeCamera,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  HalfFloatType,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  Shape,
  SRGBColorSpace,
  Vector3,
  WebGLCubeRenderTarget,
  WebGLRenderer,
} from "three";
import {
  MONOGRAM_HEIGHT,
  MONOGRAM_WIDTH,
  monogramPoints,
} from "@/lib/monogram";

export interface ChromeSceneOptions {
  canvas: HTMLCanvasElement;
  /** Element whose size the canvas follows and whose visibility pauses the loop. */
  container: HTMLElement;
  /** False renders a single still frame (reduced motion). */
  animate: boolean;
  /** Tilt toward the pointer. Pass false on touch devices. */
  pointer: boolean;
  onReady: () => void;
  onLost: () => void;
}

const FOV = 28;
const CAMERA_Z = 11;
const ENTRANCE_SECONDS = 1.8;

/**
 * A dark studio built from emissive panels, rendered once into a cube map.
 * The chrome mirrors it, so its highlights are these panels: one cobalt wall,
 * one thin icy strip and a broad top light. No HDRI file is downloaded, and
 * skipping PMREM prefiltering avoids its shader compiles (the roughness is
 * near zero, so a prefiltered map would add nothing).
 */
/** A white rectangle with blurred edges, so each studio panel reflects as a soft glow instead of a hard-edged blotch. */
function softPanelTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, size, size);
  ctx.filter = "blur(10px)";
  ctx.fillStyle = "#fff";
  ctx.fillRect(24, 24, size - 48, size - 48);
  return new CanvasTexture(canvas);
}

function buildEnvironment(renderer: WebGLRenderer) {
  const studio = new Scene();
  const softness = softPanelTexture();
  const disposables: Array<{ dispose(): void }> = [softness];

  const room = new Mesh(
    new BoxGeometry(20, 20, 20),
    new MeshBasicMaterial({ color: 0x04060c, side: BackSide }),
  );
  studio.add(room);

  const panel = (
    width: number,
    height: number,
    color: number,
    intensity: number,
    position: [number, number, number],
  ) => {
    const mesh = new Mesh(
      new PlaneGeometry(width, height),
      new MeshBasicMaterial({
        color: new Color(color).multiplyScalar(intensity),
        map: softness,
        side: DoubleSide,
        toneMapped: false,
      }),
    );
    mesh.position.set(...position);
    mesh.lookAt(0, 0, 0);
    studio.add(mesh);
  };

  panel(18, 7, 0xdfe9ff, 7, [0, 9, 2]);
  panel(1.4, 12, 0xffffff, 9, [-5.5, 1, 8]);
  panel(8, 1.6, 0xeaf0ff, 8, [3, -6, 6]);
  panel(5, 14, 0x2f6bff, 9, [-9, 1, 1]);
  panel(1.6, 13, 0xcfe0ff, 10, [8, 0, 3]);
  panel(16, 3, 0x1a3cff, 3, [0, -8, -2]);
  panel(16, 10, 0xb9c9ff, 1.5, [0, 0.5, 9]);

  studio.traverse((object) => {
    if (object instanceof Mesh) {
      disposables.push(object.geometry, object.material);
    }
  });

  const target = new WebGLCubeRenderTarget(256, { type: HalfFloatType });
  new CubeCamera(0.1, 100, target).update(renderer, studio);
  disposables.forEach((item) => item.dispose());
  return target;
}

function buildMonogram() {
  const shape = new Shape();
  monogramPoints.forEach(([x, y], i) =>
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y),
  );

  const depth = 16;
  const geometry = new ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 4,
    bevelSize: 3,
    bevelSegments: 8,
    curveSegments: 1,
  });
  geometry.translate(-MONOGRAM_WIDTH / 2, -MONOGRAM_HEIGHT / 2, -depth / 2);

  // The front and back faces are flat, so a mirror finish would show one flat
  // reflection. Tilting their normals outward from the centre fakes a slight
  // crown, which sweeps the studio panels across the face like real chrome.
  const { position, normal } = geometry.attributes;
  const direction = new Vector3();
  for (let i = 0; i < normal.count; i++) {
    if (Math.abs(normal.getZ(i)) < 0.95) continue;
    direction.set(
      normal.getX(i) + (position.getX(i) / (MONOGRAM_WIDTH / 2)) * 0.55,
      normal.getY(i) + (position.getY(i) / (MONOGRAM_HEIGHT / 2)) * 0.55,
      normal.getZ(i),
    );
    direction.normalize();
    normal.setXYZ(i, direction.x, direction.y, direction.z);
  }
  return geometry;
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

const yieldToBrowser = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 0));

/**
 * Builds the scene in separate tasks (environment, geometry, shader compile)
 * so no single one blocks input for long. Resolves to null when WebGL is
 * unavailable, so the caller keeps its static poster.
 */
export async function createChromeScene(options: ChromeSceneOptions) {
  const { canvas, container, animate, pointer, onReady, onLost } = options;

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch {
    return null;
  }

  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 50);
  camera.position.set(0, 0, CAMERA_Z);

  const environment = buildEnvironment(renderer);
  await yieldToBrowser();

  const geometry = buildMonogram();
  const material = new MeshBasicMaterial({
    color: 0xf2f6ff,
    envMap: environment.texture,
    reflectivity: 1,
  });
  const mesh = new Mesh(geometry, material);
  const pivot = new Group();
  pivot.add(mesh);
  scene.add(pivot);

  await yieldToBrowser();
  // Compiles the shader without stalling the main thread where the browser supports it.
  await renderer.compileAsync(scene, camera);

  const pointerTarget = { x: 0, y: 0 };
  const pose = { x: 0, y: 0 };
  let width = 0;
  let height = 0;

  const resize = () => {
    width = container.clientWidth;
    height = container.clientHeight;
    if (!width || !height) return;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Fit the monogram to whichever dimension is tighter.
    const visibleHeight = 2 * CAMERA_Z * Math.tan(MathUtils.degToRad(FOV / 2));
    const visibleWidth = visibleHeight * camera.aspect;
    const scale = Math.min(
      (visibleWidth * 0.64) / MONOGRAM_WIDTH,
      (visibleHeight * 0.56) / MONOGRAM_HEIGHT,
    );
    mesh.scale.setScalar(scale);
    if (!animate) renderFrame(performance.now());
  };

  let start = performance.now();
  let last = start;

  const renderFrame = (now: number) => {
    const elapsed = (now - start) / 1000;
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;

    const entrance = animate
      ? easeOutExpo(MathUtils.clamp(elapsed / ENTRANCE_SECONDS, 0, 1))
      : 1;
    const follow = 1 - Math.exp(-dt * 4);
    pose.x += (pointerTarget.y * 0.22 - pose.x) * follow;
    pose.y += (pointerTarget.x * 0.55 - pose.y) * follow;

    const idleY = animate ? Math.sin(elapsed * 0.35) * 0.34 : -0.34;
    const idleX = animate ? Math.sin(elapsed * 0.27) * 0.07 : 0.06;
    const scrolled = animate ? window.scrollY : 0;

    pivot.rotation.y =
      idleY + pose.y + scrolled * 0.0016 - (1 - entrance) * 1.3;
    pivot.rotation.x = idleX + pose.x;
    pivot.position.y = scrolled * 0.0009;
    pivot.scale.setScalar(0.86 + 0.14 * entrance);

    renderer.render(scene, camera);
  };

  let frame = 0;
  let inView = true;
  let tabVisible = !document.hidden;

  const loop = (now: number) => {
    renderFrame(now);
    frame = requestAnimationFrame(loop);
  };

  const sync = () => {
    const shouldRun = animate && inView && tabVisible;
    if (shouldRun && !frame) {
      last = performance.now();
      frame = requestAnimationFrame(loop);
    } else if (!shouldRun && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
    pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
  };
  const onVisibility = () => {
    tabVisible = !document.hidden;
    sync();
  };
  const onContextLost = (event: Event) => {
    event.preventDefault();
    onLost();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    sync();
  });
  visibilityObserver.observe(container);

  document.addEventListener("visibilitychange", onVisibility);
  canvas.addEventListener("webglcontextlost", onContextLost);
  if (pointer && animate) {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
  }

  resize();
  start = performance.now();
  renderFrame(start);
  onReady();
  sync();

  return {
    dispose() {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      environment.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
