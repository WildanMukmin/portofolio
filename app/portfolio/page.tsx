"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Data Dummy - Ganti dengan data asli Anda
const projects = [
  {
    id: "01",
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description:
      "Complete admin dashboard with real-time analytics and inventory management.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    link: "#",
    github: "#",
  },
  {
    id: "02",
    title: "Travel Booking App",
    category: "Mobile First Web",
    description:
      "Travel ticket booking platform with secure payment gateway integration.",
    tech: ["React", "Redux", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    id: "03",
    title: "AI Chat Interface",
    category: "Experiment",
    description:
      "Modern chat interface connected to OpenAI API with streaming support.",
    tech: ["TypeScript", "OpenAI API", "Vercel SDK"],
    link: "#",
    github: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <FolderOpen size={14} />
            Project Archives
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Works
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of selected projects demonstrating technical abilities
            and problem-solving skills.
          </p>
        </motion.div>
      </Section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col"
          >
            {/* Project Image Placeholder */}
            <div className="aspect-video bg-secondary/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center font-black text-6xl text-muted/20 select-none group-hover:scale-110 transition-transform duration-500">
                {project.id}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-primary font-mono mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 bg-secondary rounded border border-border/50 uppercase tracking-wider font-bold text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Link href={project.link} className="flex-1">
                    <Button className="w-full gap-2" size="sm">
                      <ExternalLink size={16} /> Demo
                    </Button>
                  </Link>
                  <Link href={project.github}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github size={16} /> Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
