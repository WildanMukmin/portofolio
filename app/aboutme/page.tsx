"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { Code2, Layout, Server } from "lucide-react";

// Data Skill Dummy
const skills = [
  {
    name: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  { name: "Tools", icon: Code2, items: ["Git", "VS Code", "Docker", "Figma"] },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bagian Kiri: Bio */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p className="mb-4">
                Halo! Saya Wildan, seorang pengembang perangkat lunak yang
                bersemangat menciptakan pengalaman web yang intuitif dan
                dinamis.
              </p>
              <p className="mb-4">
                Perjalanan coding saya dimulai ketika saya menemukan betapa
                serunya mengubah baris kode menjadi sesuatu yang bisa digunakan
                orang banyak. Saat ini, saya fokus mendalami ekosistem React dan
                Next.js.
              </p>
              <p>
                Ketika tidak sedang coding, Anda mungkin menemukan saya sedang
                membaca buku teknologi terbaru atau bereksperimen dengan desain
                UI/UX.
              </p>
            </div>
          </div>

          {/* Bagian Kanan: Skills Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
