import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion primitives. The goal is variety with intent — a headline
 * shouldn't move the same way a list row does — rather than reusing one
 * fade+slide everywhere.
 */

export const easeEditorial: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeSharp: Transition["ease"] = [0.65, 0, 0.35, 1];

/** Slow, weighted reveal for headlines/large type. */
export const headlineIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeEditorial },
  },
};

/** Quick, understated reveal for body copy and supporting text. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeSharp },
  },
};

/** Clip-path mask reveal — for section labels / eyebrow text. */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.4 },
  show: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.7, ease: easeEditorial },
  },
};

/** Parent wrapper: staggers whatever children declare a `show` variant. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Row/list item — subtle, fast, meant to be used inside a stagger parent. */
export const rowIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeSharp },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
