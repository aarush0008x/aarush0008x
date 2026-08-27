"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";
import { JOURNEY_DATA } from "@/data/portfolioData";

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-5xl mx-auto w-full">
        <SectionHeading
          number="07"
          tag="Evolution & Milestones"
          title="Experience Journey."
          subtitle="From algorithmic foundations to specialized AI, edge deployments, and hackathon engineering."
        />

        <div className="relative mt-12 w-full">
          {/* Vertical Continuous Line */}
          <div
            className="absolute top-4 bottom-6 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-[#802938] via-[#802938]/50 to-transparent"
            aria-hidden="true"
          />

          {/* Timeline Cards Container */}
          <div className="space-y-8 sm:space-y-10 w-full">
            {JOURNEY_DATA.map((milestone, index) => (
              <motion.div
                key={milestone.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start pl-10 sm:pl-16 w-full"
              >
                {/* Node Circle Indicator */}
                <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#242424] border-2 border-[#802938] flex items-center justify-center shadow-md shadow-[#802938]/20">
                    <div className="w-2 h-2 rounded-full bg-[#802938]" />
                  </div>
                </div>

                {/* Milestone Card (Spans full available width) */}
                <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-all duration-300 shadow-sm">
                  {/* Step & Stage */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[#F7F6F4]/5">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#802938]">
                      <span className="font-bold">Step {milestone.step}</span>
                      <span>·</span>
                      <span className="text-[#D6D2CB]">{milestone.stage}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#9E9A93] px-2 py-0.5 rounded bg-[#1E1E1E]">
                      Milestone {milestone.step}/05
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F7F6F4] font-display tracking-tight mb-3">
                    {milestone.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-sm text-[#D6D2CB] leading-relaxed mb-4 font-normal">
                    {milestone.description}
                  </p>

                  {/* Key Outcome Highlight */}
                  <div className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5 text-xs text-[#D6D2CB] mb-4">
                    <span className="text-[#802938] font-mono font-semibold block mb-1">
                      Key Engineering Takeaway:
                    </span>
                    {milestone.keyTakeaway}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#1E1E1E] text-[#9E9A93] border border-[#F7F6F4]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
