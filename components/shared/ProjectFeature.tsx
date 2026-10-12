"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { easeEditorial } from "@/lib/motion";
import type { Project } from "@/lib/projects";
import type { ProjectLayout } from "@/components/shared/project-layout";

/**
 * Wipes down from the top. The revealed clip overshoots the box so the frame's
 * shadow survives. The first render is identical on server and client; reduced
 * motion only shortens the duration to zero.
 */
const revealVariants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: (reduceMotion: boolean) => ({
    clipPath: "inset(-20% -5% -20% -5%)",
    transition: { duration: reduceMotion ? 0 : 1, ease: easeEditorial },
  }),
};

const MAX_TILT_X = 4;
const MAX_TILT_Y = 6;

function hostOf(link?: string) {
  if (!link) return "No public link";
  return new URL(link).hostname.replace(/^www\./, "");
}

interface PreviewProps {
  project: Project;
  sizes: string;
}

/**
 * Browser-framed screenshot with a gallery strip. On a fine pointer the frame
 * tilts a few degrees toward the cursor and its edge lights up where the
 * cursor is; both are written to motion values / CSS variables, not state.
 */
function Preview({ project, sizes }: PreviewProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const tiltable = useFinePointer();
  const frameRef = useRef<HTMLDivElement>(null);
  const tiltX = useSpring(0, { stiffness: 160, damping: 18 });
  const tiltY = useSpring(0, { stiffness: 160, damping: 18 });

  const current = project.images[active];
  const hasGallery = project.images.length > 1;

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!tiltable || !frame) return;
    const rect = frame.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * 2 * MAX_TILT_Y);
    tiltX.set((0.5 - py) * 2 * MAX_TILT_X);
    frame.style.setProperty("--mx", `${px * 100}%`);
    frame.style.setProperty("--my", `${py * 100}%`);
  };

  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const screenshot = (
    <div className="relative aspect-video overflow-hidden bg-secondary">
      <Image
        key={current.src}
        src={current.src}
        alt={current.alt}
        fill
        sizes={sizes}
        className="swap-in object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );

  return (
    <div className="min-w-0">
      {/* The observed wrapper is never clipped: IntersectionObserver treats a
          fully clipped element as invisible and the reveal would never start. */}
      <motion.div
        style={{ perspective: 1400 }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          ref={frameRef}
          style={tiltable ? { rotateX: tiltX, rotateY: tiltY } : undefined}
          className="spotlight-edge rounded-xl p-px shadow-[0_28px_60px_-34px_hsl(var(--primary)/0.55)]"
          variants={revealVariants}
          custom={Boolean(reduceMotion)}
        >
          <div className="overflow-hidden rounded-[calc(0.75rem-1px)] bg-card">
            <div className="flex h-9 items-center border-b border-border px-4 font-mono text-xs text-muted-foreground">
              {hostOf(project.link)}
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block"
              >
                {screenshot}
              </a>
            ) : (
              screenshot
            )}
          </div>
        </motion.div>
      </motion.div>

      {hasGallery && (
        <div
          className="mt-4 flex min-w-0 gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label={`${project.title} screenshots`}
        >
          {project.images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active}
              aria-label={image.alt}
              className={cn(
                "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-[opacity,border-color] duration-200",
                i === active
                  ? "border-link opacity-100"
                  : "border-border opacity-55 hover:opacity-100",
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-y-1 font-mono text-sm text-muted-foreground">
      {items.map((item) => (
        <li
          key={item}
          className="border-r border-border px-3 first:pl-0 last:border-r-0"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function VisitLink({ project }: { project: Project }) {
  if (!project.link) return null;
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex h-11 items-center gap-1.5 font-medium text-link underline-offset-4 hover:underline"
    >
      Visit site
      <ArrowUpRight
        className="size-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
        aria-hidden
      />
      <span className="sr-only">, {project.title} (opens in a new tab)</span>
    </a>
  );
}

interface ProjectFeatureProps {
  project: Project;
  layout: ProjectLayout;
  /** h3 under a section heading (home), h2 directly under the page h1 (projects page). */
  headingLevel?: "h2" | "h3";
}

/** One project as a case-study row. `layout` varies the composition between rows. */
export default function ProjectFeature({
  project,
  layout,
  headingLevel: Heading = "h3",
}: ProjectFeatureProps) {
  if (layout === "wide") {
    return (
      <article className="group grid gap-8">
        <Preview project={project} sizes="(min-width: 1280px) 1200px, 100vw" />
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-mono text-sm text-muted-foreground">
              {project.category}
            </p>
            <Heading className="mt-3 font-display text-3xl font-bold md:text-5xl">
              {project.title}
            </Heading>
            <p className="mt-2 text-muted-foreground">{project.subtitle}</p>
          </div>
          <p className="max-w-prose leading-relaxed md:col-span-4">
            {project.description}
          </p>
          <div className="md:col-span-3">
            <Stack items={project.tech} />
            <div className="mt-4">
              <VisitLink project={project} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  const reversed = layout === "split-reverse";
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div className={cn("min-w-0 lg:col-span-7", reversed && "lg:order-2")}>
        <Preview project={project} sizes="(min-width: 1024px) 55vw, 100vw" />
      </div>
      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <p className="font-mono text-sm text-muted-foreground">
          {project.category}
        </p>
        <Heading className="mt-3 font-display text-3xl font-bold md:text-4xl">
          {project.title}
        </Heading>
        <p className="mt-2 text-muted-foreground">{project.subtitle}</p>
        <p className="mt-5 max-w-prose leading-relaxed">
          {project.description}
        </p>
        <div className="mt-6">
          <Stack items={project.tech} />
        </div>
        <div className="mt-6">
          <VisitLink project={project} />
        </div>
      </div>
    </article>
  );
}
