import PageGlow from "@/components/shared/PageGlow";
import PageTitle from "@/components/shared/PageTitle";
import Section from "@/components/shared/Section";
import ProjectFeature from "@/components/shared/ProjectFeature";
import ProjectScene from "@/components/shared/ProjectScene";
import { layoutFor } from "@/components/shared/project-layout";
import { projects } from "@/lib/projects";

const featured = projects.filter((project) => project.featured);
const more = projects.filter((project) => !project.featured);

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6">
      <PageGlow />
      <Section className="pb-8 pt-16 md:pb-12 md:pt-24">
        <PageTitle className="text-5xl md:text-8xl">Projects</PageTitle>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Web applications I&apos;ve built for university departments,
          companies, and events. Projects without a link don&apos;t have a
          public URL.
        </p>
      </Section>

      <div className="space-y-28 pb-28 pt-12 md:space-y-48 md:pb-48 md:pt-20">
        {featured.map((project, index) => (
          <ProjectScene
            key={project.title}
            project={project}
            side={index % 2 === 0 ? "left" : "right"}
            headingLevel="h2"
          />
        ))}
      </div>

      <Section className="pb-16 pt-4 md:pb-24 md:pt-8">
        <h2 className="font-display-wide text-4xl font-extrabold md:text-6xl">
          More projects
        </h2>
        <div className="mt-14 space-y-24 md:mt-20 md:space-y-36">
          {more.map((project, index) => (
            <ProjectFeature
              key={project.title}
              project={project}
              layout={layoutFor(index)}
              headingLevel="h3"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
