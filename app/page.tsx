import Section from "@/components/shared/Section";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="container mx-auto px-6 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* Hero Section */}
      <Section className="max-w-3xl space-y-6">
        <span className="text-emerald-500 font-semibold tracking-wider">
          HELLO, I AM
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
          Building Digital <br />
          <span className="text-emerald-500">Experiences.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
          A Fullstack Developer specializing in building exceptional digital
          experiences. Currently focused on React, Next.js, and Modern Web
          Technologies.
        </p>

        <div className="flex gap-4 pt-4">
          <Link href="/portfolio">
            <Button className="flex items-center gap-2">
              View Portfolio <ArrowRight size={18} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </div>

        <div className="flex gap-6 pt-8 text-gray-500">
          <Github className="hover:text-emerald-500 cursor-pointer transition-colors" />
          <Linkedin className="hover:text-emerald-500 cursor-pointer transition-colors" />
        </div>
      </Section>
    </div>
  );
}
