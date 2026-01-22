import Section from "@/components/shared/Section";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Section className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-emerald-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">
              Let's talk about your project
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                  <Mail size={20} />
                </div>
                <span>hello@yourdomain.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                  <Phone size={20} />
                </div>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
