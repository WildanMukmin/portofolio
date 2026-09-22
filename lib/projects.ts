export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  /** Showcase screens in display order. First image is the cover/thumbnail. */
  images: ProjectImage[];
  tech: string[];
  category: string;
  /** Public URL. Omit when the project has no public link. */
  link?: string;
  /** Shown as a large row on the home and portfolio pages. */
  featured?: boolean;
}

/** Builds a project's image list from its `public/projects/<folder>` screenshots. */
function gallery(
  folder: string,
  title: string,
  files: [file: string, label: string][],
): ProjectImage[] {
  return files.map(([file, label]) => ({
    src: `/projects/${folder}/${file}`,
    alt: `${title}, ${label}`,
  }));
}

export const projects: Project[] = [
  {
    title: "Khalid Dzikri Course",
    subtitle: "Course System & Learning Management System",
    description:
      "Web-based course management system for online learning, course enrollment, and content delivery.",
    images: gallery("khalid-dzikri", "Khalid Dzikri Course", [
      ["01-sampul.png", "cover"],
      ["02-paket.png", "course packages"],
      ["03-member.png", "member area"],
      ["04-admin.png", "admin dashboard"],
      ["05-mobile.png", "mobile view"],
      ["06-design-system.png", "design system"],
    ]),
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
    images: gallery("wibot", "Wibot", [
      ["01-sampul.png", "cover"],
      ["02-generate-post.png", "generate post"],
      ["03-multi-scene.png", "multi-scene editor"],
      ["04-halaman-pendukung.png", "supporting pages"],
      ["05-design-system.png", "design system"],
    ]),
    tech: ["Electron", "React", "Tailwind", "Node.js", "MySQL"],
    category: "Business",
    featured: true,
  },
  {
    title: "My KKN Unila",
    subtitle: "System for KKN Unila Students",
    description:
      "Web-based system for managing KKN (Kuliah Kerja Nyata) student data, including registration, group assignments, and progress tracking.",
    images: [{ src: "/projects/my-kkn-unila.png", alt: "My KKN Unila, cover" }],
    tech: ["Next.js", "Tailwind", "Node.js", "Laravel", "MySQL"],
    category: "Education",
  },
  {
    title: "RMS Coffee Website",
    subtitle: "Company Profile & Information System",
    description:
      "Modern company profile website showcasing brand identity and digital presence.",
    images: gallery("rms-coffee", "RMS Coffee Website", [
      ["01-sampul.png", "cover"],
      ["02-beranda.png", "homepage"],
      ["03-produk.png", "products"],
      ["04-profil-galeri.png", "profile and gallery"],
      ["05-mobile.png", "mobile view"],
      ["06-design-system.png", "design system"],
    ]),
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Business",
    link: "https://www.rmscoffee.com/profile",
  },
  {
    title: "Asdos & Lab Management System",
    subtitle: "Computer Science - Universitas Lampung",
    description:
      "Web-based management system for assistant lecturer recruitment, lab scheduling, class assignments, and academic administration.",
    images: gallery("asdos-unila", "Asdos & Lab Management System", [
      ["01-sampul.png", "cover"],
      ["02-jadwal.png", "schedule"],
      ["03-admin.png", "admin dashboard"],
      ["04-mobile.png", "mobile view"],
      ["05-design-system.png", "design system"],
    ]),
    tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    category: "Education",
    link: "https://lab.ilkom.unila.ac.id/",
  },
  {
    title: "AI Generator Web App",
    subtitle: "AI Image, Video & Chatbot Platform",
    description:
      "Web application for generating AI-based images, videos, and chatbot responses using multiple AI APIs integration.",
    images: gallery("ai-generator", "AI Generator Web App", [
      ["01-sampul.png", "cover"],
      ["02-image-generator.png", "image generator"],
      ["03-chatbot.png", "chatbot"],
      ["04-mobile.png", "mobile view"],
      ["05-design-system.png", "design system"],
    ]),
    tech: ["Next.js", "Node.js", "OpenAI API", "Cloud Storage"],
    category: "AI platform",
    link: "http://floracauna.com/",
  },
  {
    title: "Computer Science Showdown (CSS) 2.0",
    subtitle: "Event Information Website",
    description:
      "Official event website providing competition information, registration, schedules, and announcements.",
    images: gallery("css-2", "Computer Science Showdown (CSS) 2.0", [
      ["01-sampul.png", "cover"],
      ["02-pendaftaran.png", "registration"],
      ["03-admin.png", "admin dashboard"],
      ["04-mobile.png", "mobile view"],
      ["05-sistem.png", "design system"],
    ]),
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Event",
    link: "https://unilacss.com/",
  },
  {
    title: "LCT CSS Web Application",
    subtitle: "Competition Management System",
    description:
      "Web-based system for managing LCT competition scoring system, and leaderboard.",
    images: gallery("lct-css", "LCT CSS Web Application", [
      ["01-sampul.png", "cover"],
      ["02-penyisihan.png", "preliminary round"],
      ["03-semifinal.png", "semifinal"],
      ["04-final.png", "final"],
      ["05-revisi.png", "revision"],
      ["06-sistem-visual.png", "visual system"],
    ]),
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    category: "Competition",
  },
  {
    title: "Travesia",
    subtitle: "Tourism Booking System",
    description:
      "Online booking system for tourism destinations including package selection, reservation, and payment integration.",
    images: gallery("travesia", "Travesia", [
      ["Cover@1x.png", "cover"],
      ["Destinasi@1x.png", "destinations"],
      ["Admin@1x.png", "admin dashboard"],
      ["Mobile@1x.png", "mobile view"],
      ["DesignSystem@1x.png", "design system"],
    ]),
    tech: ["Next.js", "Node.js", "PostgreSQL", "Midtrans"],
    category: "Travel",
  },
];
