import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/shared/Section";
import ProjectFeature from "@/components/shared/ProjectFeature";
import { projects } from "@/lib/projects";

const featured = projects.filter((project) => project.featured);
const others = projects.filter((project) => !project.featured);

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6">
      <Section className="pb-8 pt-16 md:pb-12 md:pt-24">
        <h1 className="font-display text-4xl font-bold md:text-6xl">
          Projects
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Web applications I&apos;ve built for university departments,
          companies, and events. Projects without a link don&apos;t have a
          public URL.
        </p>
      </Section>

      <Section className="py-12 md:py-16">
        <h2 className="mb-10 font-display text-2xl font-bold md:text-3xl">
          Featured
        </h2>
        <div className="space-y-16 md:space-y-24">
          {featured.map((project, index) => (
            <ProjectFeature
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-8 md:pt-12">
        <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">
          More projects
        </h2>
        <ul className="divide-y divide-border border-y border-border">
          {others.map((project) => (
            <li
              key={project.title}
              className="grid gap-4 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6 md:grid-cols-[12rem_1fr_auto] md:items-center md:gap-8"
            >
              <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-secondary">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 192px, (min-width: 640px) 160px, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {project.tech.join(" · ")}
                </p>
              </div>

              <div className="sm:col-start-2 md:col-start-auto md:text-right">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-1.5 text-sm font-medium text-link underline-offset-4 hover:underline"
                  >
                    Visit site
                    <ArrowUpRight className="size-4" aria-hidden />
                    <span className="sr-only">
                      , {project.title} (opens in a new tab)
                    </span>
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No public link
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
