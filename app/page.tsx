"use client";

import Section from "@/components/shared/Section";
import Marquee from "@/components/shared/Marquee";
import { Button } from "@/components/ui/Button";
import {
  fadeIn,
  headlineIn,
  rowIn,
  scaleIn,
  staggerContainer,
  useParallax,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Instagram,
  Layers,
  Linkedin,
  MessageCircle,
  Search,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "Tailwind CSS",
  "PostgreSQL",
  "Node.js",
  "Framer Motion",
];

const features = [
  {
    title: "End-to-End Delivery",
    description:
      "From database design to deployment, I handle the whole build — not just the interface.",
    icon: Layers,
  },
  {
    title: "Modern, Maintainable Code",
    description:
      "TypeScript and clean architecture, so the codebase stays easy to extend later.",
    icon: Code2,
  },
  {
    title: "Performance-Minded",
    description:
      "Interfaces tuned to feel instant, on slow connections and small screens alike.",
    icon: Zap,
  },
  {
    title: "Clear Communication",
    description:
      "Regular updates in plain language — no jargon, no guessing where a project stands.",
    icon: MessageCircle,
  },
];

const selectedWorks = [
  {
    title: "Khalid Dzikri Course",
    subtitle: "Course System & Learning Management System",
    description:
      "Web-based course management system for online learning, course enrollment, and content delivery.",
    image: "/projects/khalid-dzikri-course.png",
    tech: ["Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    link: "https://www.khalidzikricourse.my.id/",
    label: "EDUCATION",
  },
  {
    title: "Wibot",
    subtitle: "Automation Social Media Posting & Scheduling",
    description:
      "Desktop application for automating social media posting and scheduling.",
    image: "/projects/wibot.jpg",
    tech: ["Electron", "React", "Tailwind", "Node.js", "MySQL"],
    link: "#",
    label: "BUSINESS",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    icon: Search,
    desc: "Understanding the goal, the users, and the data before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design & Build",
    icon: Terminal,
    desc: "Clean architecture and UI built together, iterated in short feedback loops.",
  },
  {
    step: "03",
    title: "Refine",
    icon: Code2,
    desc: "Performance passes, edge cases, and polish so it holds up in the real world.",
  },
  {
    step: "04",
    title: "Ship",
    icon: Layers,
    desc: "Deployed, monitored, and handed over with room to keep growing.",
  },
];

const skillGroups = [
  {
    title: "Core Stack",
    skills: [
      { name: "Next.js / React", value: 95 },
      { name: "TypeScript", value: 88 },
      { name: "Tailwind CSS", value: 95 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Laravel / PHP", value: 85 },
      { name: "PostgreSQL / MySQL", value: 82 },
      { name: "Git & Deployment", value: 90 },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Add a real client testimonial here — a sentence on the result you delivered and what it was like to work with you.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Second placeholder quote — swap this once you have feedback from a freelance client or team lead.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Third placeholder — delete this card entirely if you'd rather launch without a testimonials section.",
    name: "Client Name",
    role: "Role, Company",
  },
];

/**
 * Hero portrait with a "big subject in front of the headline" treatment:
 * the cutout stands centered on top of the headline text (z-index layered),
 * bottom-aligned in a fixed-height stage so it reads as one composition.
 *
 * It looks for /wildan-cutout.png (a transparent PNG cutout) first. Until
 * that file exists it falls back to the regular framed photo automatically
 * — no code change needed once the cutout is added, just drop the file in.
 */
function HeroPortrait({ parallaxY }: { parallaxY: MotionValue<number> }) {
  const [src, setSrc] = useState("/wildan-cutout.png");
  const isCutout = src === "/wildan-cutout.png";

  return (
    <motion.div
      style={{ y: parallaxY }}
      className={cn(
        "relative z-10 h-full",
        !isCutout &&
          "w-[65%] max-w-xs rounded-3xl overflow-hidden border border-border bg-card",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        onError={() => setSrc("/wildan.png")}
        alt="Wildan Mukmin"
        draggable={false}
        className={cn(
          "select-none pointer-events-none",
          isCutout
            ? "h-full w-auto object-contain drop-shadow-2xl"
            : "w-full h-full object-cover",
        )}
      />
      <div className="absolute bottom-6 -left-6 sm:-left-12 rounded-2xl bg-foreground text-background px-4 py-3 sm:px-5 sm:py-4 shadow-xl">
        <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
          3+
        </div>
        <div className="text-[10px] sm:text-xs uppercase tracking-wider text-background/70">
          Years Experience
        </div>
      </div>
      <div className="absolute top-10 -right-4 sm:-right-10 rounded-2xl bg-primary text-primary-foreground px-3 py-2 sm:px-4 sm:py-3 shadow-xl rotate-3">
        <div className="font-display text-xl sm:text-2xl font-bold">20+</div>
        <div className="text-[9px] sm:text-[10px] uppercase tracking-wider">
          Projects
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const portraitY = useParallax(heroRef, 24);
  const glowY1 = useParallax(heroRef, 70);
  const glowY2 = useParallax(heroRef, 45);
  const worksGlowY = useParallax(worksRef, 80);
  const aboutPhotoY = useParallax(aboutRef, 30);

  return (
    <div className="relative overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* ================= HERO ================= */}
        <Section className="pt-12 pb-20 md:pt-16 relative">
          <div
            ref={heroRef}
            className="relative flex flex-col items-center text-center"
          >
            {/* Parallax glow blobs */}
            <motion.div
              style={{ y: glowY1 }}
              aria-hidden
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-primary/20 blur-[130px] pointer-events-none -z-10"
            />
            <motion.div
              style={{ y: glowY2 }}
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10"
            />

            <motion.span
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for freelance work
            </motion.span>

            {/* Stage: big headline centered behind, big portrait centered in front */}
            <div className="relative w-full max-w-5xl h-[360px] sm:h-[480px] md:h-[600px] lg:h-[720px] mt-8 mb-2 flex items-end justify-center">
              <motion.h1
                variants={headlineIn}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 z-0 flex flex-col items-center justify-center font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] select-none px-2"
              >
                <span>I Build Products,</span>
                <span className="text-primary">Not Just Websites.</span>
              </motion.h1>

              <HeroPortrait parallaxY={portraitY} />
            </div>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
            >
              Full-stack developer specializing in React, Next.js, and
              Laravel. I design, build, and ship complete systems end to
              end — not just prototypes.
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
            >
              <Link href="/portfolio">
                <Button size="lg" className="group">
                  Explore Projects
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Let&apos;s Collaborate
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="flex gap-3"
            >
              {[
                { icon: Github, link: "https://github.com/WildanMukmin" },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/wildan-mukmin-7569422a7/",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/wildanmukmin.dev/",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </motion.div>
          </div>
        </Section>
      </div>

      {/* ================= TECH MARQUEE ================= */}
      <div className="border-y border-border bg-foreground text-background py-4">
        <Marquee items={techStack} />
      </div>

      <div className="container mx-auto px-6">
        {/* ================= WHY WORK WITH ME ================= */}
        <Section className="py-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              Why choose me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Why Work with Me
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={rowIn}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/60 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-foreground text-primary flex items-center justify-center mb-5">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>

      {/* ================= SELECTED WORKS ================= */}
      <div ref={worksRef} className="relative bg-foreground text-background overflow-hidden">
        <motion.div
          style={{ y: worksGlowY }}
          aria-hidden
          className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full bg-primary/25 blur-[130px] pointer-events-none -z-10"
        />
        <div className="container mx-auto px-6 relative">
          <Section className="py-24">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
              <div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                  Selected work
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  A Few Things I&apos;ve Shipped
                </h2>
              </div>
              <Link href="/portfolio">
                <Button variant="inverse" className="group shrink-0">
                  Browse all work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {selectedWorks.map((project, i) => (
                <motion.div
                  key={i}
                  variants={rowIn}
                  className="group relative rounded-2xl bg-background/5 border border-background/15 overflow-hidden hover:border-primary/60 transition-colors"
                >
                  <Link href={project.link}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground tracking-widest">
                        {project.label}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-background/60">
                          {project.subtitle}
                        </p>
                      </div>
                      <Link href={project.link}>
                        <div className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                          <ExternalLink size={18} />
                        </div>
                      </Link>
                    </div>

                    <p className="text-sm text-background/60 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-mono rounded bg-background/10 text-background/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* ================= PROCESS ================= */}
        <Section className="py-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              My process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              How I Work
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((item, i) => (
              <motion.div key={i} variants={rowIn} className="relative">
                <div className="text-6xl font-display font-bold text-border select-none mb-2">
                  {item.step}
                </div>
                <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 -mt-8">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* ================= SKILLS ================= */}
        <Section className="py-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              Skills &amp; tools
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What I Work With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-bold text-lg mb-6">{group.title}</h3>
                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm font-semibold mb-2">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.value}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ================= ABOUT TEASER ================= */}
        <Section className="py-24">
          <div ref={aboutRef} className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ y: aboutPhotoY }}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-card border border-border order-2 md:order-1"
            >
              <Image
                src="/wildan.png"
                alt="Wildan Mukmin"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                About me
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                A Little About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m a Computer Science undergraduate at Lampung
                University (UNILA), specializing in full-stack web
                development with React, Next.js, Laravel, and SQL. One
                project I&apos;m proudest of is a career center platform I
                built independently, end to end — from database design to
                deployment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-2xl font-bold text-primary">
                    3+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-2xl font-bold text-primary">
                    20+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Projects
                  </div>
                </div>
              </div>
              <Link href="/aboutme">
                <Button variant="outline" className="group">
                  More About Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ================= TESTIMONIALS (placeholder) ================= */}
        <Section className="py-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-3">
              <Sparkles className="h-4 w-4" />
              Placeholder section — replace or remove
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What People Say
            </h2>
            <p className="text-muted-foreground mt-3">
              No real client quotes yet, so these cards are placeholders.
              Swap in real feedback or delete this section entirely.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={rowIn}
                className="rounded-2xl border border-dashed border-border bg-card p-6"
              >
                <div className="flex gap-1 text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>
    </div>
  );
}
