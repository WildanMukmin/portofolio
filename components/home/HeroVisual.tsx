"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MONOGRAM_HEIGHT, MONOGRAM_WIDTH, monogramPath } from "@/lib/monogram";
import { hasHardwareWebGL } from "@/lib/webgl-support";

type Scene = { dispose: () => void };

/**
 * The hero's chrome W. A static SVG poster is what first paint, slow devices
 * and WebGL-less browsers see; the Three.js scene loads after idle and fades
 * in over it. Reduced motion gets one still frame instead of the loop.
 */
export default function HeroVisual({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    if ((navigator.hardwareConcurrency ?? 8) <= 2 || !hasHardwareWebGL()) return;

    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;

    let scene: Scene | null = null;
    let cancelled = false;

    const load = () => {
      import("@/lib/chrome-scene")
        .then(({ createChromeScene }) =>
          createChromeScene({
            canvas,
            container,
            animate,
            pointer,
            onReady: () => setReady(true),
            onLost: () => setReady(false),
          }),
        )
        .then((created) => {
          // The effect may have been cleaned up while the scene was building.
          if (cancelled) created?.dispose();
          else scene = created;
        })
        .catch(() => setReady(false));
    };

    // Safari has no requestIdleCallback; a short timeout is the fallback.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const schedule = () => {
      handle = hasIdle
        ? window.requestIdleCallback(load, { timeout: 2000 })
        : window.setTimeout(load, 600);
    };
    let handle = 0;
    // Let the page finish loading first: the poster already carries the hero.
    const waitForLoad = document.readyState !== "complete";
    if (waitForLoad) window.addEventListener("load", schedule, { once: true });
    else schedule();

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
      scene?.dispose();
      setReady(false);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("relative select-none", className)}
    >
      <svg
        viewBox={`-4 -4 ${MONOGRAM_WIDTH + 8} ${MONOGRAM_HEIGHT + 8}`}
        className={cn(
          "absolute left-[9%] top-1/2 w-[82%] -translate-y-1/2 transition-opacity duration-700",
          ready ? "opacity-0" : "opacity-100",
        )}
      >
        <defs>
          <linearGradient id="chrome-poster" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#eef3ff" />
            <stop offset="0.2" stopColor="#7b8fc4" />
            <stop offset="0.36" stopColor="#0a1124" />
            <stop offset="0.54" stopColor="#e2eaff" />
            <stop offset="0.7" stopColor="#2f5ae0" />
            <stop offset="0.86" stopColor="#0a1124" />
            <stop offset="1" stopColor="#c9d6ff" />
          </linearGradient>
        </defs>
        <path
          d={monogramPath}
          fill="url(#chrome-poster)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      </svg>
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
