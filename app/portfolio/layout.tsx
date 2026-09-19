import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web applications built by Wildan Mukmin for university departments, companies, and events, with React, Next.js, Node.js, and Laravel.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
