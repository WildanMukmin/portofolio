"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { MOTION_OK, useMedia } from "@/lib/use-media";

function Word({
  word,
  from,
  to,
  progress,
  moving,
}: {
  word: string;
  from: number;
  to: number;
  progress: MotionValue<number>;
  moving: boolean;
}) {
  const lit = useTransform(progress, [from, to], [0, 1]);
  return (
    <>
      {/*
        Colour, not opacity: an unread word is the muted text colour, which
        already passes AA, so the scroll effect never drops below the
        contrast floor. --lit defaults to 1, so without motion it is fully lit.
      */}
      <motion.span
        style={moving ? ({ "--lit": lit } as React.CSSProperties) : undefined}
        className="[color:color-mix(in_srgb,hsl(var(--foreground))_calc(var(--lit,1)*100%),hsl(var(--muted-foreground)))]"
      >
        {word}
      </motion.span>{" "}
    </>
  );
}

/**
 * About. The paragraph lights up word by word as the section scrolls through
 * the middle of the viewport, so reading speed follows scroll speed. The
 * portrait sits in a frame with its own, slower layer of movement.
 */
export default function AboutScene({
  text,
  name,
}: {
  text: string;
  name: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const moving = useMedia(MOTION_OK);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: readProgress } = useScroll({
    target: textRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const portraitY = useTransform(sectionProgress, [0, 1], ["8%", "-8%"]);
  const glowScale = useTransform(sectionProgress, [0.2, 0.55, 0.9], [0.6, 1.15, 0.8]);
  const words = text.split(" ");

  return (
    <div
      ref={sectionRef}
      className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card lg:col-span-4 lg:mx-0">
        <motion.div
          aria-hidden
          style={moving ? { scale: glowScale } : undefined}
          className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_85%,hsl(var(--primary)/0.4),transparent_70%)]"
        />
        <motion.div
          style={moving ? { y: portraitY } : undefined}
          className="absolute inset-x-0 -bottom-[8%] h-[108%]"
        >
          <Image
            src="/wildan-cutout.png"
            alt={name}
            width={1013}
            height={1357}
            sizes="(min-width: 1024px) 30vw, 384px"
            className="absolute inset-x-0 bottom-0 h-auto w-full select-none"
          />
        </motion.div>
      </div>

      <div className="lg:col-span-8 lg:pb-6">
        <h2 className="font-display text-2xl font-bold md:text-3xl">About</h2>
        <p
          ref={textRef}
          className="mt-6 max-w-3xl text-xl leading-relaxed md:text-3xl md:leading-snug"
        >
          {words.map((word, i) => {
            const from = (i / words.length) * 0.85;
            return (
              <Word
                key={`${word}-${i}`}
                word={word}
                from={from}
                to={from + 0.15}
                progress={readProgress}
                moving={moving}
              />
            );
          })}
        </p>
        <Link
          href="/aboutme"
          className="mt-8 flex h-11 w-fit items-center font-medium text-link underline-offset-4 hover:underline"
        >
          Experience and education
        </Link>
      </div>
    </div>
  );
}
