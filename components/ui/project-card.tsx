import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
}: ProjectProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-700">
        {/* Ganti src dengan prop image nanti */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          {image}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={github}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition"
          >
            <Github size={18} /> Code
          </Link>
          <Link
            href={demo}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition"
          >
            <ExternalLink size={18} /> Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
