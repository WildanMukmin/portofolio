const SOFTWARE_RENDERER = /swiftshader|llvmpipe|software|basic render/i;

/**
 * True when the browser has a GPU-backed WebGL context. A software rasteriser
 * would run the chrome scene at a few frames per second, so the hero keeps its
 * static poster there and never downloads the 3D code.
 */
export function hasHardwareWebGL() {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) return false;

  const info = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
  gl.getExtension("WEBGL_lose_context")?.loseContext();
  return !SOFTWARE_RENDERER.test(renderer);
}
