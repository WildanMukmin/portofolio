"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-xl font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",

        // Variants - Updated for Futuristic Look
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-blue-500 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95",

        variant === "outline" &&
          "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20",

        variant === "ghost" && "hover:bg-primary/10 hover:text-primary",

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
