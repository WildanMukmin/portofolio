"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Pastikan komponen hanya dirender di client untuk menghindari hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder kosong atau tombol statis saat loading
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <span className="sr-only">Loading theme...</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 px-0 overflow-hidden rounded-full border border-border/40 hover:bg-accent hover:text-accent-foreground"
      title="Toggle Theme"
    >
      {/* Animasi Ikon Matahari (Muncul saat Light Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500" />
      </motion.div>

      {/* Animasi Ikon Bulan (Muncul saat Dark Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
