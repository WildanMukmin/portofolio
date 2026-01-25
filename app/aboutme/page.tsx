"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Layers, Zap } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <Section className="space-y-12">
        {/* Header / Identity Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
          
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
             {/* Profile Avatar Placeholder / Hologram Effect */}
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-blue-900/20 border border-primary/30 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/anu.jpg')] bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary text-xs font-mono tracking-widest uppercase">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                System Status: Online
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Wildan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Mukmin</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Seorang pengembang Fullstack yang beroperasi di persimpangan antara desain antarmuka dan logika sistem yang kompleks. Misi saya adalah menerjemahkan ide abstrak menjadi aplikasi digital yang fungsional, skalabel, dan estetis.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid (HUD Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years Exp.", value: "03+", icon: "⚡" },
            { label: "Projects", value: "15+", icon: "🚀" },
            { label: "Clients", value: "10+", icon: "🌍" },
            { label: "Coffee/Day", value: "∞", icon: "☕" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-secondary/20 border border-primary/10 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl font-black text-primary mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Cpu className="text-primary" /> Installed Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend Core", icon: Layers, skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
              { title: "Backend Systems", icon: Database, skills: ["Node.js", "PostgreSQL", "Prisma", "Supabase"] },
              { title: "Tools & Deploy", icon: Code2, skills: ["Git", "Docker", "Vercel", "Figma"] },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-xl border border-border bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}