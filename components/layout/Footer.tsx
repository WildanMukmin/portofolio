"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/WildanMukmin" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wildan-mukmin-7569422a7/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/wildanmukmin.dev/",
  },
];

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/aboutme" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Section */}
          <div>
            <Link href="/" className="font-display text-lg inline-block mb-4">
              Wildan Mukmin
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Fullstack developer who turns ideas into scalable, high
              performance digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-medium uppercase tracking-wider mb-4 text-xs">
              Navigate
            </h3>
            <ul className="space-y-2">
              {links.map((item) => (
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
            <h3 className="text-foreground font-medium uppercase tracking-wider mb-4 text-xs">
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Wildan Mukmin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
