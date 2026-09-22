import Section from "@/components/shared/Section";
import ProjectFeature from "@/components/shared/ProjectFeature";
import { projects } from "@/lib/projects";

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

      <Section className="pb-16 pt-4 md:pb-24 md:pt-8">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectFeature
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
