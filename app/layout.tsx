import type { Metadata } from "next";
import "./globals.css";
import { Inter, Archivo } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata: Metadata = {
  title: "Wildan Mukmin — Fullstack Web Developer",
  description:
    "Portfolio of Wildan Mukmin, a fullstack web developer building fast, reliable digital products with React, Next.js, and Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${archivo.variable} min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Site-wide backdrop: dot grid + soft glow + grain, fixed behind everything */}
          <div
            aria-hidden
            className="fixed inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute inset-0 site-backdrop" />
            <div className="absolute inset-0 site-noise" />
            <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[56rem] h-[56rem] rounded-full bg-primary/10 dark:bg-primary/20 blur-[160px]" />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
