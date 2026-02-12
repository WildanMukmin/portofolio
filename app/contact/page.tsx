"use client";

import { useState } from "react";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

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
        <div className="grid md:grid-cols-2 gap-12 bg-card/30 backdrop-blur-md border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

          {/* Left info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl font-black mb-4">Let&apos;s Connect</h1>
              <p className="text-muted-foreground">
                Interested in collaborating or have questions about a project?
                Send me a message via this form or email directly.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">
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
                <div className="p-3 bg-secondary rounded-lg text-primary">
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
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Github</h3>
                  <Link href="https://github.com/WildanMukmin">
                    <p className="text-sm text-muted-foreground">
                      WildanMukmin
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Linkedin</h3>
                  <Link href="https://www.linkedin.com/in/wildan-mukmin-7569422a7/">
                    <p className="text-sm text-muted-foreground">
                      Wildan Mukmin
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
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
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2 font-bold disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                size="lg"
              >
                <Send size={18} /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
