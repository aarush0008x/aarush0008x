"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, FileText } from "lucide-react";
import { HeroVisualCanvas } from "./HeroVisualCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { PhotoCollage } from "@/components/about/PhotoCollage";

export const HeroSection: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#2C2C2C] w-full"
      >
        {/* Background WebGL/Canvas Wave Visual */}
        <HeroVisualCanvas />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center">
              {/* Academic / Specialization Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424]/90 border border-[#F7F6F4]/10 text-xs font-mono text-[#D6D2CB] mb-6 shadow-sm backdrop-blur-sm"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#802938]" />
                <span>B.Tech AI &amp; DS · {PERSONAL_INFO.institution}</span>
              </motion.div>

              {/* Hero Title (Aarush) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#F7F6F4] font-display leading-[0.95] mb-4">
                  {PERSONAL_INFO.name}
                  <span className="text-[#802938]">.</span>
                </h1>
              </motion.div>

              {/* Subtitle / Role */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#D6D2CB] font-display tracking-tight">
                  Developer <span className="text-[#802938] font-normal">·</span> AI &amp; Data Science Student <span className="text-[#802938] font-normal">·</span> Builder
                </p>
              </motion.div>

              {/* Editorial Introduction */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-[#9E9A93] max-w-xl leading-relaxed mb-10 font-normal"
              >
                {PERSONAL_INFO.bio}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
              >
                {/* Primary View Projects button */}
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#802938] text-[#F7F6F4] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#9E3A4C] hover:shadow-lg hover:shadow-[#802938]/20 border border-[#802938]/40"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* View Resume Button */}
                <button
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#242424] hover:bg-[#2C2C2C] text-[#F7F6F4] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border border-[#F7F6F4]/15 hover:border-[#F7F6F4]/30"
                >
                  <FileText className="w-4 h-4 text-[#802938]" />
                  <span>View Resume</span>
                </button>

                {/* Get In Touch button */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-[#242424] text-[#D6D2CB] hover:text-[#F7F6F4] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border border-[#F7F6F4]/10 hover:border-[#F7F6F4]/20"
                >
                  <span>Get In Touch</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9E9A93] group-hover:bg-[#802938] transition-colors" />
                </a>
              </motion.div>
            </div>

            {/* Right Column: Exact Photo Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex justify-center lg:justify-end w-full"
            >
              <PhotoCollage />
            </motion.div>
          </div>

          {/* Micro Metadata Footer inside Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-[#F7F6F4]/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-[#9E9A93]"
          >
            <div>
              <span className="block text-[#73706A] uppercase text-[10px] tracking-wider mb-1">Focus</span>
              <span className="text-[#D6D2CB]">AI &amp; Full-Stack Systems</span>
            </div>
            <div>
              <span className="block text-[#73706A] uppercase text-[10px] tracking-wider mb-1">Affiliation</span>
              <span className="text-[#D6D2CB]">{PERSONAL_INFO.institution}</span>
            </div>
            <div>
              <span className="block text-[#73706A] uppercase text-[10px] tracking-wider mb-1">Status</span>
              <span className="text-[#802938] font-medium">Available for Opportunities</span>
            </div>
            <div>
              <span className="block text-[#73706A] uppercase text-[10px] tracking-wider mb-1">GitHub</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D6D2CB] hover:text-[#802938] transition-colors inline-flex items-center gap-1"
              >
                <span>@{PERSONAL_INFO.socials.githubUsername}</span>
                <ArrowRight className="w-3 h-3 -rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
