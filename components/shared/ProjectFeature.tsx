import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectFeatureProps {
  project: Project;
  index: number;
}

/** Large project row. Image and text swap sides on every other row. */
export default function ProjectFeature({
  project,
  index,
}: ProjectFeatureProps) {
  const reversed = index % 2 === 1;

  const media = (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(min-width: 768px) 55vw, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );

  return (
    <article className="group grid items-center gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
      <div className={cn("lg:col-span-7", reversed && "md:order-2")}>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="block"
          >
            {media}
          </a>
        ) : (
          media
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
