import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Section from "@/components/shared/Section";
import ProjectFeature from "@/components/shared/ProjectFeature";
import { layoutFor } from "@/components/shared/project-layout";
import { projects } from "@/lib/projects";
import { site, stack } from "@/lib/site";

const featured = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container mx-auto px-6">
        <Section className="py-20 md:py-28">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Stack</h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {stack.map((group) => (
              <div
                key={group.title}
                className="grid gap-3 py-8 md:grid-cols-[13rem_1fr] md:gap-10"
              >
                <dt className="text-sm text-muted-foreground md:pt-3">
                  {group.title}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-7 gap-y-1 font-display text-3xl font-bold md:text-5xl">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="transition-colors duration-200 hover:text-link"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

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
            <div className="space-y-20 md:space-y-32">
              {featured.map((project, index) => (
                <ProjectFeature
                  key={project.title}
                  project={project}
                  layout={layoutFor(index)}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Section className="py-20 md:py-32">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card lg:col-span-4 lg:mx-0">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_85%,hsl(var(--primary)/0.4),transparent_70%)]"
              />
              <Image
                src="/wildan-cutout.png"
                alt={site.name}
                width={1013}
                height={1357}
                sizes="(min-width: 1024px) 30vw, 384px"
                className="absolute inset-x-0 bottom-0 h-auto w-full select-none"
              />
            </div>
            <div className="lg:col-span-8 lg:pb-6">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                About
              </h2>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed md:text-3xl md:leading-snug">
                I&apos;m a Computer Science undergraduate at Lampung University
                (UNILA), specializing in full-stack web development with React,
                Next.js, Laravel, and SQL. One project I&apos;m proudest of is
                a career center platform I built independently, end to end,
                from database design to deployment.
              </p>
              <Link
                href="/aboutme"
                className="mt-8 flex h-11 w-fit items-center font-medium text-link underline-offset-4 hover:underline"
              >
                Experience and education
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
