"use client";

import Section from "@/components/shared/Section";
import { fadeIn, rowIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
    label: "CAREER PLATFORM",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="container mx-auto px-6 relative z-10">
        {/* ===== HEADER ===== */}
        <Section className="pt-16 pb-16 max-w-3xl">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
              Portfolio Database
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-6">
              Project Archives
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
              Complete collection of deployed systems, digital platforms, and
              experimental builds crafted with a modern technology stack.
            </p>
          </motion.div>
        </Section>

        {/* ===== PROJECT GRID ===== */}
        <Section className="mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={rowIn}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/60 transition-colors"
              >
                <Link href={project.link}>
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                    <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground tracking-widest">
                      {project.label}
                    </span>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>

                    <Link href={project.link}>
                      <div className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink size={18} />
                      </div>
                    </Link>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                      >
                        {tech.toUpperCase()}
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
  );
}
