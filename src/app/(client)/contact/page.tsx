import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Page() {
  return (
    <section className="py-20 h-screen bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Contact
        </h2>
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center space-x-8 mb-8">
            {/* GitHub */}
            <Link
              href="https://github.com/WildanMukmin"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={24} />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/wildan-mukmin-7569422a7/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin size={24} />
            </Link>

            {/* Email */}
            <Link
              href="mailto:wildanmukmin@gmail.com"
              aria-label="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail size={24} />
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/wildan_mukmin"
              target="_blank"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
