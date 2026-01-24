"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16 texture-overlay">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              Contact
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Apakah Anda memiliki ide proyek yang menarik? Atau hanya ingin
              menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka
              untuk diskusi baru.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "wildan@example.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+62 812 3456 7890",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Indonesia",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-2xl border-2 border-border bg-card hover:border-primary/50 transition-all group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-wider text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border-2 border-border bg-card p-8 shadow-xl"
          >
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wider">
              Send Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-wider"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
                    placeholder="nama@contoh.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold uppercase tracking-wider"
                >
                  Subjek
                </label>
                <input
                  id="subject"
                  className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
                  placeholder="Tentang Project X"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-wider"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[150px] w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all resize-none"
                  placeholder="Ceritakan detail kebutuhan Anda..."
                />
              </div>

              <Button type="button" className="w-full" size="lg">
                Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
