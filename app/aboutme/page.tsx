"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { User, Code, Briefcase, GraduationCap, Cpu } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Kolom Kiri: Foto / Avatar Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative aspect-square rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center">
              {/* Ganti dengan <Image /> asli nanti */}
              <User className="w-32 h-32 text-primary/50" />
            </div>
          </div>

          {/* Kolom Kanan: Bio */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <User size={14} />
              Personal File
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Wildan <span className="text-primary">Mukmin</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Seorang pengembang perangkat lunak yang berfokus pada menciptakan
              antarmuka digital yang intuitif dan berkinerja tinggi. Saya
              memadukan kreativitas desain dengan logika pemrograman yang kuat.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="text-3xl font-black text-primary">3+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Years Exp.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="text-3xl font-black text-primary">20+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Experience & Education Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" /> Experience
            </h2>
            <div className="space-y-8 border-l-2 border-border pl-8 ml-3">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Company A",
                  period: "2023 - Present",
                  desc: "Memimpin pengembangan UI untuk aplikasi SaaS skala enterprise.",
                },
                {
                  role: "Web Developer",
                  company: "Digital Agency B",
                  period: "2021 - 2023",
                  desc: "Membangun website responsif untuk berbagai klien internasional.",
                },
              ].map((job, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-sm text-primary font-mono mb-2">
                    {job.company} | {job.period}
                  </p>
                  <p className="text-muted-foreground">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h2>
            <div className="space-y-8 border-l-2 border-border pl-8 ml-3 mb-12">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-blue-500" />
                <h3 className="text-xl font-bold">Teknik Informatika</h3>
                <p className="text-sm text-primary font-mono mb-2">
                  Universitas XYZ | 2017 - 2021
                </p>
                <p className="text-muted-foreground">
                  Fokus pada Rekayasa Perangkat Lunak dan AI.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-primary" /> Core Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "PostgreSQL",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary rounded-md text-sm font-medium hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
