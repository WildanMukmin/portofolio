"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import HeroVisual from "@/components/home/HeroVisual";
import Magnetic from "@/components/shared/Magnetic";
import { buttonClasses } from "@/components/ui/Button";
import { MOTION_OK, useMedia } from "@/lib/use-media";
import { site } from "@/lib/site";

/** Each word carries its position in the whole headline, which sets its stagger delay. */
const headline = (() => {
  let index = 0;
  return [
    ["I", "build", "web", "applications"],
    ["with", "Next.js,", "React,"],
    ["and", "Laravel."],
  ].map((words) => words.map((word) => ({ word, index: index++ })));
})();

/** How far each line slides left as the hero scrolls away. Faster lines read as nearer. */
const LINE_DRIFT = ["-8%", "-18%", "-30%"];

function Line({
  words,
  drift,
  progress,
  moving,
}: {
  words: { word: string; index: number }[];
  drift: string;
  progress: MotionValue<number>;
  moving: boolean;
}) {
  const x = useTransform(progress, [0, 1], ["0%", drift]);
  return (
    <motion.span
      style={moving ? { x } : undefined}
      className="block max-sm:whitespace-normal sm:whitespace-nowrap"
    >
      {words.map(({ word, index }, i) => (
        <span key={index}>
          <span className="hero-word inline-block overflow-hidden pb-[0.14em] align-bottom">
            <span
              style={{ "--w": index } as React.CSSProperties}
              className="inline-block origin-bottom-left"
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
      {/* Lines are blocks, so a trailing space keeps the headline readable as one sentence. */}
      {" "}
    </motion.span>
  );
}

/**
 * Opening scene. Words rise out of clipped masks on a stagger (CSS, so it plays
 * from the server HTML); the chrome W powers on beside them. As the hero scrolls
 * away the headline lines slide off at different speeds, the supporting copy
 * lifts and fades, and a line of light draws across the bottom into the Stack scene.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const moving = useMedia(MOTION_OK);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.2]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.25, 0.85], [1, 0.1]);
  const horizon = useTransform(scrollYProgress, [0.1, 0.9], [0.05, 1]);
  const lightShift = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-border"
    >
      <motion.div
        aria-hidden
        style={moving ? { x: lightShift } : undefined}
        className="stage-light pointer-events-none absolute inset-y-0 -inset-x-[6%]"
      />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="container relative mx-auto flex min-h-[calc(100dvh-4rem)] flex-col justify-center gap-6 px-6 py-12 lg:py-16">
        <div className="relative z-10 max-w-[56rem]">
          <p
            className="hero-fade font-mono text-sm text-link"
            style={{ "--d": "60ms" } as React.CSSProperties}
          >
            {site.role}
          </p>

          <motion.h1
            style={moving ? { opacity: headlineOpacity } : undefined}
            className="mt-5 font-display-wide text-[clamp(1.55rem,4vw,4.6rem)] font-extrabold leading-[1]"
          >
            {headline.map((words, i) => (
              <Line
                key={i}
                words={words}
                drift={LINE_DRIFT[i]}
                progress={scrollYProgress}
                moving={moving}
              />
            ))}
          </motion.h1>

          <motion.div style={moving ? { y: copyY, opacity: copyOpacity } : undefined}>
            <p
              className="hero-fade mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ "--d": "900ms" } as React.CSSProperties}
            >
              I&apos;ve built course platforms, internal tools, and company
              websites, writing both the interface and the backend.
            </p>

            <div
              className="hero-fade mt-9 flex flex-wrap gap-3"
              style={{ "--d": "1050ms" } as React.CSSProperties}
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
          </motion.div>
        </div>

        <motion.div
          style={moving ? { y: visualY, opacity: visualOpacity } : undefined}
          className="relative mx-auto aspect-[4/3] w-full max-w-md lg:pointer-events-none lg:absolute lg:right-[-5%] lg:top-1/2 lg:mx-0 lg:aspect-square lg:max-w-none lg:w-[min(40vw,600px)] lg:-translate-y-1/2"
        >
          <HeroVisual className="hero-visual size-full" />
        </motion.div>

        <p
          className="hero-fade relative z-10 flex w-fit items-center gap-2.5 rounded-lg border border-white/10 bg-glass px-4 py-2.5 text-sm shadow-[inset_0_1px_0_hsl(0_0%_100%/0.12)] backdrop-blur-md lg:absolute lg:bottom-[25%] lg:right-[24%]"
          style={{ "--d": "1300ms" } as React.CSSProperties}
        >
          <span aria-hidden className="size-2 rounded-full bg-link" />
          Available for freelance work
        </p>
      </div>

      <motion.div
        aria-hidden
        style={moving ? { scaleX: horizon } : undefined}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center bg-gradient-to-r from-transparent via-link to-transparent"
      />
    </section>
  );
}
