"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";
import { HACKATHONS_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export const HackathonsSection: React.FC = () => {
  return (
    <section id="hackathons" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading
          number="02"
          tag="Competitive Engineering"
          title="Hackathons &amp; Sprints."
          subtitle="Testing ideas under real-time constraints, high-tempo collaboration, and technical execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full">
          {HACKATHONS_DATA.map((hackathon, index) => (
            <motion.article
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 p-7 sm:p-9 hover:border-[#802938]/50 hover:bg-[#272727] transition-all duration-300 shadow-sm w-full"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-[#F7F6F4]/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#802938]" />
                    <span className="font-mono text-xs text-[#D6D2CB] tracking-wider uppercase">
                      {hackathon.edition}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#9E9A93] px-2.5 py-1 rounded bg-[#1E1E1E] border border-[#F7F6F4]/5">
                    {hackathon.type}
                  </span>
                </div>

                {/* Event & Project Name */}
                <div className="mb-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#F7F6F4] font-display tracking-tight group-hover:text-[#F7F6F4] transition-colors">
                    {hackathon.name}
                  </h3>
                  {hackathon.projectName && (
                    <div className="flex items-center gap-2 mt-1">
                      <Code2 className="w-3.5 h-3.5 text-[#802938]" />
                      <span className="font-mono text-xs text-[#802938] font-medium">
                        Project: {hackathon.projectName}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#D6D2CB] leading-relaxed mb-6 font-normal">
                  {hackathon.description}
                </p>

                {/* Key Takeaways / Sprint Focus */}
                <div className="space-y-3 mb-6 bg-[#1E1E1E]/80 p-4 rounded-xl border border-[#F7F6F4]/5">
                  <div className="text-xs font-mono text-[#9E9A93] uppercase tracking-wider mb-2">
                    Key Sprint Experiences &amp; Learnings
                  </div>
                  {hackathon.keyLearnings.map((learning, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2.5 text-xs text-[#D6D2CB]">
                      <span className="text-[#802938] font-mono mt-0.5">•</span>
                      <span className="leading-relaxed">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack, Actions & Status */}
              <div className="pt-6 border-t border-[#F7F6F4]/10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#1E1E1E] border border-[#F7F6F4]/10 text-[#9E9A93]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Primary Action Button (View Live Project or View Project) */}
                  {hackathon.liveUrl && (
                    <a
                      href={hackathon.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#802938] hover:bg-[#9E3A4C] text-xs font-mono text-[#F7F6F4] transition-colors border border-[#802938]/40 shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Live Project</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {!hackathon.liveUrl && hackathon.githubUrl && (
                    <a
                      href={hackathon.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#802938] hover:bg-[#9E3A4C] text-xs font-mono text-[#F7F6F4] transition-colors border border-[#802938]/40 shadow-sm"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Project</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#9E9A93] pt-2 border-t border-[#F7F6F4]/5">
                  <span>Role: <strong className="text-[#D6D2CB] font-normal">{hackathon.role}</strong></span>
                  <span className="text-[#802938] font-medium">{hackathon.status}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
