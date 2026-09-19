import type { Metadata } from "next";
import "./globals.css";
import { Inter, Archivo, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionConfig } from "framer-motion";

// Inter for reading text, Archivo for headings (heavier and tighter, so
// headings read as a different voice), Geist Mono for dates, indexes and stack.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const description =
  "Portfolio of Wildan Mukmin, a full-stack web developer building web applications with React, Next.js, and Laravel.";

export const metadata: Metadata = {
  title: {
    default: "Wildan Mukmin | Full-stack Web Developer",
    template: "%s | Wildan Mukmin",
  },
  description,
  openGraph: {
    title: "Wildan Mukmin | Full-stack Web Developer",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wildan Mukmin | Full-stack Web Developer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${archivo.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
            >
              Skip to content
            </a>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main id="main" className="flex-1 pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
