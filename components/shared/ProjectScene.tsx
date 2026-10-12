"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectPreview from "@/components/shared/ProjectPreview";
import { Stack, VisitLink } from "@/components/shared/project-parts";
import { easing } from "@/lib/motion";
import { MOTION_OK, useMedia } from "@/lib/use-media";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectSceneProps {
  project: Project;
  /** Which side the preview enters from. Alternating it gives each project its own entrance. */
  side: "left" | "right";
  /** h3 under a section heading (home), h2 directly under the page h1. */
  headingLevel?: "h2" | "h3";
}

const infoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

/** Each piece of metadata rises into place and fades; the title is clipped so it appears to slide out of a slot. */
const riseFrom = (direction: number) => ({
  hidden: { opacity: 0, x: direction * 28, y: 14 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: easing.snap },
  },
});

/**
 * A featured project as a full scene. While it crosses the viewport the
 * preview swings in from the side with perspective, the screenshot drifts
 * inside its frame, and an oversized outline of the project name slides the
 * opposite way behind it. The metadata arrives after the preview has landed.
 */
export default function ProjectScene({
  project,
  side,
  headingLevel: Heading = "h3",
}: ProjectSceneProps) {
  const ref = useRef<HTMLElement>(null);
  const moving = useMedia(MOTION_OK);
  const wide = useMedia("(min-width: 1024px)");
  const dir = side === "left" ? -1 : 1;
  const amount = wide ? 1 : 0.45;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.38], [20 * amount, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.38], [dir * 10 * amount, 0]);
  const x = useTransform(scrollYProgress, [0, 0.38], [dir * 160 * amount, 0]);
  const y = useTransform(scrollYProgress, [0, 0.38, 0.8, 1], [140 * amount, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.38], [0.88, 1]);
  const ghostX = useTransform(
    scrollYProgress,
    [0, 1],
    [`${dir * -14}%`, `${dir * 14}%`],
  );
  const ghostOpacity = useTransform(scrollYProgress, [0.05, 0.4, 0.75, 1], [0, 1, 1, 0]);

  const info = riseFrom(-dir);

  return (
    <article
      ref={ref}
      className="group relative isolate grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
    >
      <motion.p
        aria-hidden
        style={moving ? { x: ghostX, opacity: ghostOpacity } : undefined}
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 select-none whitespace-nowrap font-display-wide text-[clamp(4.5rem,15vw,14rem)] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.09)]"
      >
        {project.title}
      </motion.p>

      <motion.div
        style={moving ? { x, y, scale, rotateX, rotateY, transformPerspective: 1600 } : undefined}
        className={cn("min-w-0 lg:col-span-8", side === "right" && "lg:order-2")}
      >
        <ProjectPreview
          project={project}
          sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
          reveal={false}
          progress={moving ? scrollYProgress : undefined}
        />
      </motion.div>

      <motion.div
        data-reveal
        variants={infoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className={cn("lg:col-span-4", side === "right" && "lg:order-1")}
      >
        <motion.p
          data-reveal
          variants={info}
          className="font-mono text-sm text-muted-foreground"
        >
          {project.category}
        </motion.p>
        <div className="mt-3 overflow-hidden pb-[0.12em]">
          <motion.div
            data-reveal
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%", transition: { duration: 1, ease: easing.snap } },
            }}
          >
            <Heading className="font-display-wide text-3xl font-extrabold leading-[1.02] md:text-5xl">
              {project.title}
            </Heading>
          </motion.div>
        </div>
        <motion.p data-reveal variants={info} className="mt-3 text-muted-foreground">
          {project.subtitle}
        </motion.p>
        <motion.p
          data-reveal
          variants={info}
          className="mt-5 max-w-prose leading-relaxed"
        >
          {project.description}
        </motion.p>
        <motion.div data-reveal variants={info} className="mt-6">
          <Stack items={project.tech} />
        </motion.div>
        <motion.div data-reveal variants={info} className="mt-6">
          <VisitLink project={project} />
        </motion.div>
      </motion.div>
    </article>
  );
}
