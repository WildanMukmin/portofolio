import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Developer | Portfolio",
  description:
    "Portfolio of a Full Stack Developer specializing in Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="py-8 text-center text-slate-500 text-sm bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            © {new Date().getFullYear()} My Portfolio. Built with Next.js &
            Tailwind.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
