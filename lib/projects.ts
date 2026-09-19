export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  /** Public URL. Omit when the project has no public link. */
  link?: string;
  /** Shown as a large row on the home and portfolio pages. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "CCED Unila Career Center",
    subtitle: "Job Portal & Career Management System",
    description:
      "Career center web application similar to JobStreet, featuring job listings, employer dashboards, and applicant management.",
    image: "/projects/cced-unila.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    category: "Career platform",
    featured: true,
  },
  {
    title: "Khalid Dzikri Course",
    subtitle: "Course System & Learning Management System",
    description:
      "Web-based course management system for online learning, course enrollment, and content delivery.",
    image: "/projects/khalid-dzikri-course.png",
    tech: ["Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    category: "Education",
    link: "https://www.khalidzikricourse.my.id/",
    featured: true,
  },
  {
    title: "Wibot",
    subtitle: "Automation Social Media Posting & Scheduling",
    description:
      "Desktop application for automating social media posting and scheduling.",
    image: "/projects/wibot.jpg",
    tech: ["Electron", "React", "Tailwind", "Node.js", "MySQL"],
    category: "Business",
    featured: true,
  },
  {
    title: "My KKN Unila",
    subtitle: "System for KKN Unila Students",
    description:
      "Web-based system for managing KKN (Kuliah Kerja Nyata) student data, including registration, group assignments, and progress tracking.",
    image: "/projects/my-kkn-unila.png",
    tech: ["Next.js", "Tailwind", "Node.js", "Laravel", "MySQL"],
    category: "Education",
  },
  {
    title: "Zoom Monitoring System",
    subtitle: "PLN UID Lampung",
    description:
      "Internal web-based system for monitoring Zoom meetings, attendance tracking, and analytics across departments.",
    image: "/projects/zoom-pln.jpg",
    tech: ["Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    category: "Enterprise",
    link: "https://monitoring-zoom-pln.vercel.app/",
  },
  {
    title: "RMS Coffee Website",
    subtitle: "Company Profile & Information System",
    description:
      "Modern company profile website showcasing brand identity and digital presence.",
    image: "/projects/rms-coffee.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Business",
    link: "https://www.rmscoffee.com/profile",
  },
  {
    title: "Asdos & Lab Management System",
    subtitle: "Computer Science - Universitas Lampung",
    description:
      "Web-based management system for assistant lecturer recruitment, lab scheduling, class assignments, and academic administration.",
    image: "/projects/asdos-unila.jpg",
    tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    category: "Education",
    link: "https://lab.ilkom.unila.ac.id/",
  },
  {
    title: "AI Generator Web App",
    subtitle: "AI Image, Video & Chatbot Platform",
    description:
      "Web application for generating AI-based images, videos, and chatbot responses using multiple AI APIs integration.",
    image: "/projects/ai-generator.jpg",
    tech: ["Next.js", "Node.js", "OpenAI API", "Cloud Storage"],
    category: "AI platform",
    link: "http://floracauna.com/",
  },
  {
    title: "Computer Science Showdown (CSS) 2.0",
    subtitle: "Event Information Website",
    description:
      "Official event website providing competition information, registration, schedules, and announcements.",
    image: "/projects/css-2.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Event",
    link: "https://unilacss.com/",
  },
  {
    title: "Arta Coffee Website",
    subtitle: "Company Profile & Digital Branding",
    description:
      "Modern coffee shop company profile website showcasing products, gallery, and brand identity.",
    image: "/projects/arta-coffee.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Business",
    link: "https://artacoffee.vercel.app/",
  },
  {
    title: "LCT CSS Web Application",
    subtitle: "Competition Management System",
    description:
      "Web-based system for managing LCT competition scoring system, and leaderboard.",
    image: "/projects/lct-css.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    category: "Competition",
  },
  {
    title: "MasterKayu",
    subtitle: "Wood & Furniture Information System",
    description:
      "Business website for wood supplier and furniture store with product catalog and order management features.",
    image: "/projects/masterkayu.jpg",
    tech: ["Next.js", "Tailwind", "Node.js"],
    category: "Business",
  },
  {
    title: "Travesia",
    subtitle: "Tourism Booking System",
    description:
      "Online booking system for tourism destinations including package selection, reservation, and payment integration.",
    image: "/projects/travesia.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Midtrans"],
    category: "Travel",
  },
];
