"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, headlineIn, viewportOnce } from "@/lib/motion";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
  /** Which reveal pattern to use — headline for hero-weight content, fade for supporting sections. */
  variant?: "headline" | "fade";
}

export default function Section({
  children,
  className,
  delay = 0,
  variant = "fade",
  ...props
}: SectionProps) {
  const variants = variant === "headline" ? headlineIn : fadeIn;

  return (
    <section className={cn("py-16 md:py-16", className)} {...props}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={variants}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </section>
  );
}
