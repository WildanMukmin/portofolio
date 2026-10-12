"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "@/lib/use-fine-pointer";

const MAX_PULL = 8;

/**
 * Pulls its child a few pixels toward the pointer. The pull is capped so the
 * click target never drifts away from the cursor. Mouse-only: touch and
 * reduced-motion users get the plain child.
 */
export default function Magnetic({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 });

  const clamp = (value: number) =>
    Math.max(-MAX_PULL, Math.min(MAX_PULL, value));

  const onPointerMove = (event: React.PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!enabled || !rect) return;
    x.set(clamp((event.clientX - (rect.left + rect.width / 2)) * 0.18));
    y.set(clamp((event.clientY - (rect.top + rect.height / 2)) * 0.18));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}
