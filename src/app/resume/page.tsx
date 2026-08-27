"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, Mail, GraduationCap, Code2, Briefcase, Award } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#2C2C2C] text-[#F7F6F4] py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Navigation Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#242424] hover:bg-[#1E1E1E] text-xs font-mono text-[#D6D2CB] hover:text-[#F7F6F4] border border-[#F7F6F4]/10 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/Aarush_Singh_Resume.pdf"
            download="Aarush_Singh_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#802938] hover:bg-[#9E3A4C] text-xs font-mono text-[#F7F6F4] font-medium transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF File</span>
          </a>
        </div>
      </div>

      {/* Resume Container */}
      <div className="max-w-4xl mx-auto rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 p-8 sm:p-12 shadow-xl print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        {/* Header */}
        <div className="border-b border-[#F7F6F4]/10 pb-8 mb-8 print:border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-[#F7F6F4] print:text-black">
                {RESUME_DATA.fullName}
              </h1>
              <p className="text-sm font-mono text-[#802938] font-medium mt-1">
                {RESUME_DATA.title} · {RESUME_DATA.institution}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs font-mono text-[#9E9A93] print:text-neutral-600 space-y-1">
              <div className="flex items-center gap-1.5 text-[#D6D2CB] print:text-black">
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
                  className="text-[#D6D2CB] print:text-black hover:text-[#802938] inline-flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/{RESUME_DATA.githubHandle}</span>
                </a>
                <span className="text-[#73706A]">•</span>
                <a
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6D2CB] print:text-black hover:text-[#802938] inline-flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-[#73706A]">•</span>
                <span>{RESUME_DATA.location}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#D6D2CB] print:text-neutral-800 leading-relaxed mt-6 pt-6 border-t border-[#F7F6F4]/5 print:border-neutral-200 font-normal">
            {RESUME_DATA.summary}
          </p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300 flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-[#F7F6F4] print:text-black font-display">
                  {edu.degree}
                </h3>
                <p className="text-xs text-[#D6D2CB] print:text-neutral-700 mt-0.5">
                  {edu.institution} — {edu.location}
                </p>
              </div>
              <div className="text-xs font-mono text-[#9E9A93] print:text-neutral-600 sm:text-right">
                <span className="text-[#802938] block font-medium">{edu.period}</span>
                <span>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
            <Code2 className="w-4 h-4" />
            <span>Core Engineering Projects</span>
          </div>
          <div className="space-y-4">
            {RESUME_DATA.keyProjects.map((proj, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-[#F7F6F4] print:text-black font-display">
                    {proj.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#802938] px-2 py-0.5 rounded bg-[#802938]/10 border border-[#802938]/20">
                    {proj.tech.split(",")[0]}
                  </span>
                </div>
                <p className="text-xs text-[#D6D2CB] print:text-neutral-800 leading-relaxed mb-2">
                  {proj.desc}
                </p>
                <div className="font-mono text-[11px] text-[#9E9A93] print:text-neutral-600">
                  Technologies: {proj.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons & Experience */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
            <Award className="w-4 h-4" />
            <span>Hackathons &amp; Sprint Experience</span>
          </div>
          <div className="space-y-4">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-[#F7F6F4] print:text-black font-display">
                    {exp.event} — <span className="text-[#D6D2CB] print:text-neutral-700 font-normal text-xs">{exp.role}</span>
                  </h4>
                  <span className="font-mono text-xs text-[#802938] font-medium">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#D6D2CB] print:text-neutral-800">
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

        {/* Technical Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#802938] font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>Technical Skills Matrix</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300">
              <span className="text-[#802938] font-mono font-semibold block mb-1">Programming:</span>
              <span className="text-[#D6D2CB] print:text-neutral-800">{RESUME_DATA.technicalSkills.languages.join(", ")}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300">
              <span className="text-[#802938] font-mono font-semibold block mb-1">AI &amp; Data Science:</span>
              <span className="text-[#D6D2CB] print:text-neutral-800">{RESUME_DATA.technicalSkills.ai_data.join(", ")}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300">
              <span className="text-[#802938] font-mono font-semibold block mb-1">Full-Stack &amp; Frameworks:</span>
              <span className="text-[#D6D2CB] print:text-neutral-800">{RESUME_DATA.technicalSkills.web.join(", ")}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1E1E1E] print:bg-neutral-100 border border-[#F7F6F4]/5 print:border-neutral-300">
              <span className="text-[#802938] font-mono font-semibold block mb-1">Tools &amp; Cloud:</span>
              <span className="text-[#D6D2CB] print:text-neutral-800">{RESUME_DATA.technicalSkills.tools_devops.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
