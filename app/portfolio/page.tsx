import Section from "@/components/shared/Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Data dummy untuk project
const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A comprehensive dashboard for managing products, orders, and analytics.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    image: "/anu.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "SaaS Landing Page",
    desc: "High-conversion landing page with modern animations and SEO optimization.",
    tags: ["React", "Framer Motion", "Stripe"],
    image: "/anu.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Clean and modern portfolio website with dark mode support.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/anu.jpg",
    github: "#",
    live: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Section>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-emerald-500">Projects</span>
        </h2>
      </Section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Section
            key={idx}
            delay={idx * 0.1}
            className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
          >
            <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image
                width={500}
                height={500}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-sm font-semibold hover:text-emerald-500 transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1 text-sm font-semibold hover:text-emerald-500 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
