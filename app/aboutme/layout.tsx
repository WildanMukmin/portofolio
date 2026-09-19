import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Experience, education, and stack of Wildan Mukmin, a Computer Science undergraduate at Lampung University building full-stack web applications.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
