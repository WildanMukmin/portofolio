import ProjectCard from "@/components/ui/project-card";
import { EXPERIENCE, HERO_DATA, PROJECTS, SKILLS } from "@/data";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
            {HERO_DATA.role}
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            {HERO_DATA.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {HERO_DATA.tagline} {HERO_DATA.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a
              href="/cv.pdf"
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About & Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Hello! I&apos;m a passionate developer who loves turning complex
                problems into simple, beautiful, and intuitive designs. My
                journey started when I wrote my first line of code...
                <br />
                <br />I believe in writing clean, maintainable code and always
                staying up-to-date with the latest industry trends.
              </p>
            </div>
            <div className="space-y-6">
              {SKILLS.map((category) => (
                <div key={category.name}>
                  <h3 className="font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects that demonstrate my technical skills and
            problem-solving abilities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-blue-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <time className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {exp.period}
                    </time>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                    {exp.company}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center gap-8">
              <a
                href="#"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition"
              >
                <Mail size={20} /> email@example.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition"
              >
                <MapPin size={20} /> Indonesia
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
