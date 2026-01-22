import Section from "@/components/shared/Section";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-20">
      {/* Bio Section */}
      <Section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate Fullstack Developer with a knack for creating
            seamless digital experiences. My journey began with a curiosity for
            how things work on the web, which led me to master the MERN stack
            and Next.js ecosystem.
          </p>
          <Button variant="outline" className="gap-2">
            <Download size={18} /> Download CV
          </Button>
        </div>
        {/* Placeholder for Profile Image */}
        <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400">Your Image Here</span>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "PostgreSQL",
            "GraphQL",
            "Docker",
          ].map((skill, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-center font-semibold hover:border-emerald-500 transition-colors shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
