import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function Stack({ items }: { items: string[] }) {
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

export function VisitLink({ project }: { project: Project }) {
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
