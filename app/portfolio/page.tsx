"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project E-Commerce",
    description:
      "Platform belanja online dengan fitur keranjang dan payment gateway.",
    tags: ["Next.js", "Stripe", "Zustand"],
    image: "/anu.jpg",
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard Admin",
    description:
      "Sistem manajemen data internal dengan grafik analitik realtime.",
    tags: ["React", "Recharts", "Tailwind"],
    image: "/anu.jpg",
    demo: "#",
    repo: "#",
  },
  {
    title: "Personal Blog",
    description:
      "Blog pribadi menggunakan MDX dan SSG untuk performa maksimal.",
    tags: ["Next.js", "MDX", "Contentlayer"],
    image: "/anu.jpg",
    demo: "#",
    repo: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16 texture-overlay">
      <Section>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              My Work
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Berikut adalah beberapa proyek pilihan yang telah saya kerjakan.
              Mencakup aplikasi web full-stack, desain UI, dan eksperimen open
              source.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg transition-all hover:shadow-2xl hover:border-primary/50 hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link href={project.repo} target="_blank" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" className="flex-1">
                    <Button size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
