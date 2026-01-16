// data/index.ts

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  name: "Alex Developer",
  role: "Full Stack Engineer",
  tagline: "Building digital experiences with code and creativity.",
  description:
    "I specialize in building scalable web applications using modern technologies like Next.js, TypeScript, and Tailwind CSS.",
};

export const SKILLS = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
  { name: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing products, orders, and analytics using Recharts.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/api/placeholder/600/400", // Gunakan placeholder dulu
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Real-time task collaboration tool with drag-and-drop features.",
    tech: ["React", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/api/placeholder/600/400",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Senior Frontend Dev",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading the frontend team in migration to Next.js.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Creative Agency",
    period: "2020 - 2022",
    description: "Built responsive websites for various clients.",
  },
];
