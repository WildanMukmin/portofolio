"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline" | "ghost" | "inverse";
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        // Base — bold pill shape, like the reference's "Hire Me" buttons
        "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",

        variant === "default" &&
          "bg-primary text-primary-foreground hover:brightness-95 neon-glow-hover",

        variant === "inverse" &&
          "bg-foreground text-background hover:brightness-110",

        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",

        variant === "ghost" && "text-foreground hover:text-primary",

        size === "default" && "h-12 px-6 text-sm",
        size === "sm" && "h-9 px-4 text-xs",
        size === "lg" && "h-14 px-8 text-base",
        className,
      )}
      {...props}
    />
  );
}
