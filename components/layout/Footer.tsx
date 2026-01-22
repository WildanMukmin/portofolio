import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} DevPortfolio. Built with Next.js &
            Tailwind.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="#"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
