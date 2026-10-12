import { Transition } from "framer-motion";

/**
 * One motion language, varied by purpose:
 *  - snap:  expo-out. Type and UI that should land with authority.
 *  - glide: symmetric. Whole scenes and long scroll-linked moves.
 * Springs are for things the pointer touches; they have mass.
 */
export const easing = {
  snap: [0.16, 1, 0.3, 1],
  glide: [0.65, 0, 0.35, 1],
} as const satisfies Record<string, Transition["ease"]>;

/** Kept for existing imports. */
export const easeEditorial = easing.snap;

export const springs = {
  /** Cursor ring: quick but not rigid. */
  follow: { stiffness: 320, damping: 30, mass: 0.35 },
  /** Perspective tilt: heavy, settles slowly. */
  tilt: { stiffness: 160, damping: 18 },
  /** Magnetic pull on buttons. */
  magnet: { stiffness: 260, damping: 20, mass: 0.4 },
} as const;
