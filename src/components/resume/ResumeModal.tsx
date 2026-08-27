"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Mail, GraduationCap, Code2, Briefcase, Award } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumePrintRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#141414]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-2xl bg-[#1E1E1E] border border-[#F7F6F4]/15 shadow-2xl z-10 my-6 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Top Bar Actions */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#F7F6F4]/10 bg-[#242424] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#D6D2CB]">
              <span className="w-2 h-2 rounded-full bg-[#802938]" />
              <span className="font-semibold text-[#F7F6F4]">Curriculum Vitae — {RESUME_DATA.fullName}</span>
              <span className="hidden sm:inline text-[#9E9A93]">({RESUME_DATA.institution})</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Direct Download PDF Button (downloads Aarush_Singh_Resume.pdf directly) */}
              <a
                href="/Aarush_Singh_Resume.pdf"
                download="Aarush_Singh_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#802938] hover:bg-[#9E3A4C] text-[#F7F6F4] font-medium transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF File</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#1E1E1E] text-[#9E9A93] hover:text-[#F7F6F4] hover:bg-[#323232] transition-colors border border-[#F7F6F4]/10"
                aria-label="Close resume viewer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Document Area */}
          <div
            ref={resumePrintRef}
            className="p-6 sm:p-10 overflow-y-auto bg-[#242424] text-[#F7F6F4] space-y-8"
          >
            {/* Resume Header */}
            <div className="border-b border-[#F7F6F4]/10 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold font-display tracking-tight text-[#F7F6F4]">
                    {RESUME_DATA.fullName}
                  </h1>
                  <p className="text-sm font-mono text-[#802938] font-medium mt-1">
                    {RESUME_DATA.title} · {RESUME_DATA.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-[#9E9A93] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#D6D2CB]">
                    <Mail className="w-3.5 h-3.5 text-[#802938]" />
                    <a href={`mailto:${RESUME_DATA.email}`} className="hover:underline">
                      {RESUME_DATA.email}
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={RESUME_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D6D2CB] hover:text-[#802938] inline-flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github.com/{RESUME_DATA.githubHandle}</span>
                    </a>
                    <span className="text-[#73706A]">•</span>
                    <a
                      href={RESUME_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D6D2CB] hover:text-[#802938] inline-flex items-center gap-1"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                    <span className="text-[#73706A]">•</span>
                    <span className="text-[#9E9A93]">{RESUME_DATA.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="text-xs sm:text-sm text-[#D6D2CB] leading-relaxed mt-4 pt-4 border-t border-[#F7F6F4]/5">
                {RESUME_DATA.summary}
              </p>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#F7F6F4] font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-[#D6D2CB] mt-0.5">
                      {edu.institution} — {edu.location}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#9E9A93] sm:text-right">
                    <span className="text-[#802938] block font-medium">{edu.period}</span>
                    <span>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Core Engineering Projects</span>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.keyProjects.map((proj, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[#F7F6F4] font-display">
                        {proj.name}
                      </h4>
                      <span className="font-mono text-[10px] text-[#802938] px-2 py-0.5 rounded bg-[#802938]/10 border border-[#802938]/20">
                        {proj.tech.split(",")[0]}
                      </span>
                    </div>
                    <p className="text-xs text-[#D6D2CB] leading-relaxed mb-2 font-normal">
                      {proj.desc}
                    </p>
                    <div className="font-mono text-[11px] text-[#9E9A93]">
                      Stack: {proj.tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons & Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
                <Award className="w-4 h-4" />
                <span>Hackathons &amp; Achievements</span>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-bold text-[#F7F6F4] font-display">
                        {exp.event} — <span className="text-[#D6D2CB] font-normal text-xs">{exp.role}</span>
                      </h4>
                      <span className="font-mono text-xs text-[#802938] font-medium">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#D6D2CB]">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#802938] font-mono">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
                <Briefcase className="w-4 h-4" />
                <span>Technical Skills Matrix</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
                  <span className="text-[#802938] font-mono font-semibold block mb-1">Languages:</span>
                  <span className="text-[#D6D2CB]">{RESUME_DATA.technicalSkills.languages.join(", ")}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
                  <span className="text-[#802938] font-mono font-semibold block mb-1">AI &amp; Data Science:</span>
                  <span className="text-[#D6D2CB]">{RESUME_DATA.technicalSkills.ai_data.join(", ")}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
                  <span className="text-[#802938] font-mono font-semibold block mb-1">Web &amp; Frameworks:</span>
                  <span className="text-[#D6D2CB]">{RESUME_DATA.technicalSkills.web.join(", ")}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5">
                  <span className="text-[#802938] font-mono font-semibold block mb-1">Tools &amp; Cloud:</span>
                  <span className="text-[#D6D2CB]">{RESUME_DATA.technicalSkills.tools_devops.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
