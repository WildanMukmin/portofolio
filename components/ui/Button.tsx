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
        "inline-flex items-center justify-center rounded-xl font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        // Variants
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        variant === "outline" &&
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        // Sizes
        size === "default" && "h-12 px-6 py-3 text-sm",
        size === "sm" && "h-10 px-4 py-2 text-xs",
        size === "lg" && "h-14 px-8 py-4 text-base",
        className,
      )}
      {...props}
    />
  );
}
