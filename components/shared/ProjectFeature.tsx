"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectFeatureProps {
  project: Project;
  index: number;
}

/**
 * Large project row with a browsable screenshot gallery. Image and text
 * swap sides on every other row.
 */
export default function ProjectFeature({
  project,
  index,
}: ProjectFeatureProps) {
  const reversed = index % 2 === 1;
  const [active, setActive] = useState(0);
  const current = project.images[active];
  const hasGallery = project.images.length > 1;

  const cover = (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
      <Image
        key={current.src}
        src={current.src}
        alt={current.alt}
        fill
        sizes="(min-width: 768px) 55vw, 100vw"
        className="animate-page-in object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );

  return (
    <article className="group grid items-center gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
      <div className={cn("min-w-0 lg:col-span-7", reversed && "md:order-2")}>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="block"
          >
            {cover}
          </a>
        ) : (
          cover
        )}

        {hasGallery && (
          <div
            className="mt-3 flex min-w-0 gap-2 overflow-x-auto"
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
                  "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-opacity",
                  i === active
                    ? "border-primary opacity-100"
                    : "border-border opacity-60 hover:opacity-100",
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

      <div className={cn("lg:col-span-5", reversed && "md:order-1")}>
        <p className="font-mono text-sm text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-muted-foreground">{project.subtitle}</p>
        <p className="mt-4 leading-relaxed">{project.description}</p>
        <p className="mt-5 font-mono text-sm text-muted-foreground">
          {project.tech.join(" · ")}
        </p>
        <div className="mt-6">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 font-medium text-link underline-offset-4 hover:underline"
            >
              Visit site
              <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">
                , {project.title} (opens in a new tab)
              </span>
            </a>
          ) : (
            <p className="text-sm text-muted-foreground">No public link</p>
          )}
        </div>
      </div>
    </article>
  );
}
