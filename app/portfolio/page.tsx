"use client";

import Section from "@/components/shared/Section";
import { rowIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "My KKN Unila",
    subtitle: "System for KKN Unila Students",
    description:
      "Web-based system for managing KKN (Kuliah Kerja Nyata) student data, including registration, group assignments, and progress tracking.",
    image: "/projects/my-kkn-unila.png",
    tech: ["Next.js", "Tailwind", "Node.js", "Laravel", "MySQL"],
    link: "#",
    github: "#",
    label: "EDUCATION",
  },
  {
    title: "Wibot",
    subtitle: "Automation Sosial Media Posting & Scheduling",
    description:
      "Desktop application for automating social media posting and scheduling.",
    image: "/projects/wibot.jpg",
    tech: ["Electron", "React", "Tailwind", "Node.js", "MySQL"],
    link: "#",
    github: "#",
    label: "BUSINESS",
  },
  {
    title: "Khalid Dzikri Courese",
    subtitle: "Coure System & Learning Management System",
    description:
      "Web-based course management system for online learning, course enrollment, and content delivery.",
    image: "/projects/khalid-dzikri-course.png",
    tech: ["Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    link: "https://www.khalidzikricourse.my.id/",
    github: "#",
    label: "EDUCATION",
  },
  {
    title: "Zoom Monitoring System",
    subtitle: "PLN UID Lampung",
    description:
      "Internal web-based system for monitoring Zoom meetings, attendance tracking, and analytics across departments.",
    image: "/projects/zoom-pln.jpg",
    tech: ["Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    link: "https://monitoring-zoom-pln.vercel.app/",
    github: "#",
    label: "ENTERPRISE",
  },
  {
    title: "RMS Coffee Website",
    subtitle: "Company Profile & Information System",
    description:
      "Modern company profile website showcasing brand identity and digital presence.",
    image: "/projects/rms-coffee.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://www.rmscoffee.com/profile",
    github: "#",
    label: "BUSINESS",
  },
  {
    title: "Asdos & Lab Management System",
    subtitle: "Computer Science - Universitas Lampung",
    description:
      "Web-based management system for assistant lecturer recruitment, lab scheduling, class assignments, and academic administration.",
    image: "/projects/asdos-unila.jpg",
    tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    link: "https://lab.ilkom.unila.ac.id/",
    github: "#",
    label: "EDUCATION",
  },
  {
    title: "AI Generator Web App",
    subtitle: "AI Image, Video & Chatbot Platform",
    description:
      "Web application for generating AI-based images, videos, and chatbot responses using multiple AI APIs integration.",
    image: "/projects/ai-generator.jpg",
    tech: ["Next.js", "Node.js", "OpenAI API", "Cloud Storage"],
    link: "http://floracauna.com/",
    github: "#",
    label: "AI PLATFORM",
  },
  {
    title: "Computer Science Showdown (CSS) 2.0",
    subtitle: "Event Information Website",
    description:
      "Official event website providing competition information, registration, schedules, and announcements.",
    image: "/projects/css-2.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://unilacss.com/",
    github: "#",
    label: "EVENT",
  },
  {
    title: "Arta Coffee Website",
    subtitle: "Company Profile & Digital Branding",
    description:
      "Modern coffee shop company profile website showcasing products, gallery, and brand identity.",
    image: "/projects/arta-coffee.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://artacoffee.vercel.app/",
    github: "#",
    label: "BUSINESS",
  },
  {
    title: "LCT CSS Web Application",
    subtitle: "Competition Management System",
    description:
      "Web-based system for managing LCT competition scoring system, and leaderboard.",
    image: "/projects/lct-css.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    label: "COMPETITION",
  },
  {
    title: "MasterKayu",
    subtitle: "Wood & Furniture Information System",
    description:
      "Business website for wood supplier and furniture store with product catalog and order management features.",
    image: "/projects/masterkayu.jpg",
    tech: ["Next.js", "Tailwind", "Node.js"],
    link: "#",
    github: "#",
    label: "BUSINESS",
  },
  {
    title: "Travesia",
    subtitle: "Tourism Booking System",
    description:
      "Online booking system for tourism destinations including package selection, reservation, and payment integration.",
    image: "/projects/travesia.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Midtrans"],
    link: "#",
    github: "#",
    label: "TRAVEL",
  },
  {
    title: "CCED Unila Career Center",
    subtitle: "Job Portal & Career Management System",
    description:
      "Career center web application similar to JobStreet, featuring job listings, employer dashboards, and applicant management.",
    image: "/projects/cced-unila.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    link: "#",
    github: "#",
    label: "CAREER PLATFORM",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative">
      <div className="container mx-auto px-6">
        {/* ===== HEADER SECTION ===== */}
        <Section variant="headline" className="pt-24 pb-16 max-w-4xl">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Portfolio Database
          </span>

          <h1 className="font-display text-5xl md:text-6xl mb-6">
            Project archives
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed border-l border-border pl-6">
            The complete collection of deployed systems, digital platforms,
            and experimental builds — thirteen shipped, each for a real
            client, department, or event.
          </p>
        </Section>

        {/* ===== PROJECT GRID ===== */}
        <Section className="mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.06)}
            className="grid md:grid-cols-2 gap-x-10 gap-y-14"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={rowIn} className="group">
                {/* IMAGE */}
                <Link
                  href={project.link}
                  className="relative aspect-video overflow-hidden rounded-md border border-border block"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </Link>

                {/* CONTENT */}
                <div className="pt-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {project.label}
                    </span>
                    <Link
                      href={project.link}
                      aria-label={`Open ${project.title}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  <h3 className="font-display text-2xl mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {project.tech.join(" · ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>
    </div>
  );
}
