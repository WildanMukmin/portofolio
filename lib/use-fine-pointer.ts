import { useSyncExternalStore } from "react";

const FINE = "(hover: hover) and (pointer: fine)";
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const queries = [FINE, REDUCED].map((query) => window.matchMedia(query));
  queries.forEach((query) => query.addEventListener("change", onChange));
  return () =>
    queries.forEach((query) => query.removeEventListener("change", onChange));
}

const getSnapshot = () =>
  window.matchMedia(FINE).matches && !window.matchMedia(REDUCED).matches;

/** True for a mouse-like pointer when the visitor has not asked for reduced motion. */
export function useFinePointer() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
