"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Section from "@/components/shared/Section";
import { fadeIn, useParallax } from "@/lib/motion";
import { useRef } from "react";

const socials = [
  { name: "GitHub", icon: Github, link: "https://github.com/WildanMukmin" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/wildan-mukmin-7569422a7/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/wildanmukmin.dev/",
  },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/aboutme" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const glowY = useParallax(ctaRef, 50);

  return (
    <footer className="bg-background">
      <div className="container mx-auto px-6">
        {/* CTA block */}
        <Section className="pb-16">
          <motion.div
            ref={ctaRef}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-foreground text-background px-8 py-16 md:px-16 md:py-24 text-center"
          >
            <motion.div
              style={{ y: glowY }}
              aria-hidden
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/25 blur-[130px] pointer-events-none -z-10"
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-background/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Have a project in mind?
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-10 max-w-3xl mx-auto">
              Let&apos;s turn your idea into a product that actually ships.
            </h2>
            <Link href="/contact">
              <Button size="lg" className="group">
                Start a Conversation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </motion.div>
        </Section>

        {/* Link bar */}
        <div className="border-t border-border py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-display text-xl font-bold">
            Wildan Mukmin.
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-border py-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wildan Mukmin. Built with Next.js &
            Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
