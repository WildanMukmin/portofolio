"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row md:py-0 px-4">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="/"
              className="font-medium underline underline-offset-4 text-foreground"
            >
              Wildan
            </Link>
            . The source code is available on{" "}
            <a
              href="https://github.com/wildanmukmin"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 text-foreground"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
