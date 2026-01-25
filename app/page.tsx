"use client";

import Section from "@/components/shared/Section";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Cpu,
  Globe,
  Zap,
  ExternalLink,
  Layers,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden selection:bg-primary selection:text-black">
      <div className="container mx-auto px-6 flex flex-col justify-center relative z-10">
        <Section className="max-w-4xl space-y-8 pt-20 md:pt-16 min-h-[90vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 glow-text">
                Digital
              </span>
              <br />
              <span className="text-foreground">Experiences That Matter.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
      text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed
      border-l-2 border-primary/40 pl-6
    "
          >
            Fullstack Developer yang ngerangkai ide jadi produk digital nyata.
            Fokus ke clean code, performa ngebut, dan UI yang enak dipakai bukan
            cuma kelihatan keren.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/portfolio">
              <Button size="lg" className="group shadow-primary/25 shadow-lg">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-background/50"
              >
                Let&apos;s Collaborate
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 pt-8"
          >
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
          p-3 rounded-full
          bg-secondary/50
          hover:bg-primary/20
          hover:text-primary
          transition-all duration-300
          hover:scale-110
          border border-transparent
          hover:border-primary/30
        "
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </motion.div>
        </Section>

        <div
          className="
    w-full py-12 mb-24 overflow-hidden
    border-y
    bg-muted/40
    border-border/40

    dark:bg-black/20
    dark:border-white/5
    backdrop-blur-sm
  "
        >
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-16 items-center h-16">
              {[
                "REACT",
                "NEXT.JS",
                "TYPESCRIPT",
                "TAILWIND",
                "NODE.JS",
                "POSTGRESQL",
                "MYSQL",
                "DOCKER",
                "AWS",
                "GRAPHQL",
                "FIGMA",
                "REACT",
                "NEXT.JS",
                "TYPESCRIPT",
                "TAILWIND",
                "NODE.JS",
                "POSTGRESQL",
                "MYSQL",
                "DOCKER",
                "AWS",
                "GRAPHQL",
                "FIGMA",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="
            text-2xl font-black uppercase tracking-widest cursor-default
            text-foreground/40
            transition-all duration-300

            hover:text-primary hover:scale-110

            dark:text-transparent
            dark:bg-clip-text
            dark:bg-gradient-to-b
            dark:from-white/30
            dark:to-white/5
          "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- FEATURES SECTION --- */}
        <Section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "High Velocity",
                description:
                  "Optimasi performa ekstrim untuk waktu muat instan.",
                icon: Zap,
              },
              {
                title: "Next-Gen Tech",
                description:
                  "Dibangun di atas ekosistem React & Next.js terbaru.",
                icon: Cpu,
                highlight: true,
              },
              {
                title: "Global Scale",
                description:
                  "Arsitektur siap skala untuk audiens internasional.",
                icon: Globe,
              },
              {
                title: "Clean Syntax",
                description: "Kode yang mudah dipelihara dan didokumentasikan.",
                icon: Code2,
                highlight: true,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  feature.highlight
                    ? "bg-gradient-to-br from-primary to-blue-700 text-white border-primary shadow-lg shadow-primary/25"
                    : "bg-card/50 backdrop-blur-md border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:glow-box"
                }`}
              >
                <div
                  className={`p-3 rounded-lg w-fit mb-4 ${feature.highlight ? "bg-white/20" : "bg-primary/10 text-primary"}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p
                  className={
                    feature.highlight ? "text-blue-50" : "text-muted-foreground"
                  }
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- SELECTED WORKS / PROJECTS --- */}
        <Section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                Portfolio Database
              </span>
              <h2 className="text-4xl md:text-5xl font-black">
                Deployed{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Units
                </span>
              </h2>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="group">
                View All Archives{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-6xl font-black">
                    PROJECT_0{item}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        Cyber Dashboard
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Analytics & Monitoring
                      </p>
                    </div>
                    <div className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary">
                      NEXT.JS
                    </span>
                    <span className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      TAILWIND
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- WORKFLOW / PROCESS --- */}
        <Section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
              Execution Protocol
            </span>
            <h2 className="text-3xl md:text-4xl font-black">System Workflow</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

            {[
              {
                step: "01",
                title: "Discovery",
                icon: Terminal,
                desc: "Analisis kebutuhan sistem dan arsitektur data.",
              },
              {
                step: "02",
                title: "Development",
                icon: Code2,
                desc: "Penulisan kode bersih dengan stack teknologi modern.",
              },
              {
                step: "03",
                title: "Deployment",
                icon: Layers,
                desc: "Peluncuran ke production dengan optimasi CI/CD.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-card border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] z-10 bg-background">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-6xl font-black text-secondary absolute -top-4 -right-4 -z-10 opacity-50 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
