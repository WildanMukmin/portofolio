import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost" | "inverse";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/**
 * Class list for button-looking elements. Apply it directly to a `<Link>` or
 * `<a>` for navigation: nesting a `<button>` inside a link is invalid HTML
 * and gives keyboard users two tab stops per control.
 */
export function buttonClasses({
  variant = "default",
  size = "default",
  className,
}: ButtonStyleOptions = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",

    variant === "default" &&
      "bg-primary text-primary-foreground hover:bg-primary/90",
    variant === "inverse" &&
      "bg-foreground text-background hover:bg-foreground/90",
    variant === "outline" &&
      "border border-input bg-transparent text-foreground hover:border-link hover:text-link",
    variant === "ghost" && "text-foreground hover:text-link",

    size === "default" && "h-11 px-5 text-sm",
    size === "sm" && "h-10 px-4 text-sm",
    size === "lg" && "h-12 px-6 text-base",
    className,
  );
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonStyleOptions, "className"> {}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
