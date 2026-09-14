import {
  Variants,
  Transition,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { RefObject } from "react";

/** Shared easing curves so timing feels consistent across the site. */
export const easeEditorial: Transition["ease"] = [0.16, 1, 0.3, 1];
export const easeSharp: Transition["ease"] = [0.65, 0, 0.35, 1];

/** Simple fade + rise, for supporting copy and small elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeEditorial },
  },
};

/** Heavier rise for hero-weight headlines. */
export const headlineIn: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeEditorial },
  },
};

/** Clip-path reveal, good for a headline line that "wipes" into view. */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.7, ease: easeEditorial },
  },
};

/** Parent wrapper — stagger its rowIn / fadeIn children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Child row/card for use inside a staggerContainer. */
export const rowIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeEditorial },
  },
};

/** Subtle scale-in, good for cards and images. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeEditorial },
  },
};

/**
 * Scroll-driven parallax. Tracks `ref` moving through the viewport and
 * returns a MotionValue that travels from -distance to +distance, so
 * `style={{ y }}` drifts the element at a different speed than the page
 * scroll. Use a bigger distance for background decoration, a smaller one
 * for foreground content (photos, cards) so it stays subtle.
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  distance = 60,
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}
