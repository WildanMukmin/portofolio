"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink = `mailto:wildanmukmin26@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      <Section variant="headline" className="w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 border border-border rounded-md p-8 md:p-12">
          {/* Left info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-display text-4xl mb-4">Let&apos;s connect</h1>
              <p className="text-muted-foreground leading-relaxed">
                Interested in collaborating or have questions about a project?
                Send a message via this form or email directly.
              </p>
            </div>

            <div className="space-y-6 border-t border-border pt-6">
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-muted-foreground mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    wildanmukmin26@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-muted-foreground mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Indonesia (Remote Available)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Github size={18} className="text-muted-foreground mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">GitHub</h3>
                  <Link
                    href="https://github.com/WildanMukmin"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    WildanMukmin
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin size={18} className="text-muted-foreground mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">LinkedIn</h3>
                  <Link
                    href="https://www.linkedin.com/in/wildan-mukmin-7569422a7/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Wildan Mukmin
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card border border-border rounded-md p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-medium tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-medium tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-medium tracking-wider text-muted-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-medium tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 h-32 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                size="lg"
              >
                <Send size={18} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
