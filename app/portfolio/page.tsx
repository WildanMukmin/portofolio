"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Data Project Dummy
const projects = [
  {
    title: "Project E-Commerce",
    description:
      "Platform belanja online dengan fitur keranjang dan payment gateway.",
    tags: ["Next.js", "Stripe", "Zustand"],
    image: "/anu.jpg", // Ganti dengan gambar aslimu nanti
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
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa proyek pilihan yang telah saya kerjakan.
            Mencakup aplikasi web full-stack, desain UI, dan eksperimen open
            source.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                {/* Ganti src dengan gambar project asli */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
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
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="w-full">
                    <Link href={project.repo} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" className="w-full">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
