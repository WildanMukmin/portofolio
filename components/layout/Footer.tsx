import Link from "next/link";
import Magnetic from "@/components/shared/Magnetic";
import Section from "@/components/shared/Section";
import { buttonClasses } from "@/components/ui/Button";
import { navItems, site, socials } from "@/lib/site";

/** Words carry their position so the scroll-driven rise can be staggered. */
const STATEMENT = (() => {
  let index = 0;
  return [
    ["Have", "a", "project"],
    ["in", "mind?"],
  ].map((words) => words.map((word) => ({ word, index: index++ })));
})();

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="contact-light pointer-events-none absolute inset-0"
      />
      <div className="container relative mx-auto px-6">
        <Section className="py-24 md:py-40">
          <h2 className="final-title max-w-5xl font-display-wide text-[clamp(1.9rem,6.2vw,6rem)] font-extrabold leading-[0.98]">
            {STATEMENT.map((words, line) => (
              <span key={line} className="block md:whitespace-nowrap">
                {words.map(({ word, index }, i) => (
                  <span key={index}>
                    <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                      <span
                        className="final-word inline-block origin-bottom-left"
                        style={{ "--i": index } as React.CSSProperties}
                      >
                        {word}
                      </span>
                    </span>
                    {i < words.length - 1 ? " " : null}
                  </span>
                ))}{" "}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tell me what you are building, or what role you are hiring for.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Link href="/contact" className={buttonClasses({ size: "lg" })}>
                Contact Me
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className={buttonClasses({ variant: "outline", size: "lg" })}
              >
                {site.email}
              </a>
            </Magnetic>
          </div>
        </Section>

        <div className="relative flex flex-col gap-6 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <div
            aria-hidden
            className="final-horizon pointer-events-none absolute inset-x-0 -top-px h-px origin-center bg-gradient-to-r from-transparent via-link to-transparent"
          />
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
