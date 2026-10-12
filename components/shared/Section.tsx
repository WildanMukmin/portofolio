import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Page section that fades in as it scrolls into view. The fade is a CSS
 * scroll-driven animation (see `.reveal`), so the server-rendered HTML is
 * visible without JavaScript and browsers without support simply show it.
 */
export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("reveal py-16 md:py-24", className)} {...props}>
      {children}
    </section>
  );
}
