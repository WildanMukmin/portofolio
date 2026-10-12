import { useSyncExternalStore } from "react";

/** Any viewport, but only when the visitor has not asked for reduced motion. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
/** Scenes that pin the page need room for a second column. */
export const PINNED_OK =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/**
 * Media query as external store. The server snapshot is always false, so the
 * server HTML is the static, fully visible version and motion is layered on
 * after hydration.
 */
export function useMedia(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
