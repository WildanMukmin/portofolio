"use client";

import { useCallback, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import HeroVisual from "@/components/home/HeroVisual";
import { PINNED_OK, useMedia } from "@/lib/use-media";

interface Group {
  title: string;
  items: string[];
}

/** Share of the scroll a group spends fading in or out. */
const FADE = 0.07;

/** Opacity and title position for group `g` of `n`, as scroll-progress keyframes. */
function windowFor(g: number, n: number) {
  const start = g / n;
  const end = (g + 1) / n;
  if (g === 0) {
    return {
      stops: [0, end - FADE, end],
      opacity: [1, 1, 0],
      y: ["0%", "0%", "-110%"],
    };
  }
  if (g === n - 1) {
    return {
      stops: [start, start + FADE, 1],
      opacity: [0, 1, 1],
      y: ["110%", "0%", "0%"],
    };
  }
  return {
    stops: [start, start + FADE, end - FADE, end],
    opacity: [0, 1, 1, 0],
    y: ["110%", "0%", "0%", "-110%"],
  };
}

function Item({
  text,
  at,
  progress,
  pinned,
}: {
  text: string;
  at: number;
  progress: MotionValue<number>;
  pinned: boolean;
}) {
  const opacity = useTransform(progress, [at, at + 0.04], [0, 1]);
  const y = useTransform(progress, [at, at + 0.04], [32, 0]);
  return (
    <motion.li
      style={pinned ? { opacity, y } : undefined}
      className="transition-colors duration-200 hover:text-link"
    >
      {text}
    </motion.li>
  );
}

function GroupBlock({
  group,
  index,
  total,
  progress,
  pinned,
}: {
  group: Group;
  index: number;
  total: number;
  progress: MotionValue<number>;
  pinned: boolean;
}) {
  const w = windowFor(index, total);
  const opacity = useTransform(progress, w.stops, w.opacity);
  const titleY = useTransform(progress, w.stops, w.y);
  const stretch = useTransform(
    progress,
    [index / total, (index + 1) / total],
    ["100%", "125%"],
  );
  const start = index / total;

  return (
    <motion.div
      style={pinned ? { opacity } : undefined}
      className="grid gap-3 border-t border-border py-8 last:border-b md:grid-cols-[13rem_1fr] md:gap-10 pinned:block pinned:border-0 pinned:py-0 pinned:opacity-0 pinned:first:opacity-100 pinned:[grid-area:1/1] pinned:last:border-0"
    >
      <div className="pinned:overflow-hidden pinned:pb-[0.12em]">
        <motion.h3
          style={pinned ? { y: titleY, fontStretch: stretch } : undefined}
          className="text-sm text-muted-foreground md:pt-3 pinned:pt-0 pinned:font-display-wide pinned:text-[clamp(2.4rem,4.7vw,4.8rem)] pinned:font-extrabold pinned:leading-[0.95] pinned:text-foreground"
        >
          {group.title}
        </motion.h3>
      </div>
      <ul className="flex flex-wrap gap-x-7 gap-y-1 font-display text-3xl font-bold md:text-5xl pinned:mt-8 pinned:gap-y-3 pinned:text-[clamp(1.5rem,2.6vw,2.6rem)]">
        {group.items.map((item, k) => (
          <Item
            key={item}
            text={item}
            at={start + 0.03 + (0.17 * k) / group.items.length}
            progress={progress}
            pinned={pinned}
          />
        ))}
      </ul>
    </motion.div>
  );
}

function RailLabel({
  title,
  index,
  total,
  progress,
}: {
  title: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const fill = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 1],
  );
  return (
    <div className="flex-1">
      <p className="mb-2 truncate text-xs text-muted-foreground">{title}</p>
      <div className="h-px bg-border">
        <motion.div
          style={{ scaleX: fill }}
          className="h-px origin-left bg-link"
        />
      </div>
    </div>
  );
}

/**
 * Stack as a pinned scene. Scroll drives everything: the group titles swap
 * through masks while their width axis opens up, items arrive one by one, the
 * light slides across, and the chrome W swings through an arc as the studio
 * light sweeps over it. Below `lg`
 * or with reduced motion the same markup is a plain ruled list.
 */
export default function StackScene({ groups }: { groups: Group[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinned = useMedia(PINNED_OK);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const getProgress = useCallback(
    () => scrollYProgress.get(),
    [scrollYProgress],
  );
  const lightX = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const lightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.6]);
  // The W arrives only once the scene has pinned, so it never doubles up with the hero's.
  const visualOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-border pinned:h-[340vh]"
    >
      <div className="relative overflow-hidden pinned:sticky pinned:top-16 pinned:h-[calc(100dvh-4rem)]">
        {pinned && (
          <motion.div
            aria-hidden
            style={{ x: lightX, opacity: lightOpacity }}
            className="stack-light pointer-events-none absolute inset-y-0 -inset-x-1/4"
          />
        )}
        <div className="container relative mx-auto grid h-full gap-12 px-6 py-20 md:py-28 pinned:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] pinned:items-center pinned:py-0">
          <div className="flex flex-col pinned:justify-center">
            <h2 className="mb-10 font-display text-2xl font-bold md:text-3xl pinned:mb-12">
              Stack
            </h2>
            <div className="pinned:grid">
              {groups.map((group, index) => (
                <GroupBlock
                  key={group.title}
                  group={group}
                  index={index}
                  total={groups.length}
                  progress={scrollYProgress}
                  pinned={pinned}
                />
              ))}
            </div>
            {pinned && (
              <div aria-hidden className="mt-12 flex gap-4">
                {groups.map((group, index) => (
                  <RailLabel
                    key={group.title}
                    title={group.title}
                    index={index}
                    total={groups.length}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            )}
          </div>

          {pinned && (
            <motion.div
              style={{ opacity: visualOpacity }}
              className="aspect-square w-full max-w-[34rem] justify-self-center"
            >
              <HeroVisual
                mode="scroll"
                getProgress={getProgress}
                className="size-full"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
