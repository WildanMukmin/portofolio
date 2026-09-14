"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
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
      <Section className="w-full max-w-5xl">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 bg-card border border-border rounded-3xl p-8 md:p-12"
        >
          {/* Left info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                Have a project in mind?
              </span>
              <h1 className="font-display text-4xl font-bold mb-4">
                Let&apos;s Talk
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Have a project, a role, or just a question? Send a message
                through the form below, or reach out directly through any
                of the channels here.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    wildanmukmin26@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Indonesia (Remote Available)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Github</h3>
                  <Link
                    href="https://github.com/WildanMukmin"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    WildanMukmin
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full text-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Linkedin</h3>
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
          <div className="bg-background border border-border rounded-2xl p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2 disabled:cursor-not-allowed"
                size="lg"
              >
                <Send size={18} /> Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
