"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { site, socials } from "@/lib/site";
import { useState } from "react";

const fieldClasses =
  "h-11 w-full rounded-lg border border-input bg-background px-4 text-base placeholder:text-muted-foreground";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, company }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <Section className="pb-16 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <h1 className="font-display text-4xl font-bold md:text-6xl">
              Contact
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              For a project, a role, or a question, send a message here or
              email me directly.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="mt-1 flex flex-wrap items-center gap-x-4">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-11 items-center break-all text-lg font-medium text-link underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="h-11 min-w-11 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Location</dt>
                <dd className="mt-1">{site.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Elsewhere</dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-6">
                    {socials.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 items-center font-medium text-link underline-offset-4 hover:underline"
                        >
                          {item.name}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div
              className="absolute h-0 w-0 overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="contact-company">Leave this field empty</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={fieldClasses}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={fieldClasses}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className={fieldClasses}
                placeholder="What is this about?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`${fieldClasses} min-h-40 resize-y py-3`}
                placeholder="Tell me about your project or role"
              />
            </div>

            <Button type="submit" size="lg" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            <p
              role="status"
              className={`text-sm ${
                status === "error" ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              {status === "success"
                ? "Message sent. I will get back to you soon."
                : status === "error"
                  ? errorMessage
                  : status === "sending"
                    ? "Sending your message..."
                    : "Sent directly from this page, no email app required."}
            </p>
          </form>
        </div>
      </Section>
    </div>
  );
}
