"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { springs } from "@/lib/motion";
import { useFinePointer } from "@/lib/use-fine-pointer";

/**
 * A ring that trails the pointer with spring lag. The native cursor stays: the
 * ring never intercepts events and only adds information. It grows over links
 * and buttons, and over a project preview it becomes a "Visit" disc. Mouse
 * only; touch and reduced-motion visitors do not get it.
 */
export default function CursorRing() {
  const enabled = useFinePointer();
  const ringRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, springs.follow);
  const springY = useSpring(y, springs.follow);

  useEffect(() => {
    const ring = ringRef.current;
    if (!enabled || !ring) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      ring.dataset.visible = "true";
    };
    const onOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest(
        "a, button, input, textarea, select, [data-cursor]",
      );
      ring.dataset.kind =
        target?.getAttribute("data-cursor") ?? (target ? "link" : "idle");
    };
    const onLeave = () => {
      ring.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[55]"
    >
      <div
        ref={ringRef}
        data-kind="idle"
        data-visible="false"
        className="cursor-ring"
      >
        <span className="cursor-ring-label">Visit</span>
      </div>
    </motion.div>
  );
}
