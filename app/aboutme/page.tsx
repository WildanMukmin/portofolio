"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { Code2, Layout, Server } from "lucide-react";

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
    <div className="container mx-auto px-6 pt-32 pb-16 texture-overlay">
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Bagian Kiri: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              Get To Know
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              About <span className="text-primary">Me</span>
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Halo! Saya Wildan, seorang pengembang perangkat lunak yang
                bersemangat menciptakan pengalaman web yang intuitif dan
                dinamis.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Perjalanan coding saya dimulai ketika saya menemukan betapa
                serunya mengubah baris kode menjadi sesuatu yang bisa digunakan
                orang banyak. Saat ini, saya fokus mendalami ekosistem React dan
                Next.js.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ketika tidak sedang coding, Anda mungkin menemukan saya sedang
                membaca buku teknologi terbaru atau bereksperimen dengan desain
                UI/UX.
              </p>
            </div>
          </motion.div>

          {/* Bagian Kanan: Skills Grid */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-black mb-6">
                Tech <span className="text-primary">Stack</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border-2 border-border bg-card p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-wider">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
