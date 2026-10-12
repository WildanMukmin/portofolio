"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Monogram from "@/components/shared/Monogram";
import RollText from "@/components/shared/RollText";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      data-open={menuOpen}
      className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="group/logo flex h-11 min-w-11 items-center gap-3"
        >
          <Monogram className="h-6 w-9 text-foreground transition-colors group-hover/logo:text-link" />
          <span
            aria-hidden
            className="hidden font-display text-base font-bold sm:block"
          >
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            if (item.path === "/contact") {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group/roll ml-3 flex h-10 items-center rounded-lg border px-4 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-link text-link"
                      : "border-input text-foreground hover:border-link hover:text-link",
                  )}
                >
                  <RollText>{item.name}</RollText>
                </Link>
              );
            }
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group/roll relative flex h-16 items-center px-3 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <RollText>{item.name}</RollText>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
            className="grid size-11 place-items-center rounded-lg border border-border md:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <nav
            aria-label="Main"
            className="container mx-auto flex flex-col px-6 py-2"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex h-12 items-center border-b border-border text-base font-medium last:border-b-0",
                    isActive ? "text-link" : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
