"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-sm z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                WildanMukmin
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/about">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/projects">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                  Projects
                </span>
              </Link>
              <Link href="/skills">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                  Skills
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                  Contact
                </span>
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16 w-full justify-center items-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Wildan Mukmin.</p>
        </div>
      </footer>
    </div>
  );
}
