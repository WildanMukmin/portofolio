import Link from "next/link";
import AboutScene from "@/components/home/AboutScene";
import Hero from "@/components/home/Hero";
import StackScene from "@/components/home/StackScene";
import Section from "@/components/shared/Section";
import ProjectScene from "@/components/shared/ProjectScene";
import { projects } from "@/lib/projects";
import { site, stack } from "@/lib/site";

const ABOUT =
  "I'm a Computer Science undergraduate at Lampung University (UNILA), specializing in full-stack web development with React, Next.js, Laravel, and SQL. One project I'm proudest of is a career center platform I built independently, end to end, from database design to deployment.";

const featured = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <>
      <Hero />

      <StackScene groups={stack} />

      <div className="border-y border-border bg-card/40">
        <div className="container mx-auto px-6">
          <Section className="py-20 md:py-32">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-x-6 md:mb-20">
              <h2 className="font-display-wide text-4xl font-extrabold md:text-6xl">
                Selected work
              </h2>
              <Link
                href="/portfolio"
                className="flex h-11 items-center font-medium text-link underline-offset-4 hover:underline"
              >
                All {projects.length} projects
              </Link>
            </div>
            <div className="space-y-28 md:space-y-48">
              {featured.map((project, index) => (
                <ProjectScene
                  key={project.title}
                  project={project}
                  side={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Section className="py-20 md:py-32">
          <AboutScene text={ABOUT} name={site.name} />
        </Section>
      </div>
    </>
  );
}
