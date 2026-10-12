import PageGlow from "@/components/shared/PageGlow";
import Section from "@/components/shared/Section";
import ProjectFeature from "@/components/shared/ProjectFeature";
import { layoutFor } from "@/components/shared/project-layout";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6">
      <PageGlow />
      <Section className="pb-8 pt-16 md:pb-12 md:pt-24">
        <h1 className="font-display-wide text-5xl font-extrabold md:text-8xl">
          Projects
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Web applications I&apos;ve built for university departments,
          companies, and events. Projects without a link don&apos;t have a
          public URL.
        </p>
      </Section>

      <Section className="pb-16 pt-4 md:pb-24 md:pt-8">
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, index) => (
            <ProjectFeature
              key={project.title}
              project={project}
              layout={layoutFor(index)}
              headingLevel="h2"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
