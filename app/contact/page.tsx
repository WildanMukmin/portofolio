"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 flex items-center">
      <Section className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Let&apos;s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Connect.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md border-l-4 border-primary pl-6">
                Punya ide proyek gila atau sekadar ingin berdiskusi tentang
                teknologi masa depan? Sinyal saya selalu aktif.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/30 transition-all">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">
                    Email Uplink
                  </div>
                  <a
                    href="mailto:contact@wildan.dev"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    contact@wildan.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/30 transition-all">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">
                    Base Location
                  </div>
                  <div className="text-lg font-medium">Indonesia, Earth</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-md p-8 rounded-3xl border border-primary/20 shadow-2xl shadow-primary/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Identity
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Frequency
                  </label>
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Transmission Data
                </label>
                <textarea
                  rows={4}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <Button size="lg" className="w-full group">
                <Send className="mr-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Transmit Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
