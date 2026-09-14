import type { Metadata } from "next";
import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Wildan's Portfolio",
  description: "Welcome to Wildan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 paper-grain pointer-events-none z-[-1]" />

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
