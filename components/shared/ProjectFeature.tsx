"use client";

import { cn } from "@/lib/utils";
import ProjectPreview from "@/components/shared/ProjectPreview";
import { Stack, VisitLink } from "@/components/shared/project-parts";
import type { Project } from "@/lib/projects";
import type { ProjectLayout } from "@/components/shared/project-layout";

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
        <ProjectPreview project={project} sizes="(min-width: 1280px) 1200px, 100vw" />
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
        <ProjectPreview project={project} sizes="(min-width: 1024px) 55vw, 100vw" />
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
