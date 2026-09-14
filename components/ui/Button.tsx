"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSharp } from "@/lib/motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.15, ease: easeSharp }}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-md font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",

        // Variants — restrained, no glow/gradient
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",

        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",

        variant === "ghost" && "hover:bg-secondary hover:text-primary",

        // Sizes
        size === "default" && "h-11 px-6 py-2.5 text-sm",
        size === "sm" && "h-9 px-4 py-2 text-xs",
        size === "lg" && "h-14 px-8 py-4 text-base",
        className,
      )}
      {...props}
    />
  );
}
