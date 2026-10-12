"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { easing, springs } from "@/lib/motion";
import type { Project } from "@/lib/projects";

/**
 * Wipes down from the top. The revealed clip overshoots the box so the frame's
 * shadow survives. The first render is identical on server and client; reduced
 * motion only shortens the duration to zero.
 */
const revealVariants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: (reduceMotion: boolean) => ({
    clipPath: "inset(-20% -5% -20% -5%)",
    transition: { duration: reduceMotion ? 0 : 1, ease: easing.snap },
  }),
};

const MAX_TILT_X = 4;
const MAX_TILT_Y = 6;

function hostOf(link?: string) {
  if (!link) return "No public link";
  return new URL(link).hostname.replace(/^www\./, "");
}

interface PreviewProps {
  project: Project;
  sizes: string;
  /** Wipe the frame open once when it first scrolls into view. */
  reveal?: boolean;
  /** 0 to 1 while the frame crosses the viewport. Slides the screenshot inside its frame. */
  progress?: MotionValue<number>;
}

/**
 * Browser-framed screenshot with a gallery strip. On a fine pointer the frame
 * tilts a few degrees toward the cursor and its edge lights up where the
 * cursor is; both are written to motion values / CSS variables, not state.
 */
export default function ProjectPreview({
  project,
  sizes,
  reveal = true,
  progress,
}: PreviewProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const tiltable = useFinePointer();
  const frameRef = useRef<HTMLDivElement>(null);
  const tiltX = useSpring(0, springs.tilt);
  const tiltY = useSpring(0, springs.tilt);

  const idle = useMotionValue(0.5);
  const innerY = useTransform(progress ?? idle, [0, 1], ["-5%", "5%"]);

  const current = project.images[active];
  const hasGallery = project.images.length > 1;

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!tiltable || !frame) return;
    const rect = frame.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * 2 * MAX_TILT_Y);
    tiltX.set((0.5 - py) * 2 * MAX_TILT_X);
    frame.style.setProperty("--mx", `${px * 100}%`);
    frame.style.setProperty("--my", `${py * 100}%`);
  };

  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const screenshot = (
    <div className="relative aspect-video overflow-hidden bg-secondary">
      <motion.div
        style={progress ? { y: innerY } : undefined}
        className={cn(
          "absolute inset-x-0",
          // Taller than the frame, so sliding it vertically never shows an edge or crops the sides.
          progress ? "-top-[6%] h-[112%]" : "inset-y-0",
        )}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes={sizes}
          className="swap-in object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </motion.div>
    </div>
  );

  return (
    <div className="min-w-0">
      {/* The observed wrapper is never clipped: IntersectionObserver treats a
          fully clipped element as invisible and the reveal would never start. */}
      <motion.div
        style={{ perspective: 1400 }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        initial={reveal ? "hidden" : false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          data-reveal
          ref={frameRef}
          style={tiltable ? { rotateX: tiltX, rotateY: tiltY } : undefined}
          className="spotlight-edge rounded-xl p-px shadow-[0_28px_60px_-34px_hsl(var(--primary)/0.55)]"
          variants={revealVariants}
          custom={Boolean(reduceMotion)}
        >
          <div className="overflow-hidden rounded-[calc(0.75rem-1px)] bg-card">
            <div className="flex h-9 items-center border-b border-border px-4 font-mono text-xs text-muted-foreground">
              {hostOf(project.link)}
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                data-cursor="visit"
                className="block"
              >
                {screenshot}
              </a>
            ) : (
              screenshot
            )}
          </div>
        </motion.div>
      </motion.div>

      {hasGallery && (
        <div
          className="mt-4 flex min-w-0 gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label={`${project.title} screenshots`}
        >
          {project.images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active}
              aria-label={image.alt}
              className={cn(
                "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-[opacity,border-color] duration-200",
                i === active
                  ? "border-link opacity-100"
                  : "border-border opacity-55 hover:opacity-100",
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

