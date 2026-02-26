"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const projects = [
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
    <div className="relative overflow-hidden selection:bg-primary selection:text-black">
      <div className="container mx-auto px-6 relative z-10">
        {/* ===== HEADER SECTION ===== */}
        <Section className="pt-24 pb-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              Portfolio Database
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Archives
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary/40 pl-6">
              Complete collection of deployed systems, digital platforms, and
              experimental builds crafted with modern technology stack.
            </p>
          </motion.div>
        </Section>

        {/* ===== PROJECT GRID ===== */}
        <Section className="mb-32">
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                {/* IMAGE */}
                <Link href={project.link}>
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Label */}
                    <span className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-primary/80 text-white tracking-widest">
                      {project.label}
                    </span>
                  </div>
                </Link>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>

                    <Link href={project.link}>
                      <div className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        <ExternalLink size={20} />
                      </div>
                    </Link>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex gap-4">
                    <Link href={project.link} className="flex-1">
                      <Button className="w-full gap-2">
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                    </Link>

                    <Link href={project.github}>
                      <Button variant="outline" className="gap-2">
                        <Github size={16} /> Code
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
