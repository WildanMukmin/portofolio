"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroVisual from "@/components/home/HeroVisual";
import Magnetic from "@/components/shared/Magnetic";
import { buttonClasses } from "@/components/ui/Button";
import { site } from "@/lib/site";

const headline = [
  "I build web applications",
  "with Next.js, React,",
  "and Laravel.",
];

/**
 * Opening screen. The headline and controls animate with CSS (so they play
 * from the server-rendered HTML, before hydration); the chrome W drifts up and
 * dims as the page scrolls, driven by motion values rather than state.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const driftY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const dim = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-border"
    >
      <div aria-hidden className="stage-light pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="container relative mx-auto flex min-h-[calc(100dvh-4rem)] flex-col justify-center gap-6 px-6 py-12 lg:py-16">
        <div className="relative z-10 max-w-[56rem]">
          <p
            className="hero-fade font-mono text-sm text-link"
            style={{ "--d": "60ms" } as React.CSSProperties}
          >
            {site.role}
          </p>

          <h1 className="mt-5 font-display-wide text-[clamp(2rem,5.2vw,5.25rem)] font-extrabold leading-[1] text-balance">
            {headline.map((line, i) => (
              <span key={line} className="hero-line block overflow-hidden pb-[0.12em]">
                <span style={{ "--i": i } as React.CSSProperties} className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="hero-fade mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ "--d": "620ms" } as React.CSSProperties}
          >
            I&apos;ve built course platforms, internal tools, and company
            websites, writing both the interface and the backend.
          </p>

          <div
            className="hero-fade mt-9 flex flex-wrap gap-3"
            style={{ "--d": "760ms" } as React.CSSProperties}
          >
            <Magnetic>
              <Link href="/portfolio" className={buttonClasses({ size: "lg" })}>
                View Projects
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className={buttonClasses({ variant: "outline", size: "lg" })}
              >
                Contact Me
              </Link>
            </Magnetic>
          </div>
        </div>

        <motion.div
          style={{ y: reduceMotion ? 0 : driftY, opacity: reduceMotion ? 1 : dim }}
          className="relative mx-auto aspect-[4/3] w-full max-w-md lg:pointer-events-none lg:absolute lg:right-[-5%] lg:top-1/2 lg:mx-0 lg:aspect-square lg:max-w-none lg:w-[min(40vw,600px)] lg:-translate-y-1/2"
        >
          <HeroVisual className="hero-visual size-full" />
        </motion.div>

        <p
          className="hero-fade relative z-10 flex w-fit items-center gap-2.5 rounded-lg border border-white/10 bg-glass px-4 py-2.5 text-sm shadow-[inset_0_1px_0_hsl(0_0%_100%/0.12)] backdrop-blur-md lg:absolute lg:bottom-[25%] lg:right-[24%]"
          style={{ "--d": "1000ms" } as React.CSSProperties}
        >
          <span aria-hidden className="size-2 rounded-full bg-link" />
          Available for freelance work
        </p>
      </div>
    </section>
  );
}
