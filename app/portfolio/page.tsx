"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Contoh data dummy (nanti bisa diganti real data)
const projects = [
  {
    title: "Cyber Commerce",
    category: "E-Commerce",
    image: "/window.svg", // Gunakan placeholder bawaan Next.js dulu
    desc: "Platform e-commerce modern dengan arsitektur microservices dan pembayaran crypto.",
    stack: ["Next.js", "Stripe", "Zustand"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Nexus Dashboard",
    category: "SaaS Platform",
    image: "/globe.svg",
    desc: "Dashboard analitik real-time untuk memantau trafik jaringan global.",
    stack: ["React", "D3.js", "Firebase"],
    demo: "#",
    repo: "#",
  },
  {
    title: "AI Chat Interface",
    category: "Artificial Intelligence",
    image: "/file.svg",
    desc: "Antarmuka chat minimalis yang terintegrasi dengan OpenAI GPT-4 API.",
    stack: ["TypeScript", "OpenAI", "Tailwind"],
    demo: "#",
    repo: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <Section>
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Project <span className="text-primary">Archives</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Koleksi eksperimen digital dan aplikasi skala penuh yang telah saya
            kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 w-full bg-secondary/50 overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                {/* Placeholder Image Logic - ganti src dengan gambar aslimu nanti */}
                <div className="w-full h-full flex items-center justify-center p-10 opacity-50 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="dark:invert"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-primary mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button size="sm" className="w-full">
                    <a href={project.demo} target="_blank">
                      Live Demo <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <a href={project.repo} target="_blank">
                      <Github className="mr-2 w-3 h-3" /> Code
                    </a>
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
