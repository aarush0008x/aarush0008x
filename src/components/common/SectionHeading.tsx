"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  alignment = "left",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        alignment === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-4"
        style={{ justifyContent: alignment === "center" ? "center" : "flex-start" }}
      >
        {number && (
          <span className="font-mono text-xs text-[#802938] font-semibold tracking-wider px-2 py-0.5 rounded bg-[#802938]/10 border border-[#802938]/30">
            {number}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs uppercase tracking-widest text-[#96928B]">
            {tag}
          </span>
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F7F6F4] font-display"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-[#D6D2CB] font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
