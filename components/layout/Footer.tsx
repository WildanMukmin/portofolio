"use client";

import Link from "next/link";
import { Github, Linkedin, Heart, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="text-lg lg:text-2xl font-black tracking-tight inline-block mb-4"
            >
              <span className="text-foreground group-hover:text-primary transition-colors">
                Wildan Mukmin |{" "}
              </span>
              <span className="text-primary">Fullstack Web Developer</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fullstack developer who turns ideas into scalable, high
              performance digital products. Clean code, smooth UI, and systems
              built to actually last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold uppercase tracking-wider mb-4 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/aboutme" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-foreground font-bold uppercase tracking-wider mb-4 text-sm">
              Connect
            </h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/WildanMukmin"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/wildan-mukmin-7569422a7/"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.instagram.com/wildan_mukmin/"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.instagram.com/wildanmukmin.dev/"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 justify-center">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Wildan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
