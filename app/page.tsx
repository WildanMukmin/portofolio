"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import {
  fadeIn,
  maskReveal,
  rowIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    index: "01",
    title: "Production-first",
    description:
      "Ships features that hold up under real users — a university career platform, live booking systems — not proof-of-concepts.",
  },
  {
    index: "02",
    title: "Full-stack by necessity",
    description:
      "Comfortable across Next.js, Laravel, and PostgreSQL/MySQL — the tool is chosen for the project, not for the trend.",
  },
  {
    index: "03",
    title: "Taught it, not just used it",
    description:
      "Three semesters coordinating assistant lecturers for Data Structures and Database Systems at Universitas Lampung.",
  },
  {
    index: "04",
    title: "20+ shipped, real stakeholders",
    description:
      "Career centers, coffee shops, competition platforms — each built for an actual client or department.",
  },
];

const selectedWorks = [
  {
    index: "01",
    title: "Khalid Dzikri Course",
    subtitle: "Course System & Learning Management System",
    description:
      "Web-based course management system for online learning, course enrollment, and content delivery.",
    image: "/projects/khalid-dzikri-course.png",
    tech: ["Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    link: "https://www.khalidzikricourse.my.id/",
    label: "Education",
  },
  {
    index: "02",
    title: "Wibot",
    subtitle: "Automation for Social Media Posting & Scheduling",
    description:
      "Desktop application for automating social media posting and scheduling.",
    image: "/projects/wibot.jpg",
    tech: ["Electron", "React", "Tailwind", "Node.js", "MySQL"],
    link: "#",
    label: "Business",
  },
];

const workflow = [
  {
    step: "01",
    title: "Discovery",
    desc: "System requirement analysis and data architecture planning.",
  },
  {
    step: "02",
    title: "Development",
    desc: "Clean code writing with a modern, purpose-fit technology stack.",
  },
  {
    step: "03",
    title: "Deployment",
    desc: "Production launch, monitored and handed off.",
  },
];

const socials = [
  { icon: Github, link: "https://github.com/WildanMukmin", label: "GitHub" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/wildan-mukmin-7569422a7/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/wildanmukmin.dev/",
    label: "Instagram",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="container mx-auto px-6">
        {/* --- HERO --- */}
        <Section
          variant="headline"
          className="max-w-4xl space-y-8 pt-20 md:pt-16 min-h-[85vh] flex flex-col justify-center"
        >
          <motion.span
            variants={maskReveal}
            initial="hidden"
            animate="show"
            className="text-primary font-medium text-sm tracking-widest uppercase block"
          >
            Fullstack Web Developer
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            I don&apos;t just code.
            <br />
            <span className="italic text-muted-foreground">
              I build digital impact.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed border-l border-border pl-6">
            Turning ideas into scalable, high performance digital products —
            clean code, considered UI, systems built to actually last.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/portfolio">
              <Button size="lg" className="group">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg">
                Let&apos;s Collaborate
              </Button>
            </Link>
          </div>

          <div className="flex gap-3 pt-4">
            {socials.map((item) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="h-10 w-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </Section>

        {/* --- WHAT SETS THE WORK APART --- */}
        <Section className="mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-border pt-10"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.index}
                variants={rowIn}
                className="flex gap-6"
              >
                <span className="font-display text-2xl text-muted-foreground/50 shrink-0">
                  {feature.index}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* --- SELECTED WORKS --- */}
        <Section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-border pb-6">
            <div>
              <span className="text-primary font-medium text-sm tracking-widest uppercase mb-2 block">
                Selected Works
              </span>
              <h2 className="font-display text-4xl md:text-5xl">
                Recent projects
              </h2>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="group">
                View all archives
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="divide-y divide-border">
            {selectedWorks.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={fadeIn}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 py-14 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={project.link}
                  className="group relative aspect-video overflow-hidden rounded-md border border-border block"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </Link>

                <div>
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-xl text-muted-foreground/50">
                      {project.index}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {project.label}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {project.tech.join(" · ")}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- WORKFLOW --- */}
        <Section className="mb-8">
          <div className="mb-16 border-t border-border pt-10">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-2 block">
              Execution Protocol
            </span>
            <h2 className="font-display text-3xl md:text-4xl">
              How the work happens
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
            className="grid md:grid-cols-3 gap-10"
          >
            {workflow.map((item) => (
              <motion.div key={item.step} variants={rowIn}>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-3xl text-muted-foreground/40">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>
    </div>
  );
}
