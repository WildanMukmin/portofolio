"use client";

import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ ease: easeEditorial, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
