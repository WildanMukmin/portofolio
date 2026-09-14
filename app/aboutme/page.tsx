"use client";

import Section from "@/components/shared/Section";
import { fadeIn, rowIn, scaleIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import {
  Briefcase,
  Cpu,
  GraduationCap,
  Handshake,
  User,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const experience = [
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
    role: "Desktop Application Developer",
    company: "Freelance Projects",
    period: "6/2026 - present",
    desc: "Worked on a desktop application project, which involved developing a desktop application using modern technologies and frameworks to provide a seamless user experience.",
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
    role: "Student Assistant",
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
];

const education = [
  {
    role: "Bachelor's Degree of Computer Science",
    company: "Lampung University",
    period: "8/2023 - present",
    desc: "Cumulative GPA: 3.94/4.00",
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
];

const organizations = [
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
];

const coreStack = [
  "JavaScript",
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
];

const softSkills = [
  "Leadership",
  "Problem Solving",
  "Teamwork",
  "Project Management",
  "Teaching",
  "Communication",
  "Time Management",
];

function Timeline({
  items,
}: {
  items: { role: string; company: string; period: string; desc: string }[];
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8 border-l-2 border-border pl-8 ml-3"
    >
      {items.map((job, i) => (
        <motion.div key={i} variants={rowIn} className="relative">
          <span className="absolute -left-[2.56rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
          <h3 className="text-lg font-bold">{job.role}</h3>
          <p className="text-sm text-primary font-mono mb-2">
            {job.company} | {job.period}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {job.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Section className="lg:mb-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative aspect-square rounded-3xl bg-card border border-border overflow-hidden order-2 md:order-1"
          >
            <Image
              src="/wildan.png"
              alt="Wildan Mukmin"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              <User size={14} />
              My Profile
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Wildan Mukmin
            </h1>
            <h2 className="text-xl text-primary font-semibold mb-6">
              Fullstack Web Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I&apos;m a Computer Science undergraduate at Lampung University
              (UNILA), specializing in full-stack web development with React,
              Next.js, Laravel, and SQL. One project I&apos;m proudest of is
              a career center platform I built independently, end to
              end — from database design to deployment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="font-display text-3xl font-bold text-primary">
                  3+
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Years Exp.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="font-display text-3xl font-bold text-primary">
                  20+
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience & Education Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" />
              Professional Experience
            </h2>
            <Timeline items={experience} />
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Education
              </h2>
              <Timeline items={education} />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Handshake className="text-primary" />
                Organizational Experience
              </h2>
              <Timeline items={organizations} />
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="text-primary" /> Core Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium hover:text-primary transition-colors cursor-default"
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
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium hover:text-primary transition-colors cursor-default"
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
