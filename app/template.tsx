"use client";

import { useLayoutEffect, useRef } from "react";

/** Survives route changes, so the very first mount (a page load) is not animated. */
let hasNavigated = false;

/**
 * Route change: a shutter in the page colour covers the new page and retracts
 * upward, leaving a thin line of light on its trailing edge. Only runs for
 * in-app navigation, so the first paint is unaffected, and never under
 * reduced motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const shutterRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const shutter = shutterRef.current;
    if (!hasNavigated) {
      hasNavigated = true;
      return;
    }
    if (
      !shutter ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const animation = shutter.animate(
      [
        { opacity: 1, transform: "scaleY(1)" },
        { opacity: 1, transform: "scaleY(0)" },
      ],
      { duration: 720, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "both" },
    );
    return () => animation.cancel();
  }, []);

  return (
    <>
      <div
        ref={shutterRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[45] origin-top bg-background opacity-0"
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-link" />
      </div>
      <div className="animate-page-in">{children}</div>
    </>
  );
}
