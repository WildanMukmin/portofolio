import Image from "next/image";
import Link from "next/link";
import Section from "@/components/shared/Section";
import ProjectFeature from "@/components/shared/ProjectFeature";
import { buttonClasses } from "@/components/ui/Button";
import { projects } from "@/lib/projects";
import { site, socials, stack } from "@/lib/site";

const featured = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <>
      {/* Hero: text left, portrait standing on the section's bottom rule. */}
      <div className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0"
        />
        <div className="container relative mx-auto grid items-end gap-x-12 px-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="pb-10 pt-12 md:pt-20 lg:pb-24 lg:pt-28">
            <p className="text-sm font-medium text-link">{site.role}</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              I build web applications with Next.js, React, and Laravel.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I&apos;ve built course platforms, internal tools, and company
              websites, writing both the interface and the backend.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className={buttonClasses({ size: "lg" })}
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className={buttonClasses({ variant: "outline", size: "lg" })}
              >
                Contact Me
              </Link>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden className="size-2 rounded-full bg-link" />
              Available for freelance work
            </p>
            <ul className="mt-1 flex flex-wrap gap-x-6">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center text-sm font-medium text-foreground transition-colors hover:text-link"
                  >
                    {item.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[260px] self-end sm:max-w-[320px] lg:ml-auto lg:mr-0 lg:max-w-[460px]">
            <Image
              src="/wildan-cutout.png"
              alt={site.name}
              width={1013}
              height={1357}
              priority
              sizes="(min-width: 1024px) 460px, 320px"
              className="h-auto w-full select-none"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Section className="py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Stack
            </h2>
            <dl className="grid gap-8 sm:grid-cols-3">
              {stack.map((group) => (
                <div key={group.title}>
                  <dt className="text-sm text-muted-foreground">
                    {group.title}
                  </dt>
                  <dd className="mt-2 font-mono text-sm leading-7">
                    {group.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      </div>

      <div className="border-y border-border bg-card">
        <div className="container mx-auto px-6">
          <Section>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-x-6">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Selected work
              </h2>
              <Link
                href="/portfolio"
                className="flex h-11 items-center font-medium text-link underline-offset-4 hover:underline"
              >
                All {projects.length} projects
              </Link>
            </div>
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
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Section>
          <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              About
            </h2>
            <div className="max-w-3xl">
              <p className="text-xl leading-relaxed md:text-2xl">
                I&apos;m a Computer Science undergraduate at Lampung University
                (UNILA), specializing in full-stack web development with React,
                Next.js, Laravel, and SQL. One project I&apos;m proudest of is
                a career center platform I built independently, end to end,
                from database design to deployment.
              </p>
              <Link
                href="/aboutme"
                className="mt-6 flex h-11 w-fit items-center font-medium text-link underline-offset-4 hover:underline"
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
