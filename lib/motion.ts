import { Variants, Transition } from "framer-motion";

export const easeEditorial: Transition["ease"] = [0.16, 1, 0.3, 1];

/** Short fade and rise, used for scroll reveals. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeEditorial },
  },
};
