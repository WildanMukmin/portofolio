"use client";

import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Cpu,
  Handshake,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Section className="lg:mb-16">
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
              <Image
                src="/wildan.png"
                alt="Wildan Mukmin"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Kolom Kanan: Bio */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <User size={14} />
              My Profile
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Wildan <span className="text-primary">Mukmin</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              Fullstack Web Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a Computer Science undergraduate student at UNILA with
              expertise in full-stack web development. I specialize in using
              modern technologies such as React, Next.js, Laravel, and SQL. One
              of my notable projects is developing a career center web system
              independently, showcasing my ability to handle full development
              cycles.
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
              <Briefcase className="text-primary" />
              Profesional Experience
            </h2>
            <div className="space-y-8 border-l-2 border-border pl-8 ml-3">
              {[
                {
                  role: "Fullstack Web Developer",
                  company: "Freelance Projects",
                  period: "1/2023 - present",
                  desc: "Worked on a wide range of projects, including developing web applications using React, Next.js, and Laravel, as well as maintaining and improving existing projects.",
                },
                {
                  role: "Developer for Chrome Extension",
                  company: "Freelance Projects",
                  period: "5/2025 - present",
                  desc: "Worked on a Chrome extension project, which involved creating and maintaining a Chrome extension that provides useful features and functionality for users.",
                },
                {
                  role: "Intern - Information System and Technology Division (STI)",
                  company: "PT PLN UID Lampung (Persero)",
                  period: "12/2025 - 2/2026",
                  desc: "Completed an internship in the Information System and Technology (STI) division. Assisted in system monitoring, data processing, and feature improvements to enhance operational efficiency across departments.",
                },
                {
                  role: "Assistant Lecturer for Basic Programming Course",
                  company: "Computer Science, Universitas Lampung",
                  period: "8/2024 - 12/2024",
                  desc: "Instructed more than 40 students in fundamental programming concepts by guiding them in learning C++ from the ground up, as well as developing teaching materials and assignments to assess student understanding.",
                },
                {
                  role: "Coordinator of Assistant Lecturer for Data Structures and Algorithms Course",
                  company: "Computer Science, Universitas Lampung",
                  period: "2/2025 - 6/2025",
                  desc: "Assisted students in understanding core data structures and algorithmic problem-solving techniques, while preparing learning resources and evaluation tasks to strengthen analytical and programming skills.",
                },
                {
                  role: "Coordinator of Assistant Lecturer for Database Systems Course",
                  company: "Computer Science, Universitas Lampung",
                  period: "7/2025 - 12/2025",
                  desc: "Guided students in learning database concepts including relational modeling and SQL, and contributed to creating instructional materials and practical assignments to support hands-on learning.",
                },
                {
                  role: "Student Asistant",
                  company: "Winosa Mitra, Bandar Lampung",
                  period: "10/2024 - 1/2025",
                  desc: "I handled daily data entry tasks by accurately and efficiently inputting up to 20 articles and 8 scholarship entries per day, while also supporting the creative team through the design of visual content for both promotional and operational needs. In addition, I maintained high productivity by effectively balancing data management and design responsibilities within a 4-hour workday, five days per week.",
                },
                {
                  role: "Freelance Video Template Creator",
                  company: "Bytedance Capcut",
                  period: "1/2024 - 2/2024",
                  desc: "Created over 26 video templates, including YouTube intros, outros, and special occasion themes like Valentine's Day.",
                },
                {
                  role: "Freelance Graphic Template Creator",
                  company: "Bytedance Capcut",
                  period: "4/2024 - 8/2024",
                  desc: "Designed more than 148 graphic templates, including marketing posters, wallpapers, minimalist designs, and food and beverage promotions",
                },
                {
                  role: "Freelance Sticker Template Designer",
                  company: "Bytedance Capcut",
                  period: "9/2024 - 12/2024",
                  desc: "Designed over 20+ stickers that reflect current market trends and user interests.",
                },
                {
                  role: "Roller Skating Coach",
                  company: "Wheeling Academy, Bandar Lampung",
                  period: "8/2024 - 2/2025",
                  desc: "Trained over 70 children in roller skating techniques, improving their speed, balance, and agility. Conducted progress analysis for each child to track their development and tailor coaching methods.",
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

          <div>
            {/* Education & Skills */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Education
              </h2>
              <div className="space-y-8 border-l-2 border-border pl-8 ml-3">
                {[
                  {
                    role: "Bachelor's Degree of Computer Science",
                    company: "Lampung University",
                    period: "8/2023 - present",
                    desc: "Cummulative GPA: 3.94/4.00",
                  },
                  {
                    role: "Senior High School",
                    company: "SMAN 9 Bandar Lampung",
                    period: "2019 - 2022",
                    desc: "Active in Pencak Silat",
                  },
                  {
                    role: "Junior High School",
                    company: "SMP Muhammadiyah 2 Bandar Lampung",
                    period: "2016 - 2019",
                    desc: "Active in Science Olympics",
                  },
                  {
                    role: "Elementary School",
                    company: "MI Al-Fatah Natar",
                    period: "2011 - 2016",
                    desc: "-",
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

            {/* Organizations */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Handshake className="text-primary" />
                Organizational Experience
              </h2>
              <div className="space-y-8 border-l-2 border-border pl-8 ml-3">
                {[
                  {
                    role: "Members of Badan Khusus",
                    company: "Himpunan Mahasiswa Ilmu Komputer",
                    period: "2025",
                    desc: "Create Website Management System for Badan Khusus.",
                  },
                  {
                    role: "Coordinator of Website Division",
                    company: "Computer Science Showdown",
                    period: "2025",
                    desc: "Create Website for Computer Science Showdown.",
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

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="text-primary" /> Core Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java Script",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "PHP",
                  "Laravel",
                  "Python",
                  "Tailwind",
                  "PostgreSQL",
                  "MySQL",
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

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Wrench className="text-primary" /> Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Leadership",
                  "Problem Solving",
                  "Teamwork",
                  "Project Management",
                  "Teaching",
                  "Communication",
                  "Time Management",
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
        </div>
      </Section>
    </div>
  );
}
