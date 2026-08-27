"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";
import { SKILLS_DATA, CERTIFICATES_DATA, HOBBIES_DATA } from "@/data/portfolioData";
import { Code, Terminal, Cpu, Wrench, Award, Heart, Film, Video, Mic } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const icons = [Code, Cpu, Wrench, Terminal];
  const categories = ["All", ...SKILLS_DATA.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.title === activeCategory);

  const hobbyIcons = [Video, Film, Mic];

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#282828]/40 border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading
          number="04"
          tag="Technical Competence"
          title="Skills, Tools &amp; Ecosystem."
          subtitle="A structured overview of core languages, creative media, tools, and engineering fundamentals."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#802938] text-[#F7F6F4] border border-[#802938]"
                  : "bg-[#242424] text-[#9E9A93] hover:text-[#F7F6F4] border border-[#F7F6F4]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 Categorized Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
          {displayedCategories.map((category, catIdx) => {
            const Icon = icons[catIdx % icons.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-7 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-all duration-300 flex flex-col justify-between w-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#F7F6F4]/10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-[#802938]/10 text-[#802938] border border-[#802938]/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#F7F6F4] font-display tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#9E9A93]">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-[#9E9A93] leading-relaxed mb-6 font-normal">
                    {category.description}
                  </p>

                  {/* Refined Text Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E1E1E] border border-[#F7F6F4]/10 hover:border-[#802938]/40 hover:bg-[#282828] transition-all"
                      >
                        <span className="text-xs font-mono text-[#F7F6F4]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#73706A] group-hover/skill:text-[#802938] transition-colors">
                          • {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F7F6F4]/5 flex items-center justify-between text-[11px] font-mono text-[#73706A]">
                  <span>Domain: {category.title}</span>
                  <span className="text-[#802938]">Hands-On Competence</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Two Bottom Complementary Sections: Certificates & Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Certificates & Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-7 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 w-full"
          >
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#F7F6F4]/10">
              <div className="p-1.5 rounded-md bg-[#802938]/10 text-[#802938] border border-[#802938]/20">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#F7F6F4] font-display">
                  Certificates &amp; Credentials
                </h4>
                <p className="text-xs font-mono text-[#9E9A93]">Verified coursework and technical foundations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CERTIFICATES_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5 hover:border-[#802938]/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#F7F6F4] font-display">
                      {cert.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#802938] px-1.5 py-0.5 rounded bg-[#802938]/10">
                      {cert.year}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9E9A93]">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies & Creative Pursuits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-7 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 w-full"
          >
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#F7F6F4]/10">
              <div className="p-1.5 rounded-md bg-[#802938]/10 text-[#802938] border border-[#802938]/20">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#F7F6F4] font-display">
                  Hobbies &amp; Creative Passions
                </h4>
                <p className="text-xs font-mono text-[#9E9A93]">Interests beyond code and syntax</p>
              </div>
            </div>

            <div className="space-y-3">
              {HOBBIES_DATA.map((hobby, idx) => {
                const HIcon = hobbyIcons[idx % hobbyIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/5 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#242424] text-[#802938] border border-[#F7F6F4]/5 shrink-0">
                      <HIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#F7F6F4] font-display block">
                        {hobby.name}
                      </span>
                      <span className="text-[11px] text-[#9E9A93] leading-tight block mt-0.5">
                        {hobby.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
