"use client";

import Section from "@/components/shared/Section";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen texture-overlay overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 min-h-[calc(100vh-80px)] flex flex-col justify-center relative z-10">
        {/* Hero Section */}
        <Section className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              Hello, I Am
            </span>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              Building Digital
              <br />
              <span className="text-primary inline-block mt-2">
                Experiences.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A Fullstack Developer specializing in building exceptional digital
            experiences. Currently focused on React, Next.js, and Modern Web
            Technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/portfolio">
              <Button size="lg" className="group">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 pt-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </motion.div>
        </Section>

        {/* Feature Cards Section */}
        <Section className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fast Delivery",
                description:
                  "Quick turnaround time without compromising quality",
                icon: "⚡",
              },
              {
                title: "Modern Stack",
                description:
                  "Built with the latest technologies and best practices",
                icon: "🚀",
              },
              {
                title: "Responsive Design",
                description: "Perfect experience across all devices",
                icon: "📱",
              },
              {
                title: "Clean Code",
                description: "Maintainable and scalable codebase",
                icon: "✨",
                highlight: true,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  feature.highlight
                    ? "bg-primary text-primary-foreground border-primary dark:glow-effect"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p
                  className={
                    feature.highlight
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground"
                  }
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
