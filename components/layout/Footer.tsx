import Link from "next/link";
import Section from "@/components/shared/Section";
import { buttonClasses } from "@/components/ui/Button";
import { navItems, site, socials } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6">
        <Section className="py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                Have a project in mind?
              </h2>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Tell me what you are building, or what role you are hiring for.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={buttonClasses({ size: "lg" })}>
                Contact Me
              </Link>
              <a
                href={`mailto:${site.email}`}
                className={buttonClasses({ variant: "outline", size: "lg" })}
              >
                {site.email}
              </a>
            </div>
          </div>
        </Section>

        <div className="flex flex-col gap-6 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-bold">{site.name}</p>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex h-11 min-w-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-wrap gap-x-6">
            {socials.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-link"
                >
                  {item.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-border py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js and
          Framer Motion.
        </p>
      </div>
    </footer>
  );
}
