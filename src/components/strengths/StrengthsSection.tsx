"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";
import { STRENGTHS_DATA } from "@/data/portfolioData";

export const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading
          number="05"
          tag="Core Principles"
          title="Working Strengths."
          subtitle="Fundamental professional behaviors that guide my engineering and team interactions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 w-full">
          {STRENGTHS_DATA.map((strength, index) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 sm:p-9 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-all duration-300 flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-[#802938] opacity-85">
                    {strength.number}
                  </span>
                  <span className="font-mono text-xs text-[#9E9A93] uppercase tracking-wider">
                    {strength.subtext}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[#F7F6F4] font-display tracking-tight mb-3">
                  {strength.title}
                </h3>

                <blockquote className="text-base text-[#F7F6F4] font-normal leading-relaxed mb-4 border-l-2 border-[#802938] pl-3">
                  &ldquo;{strength.statement}&rdquo;
                </blockquote>

                <p className="text-sm text-[#9E9A93] leading-relaxed font-normal">
                  {strength.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F7F6F4]/5 flex items-center gap-2 text-xs font-mono text-[#D6D2CB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#802938]" />
                <span>Verified in hackathons and project lifecycles</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
