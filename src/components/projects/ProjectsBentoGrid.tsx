"use client";

import React, { useState } from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS_DATA, Project, PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export const ProjectsBentoGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 w-full">
          <SectionHeading
            number="03"
            tag="Engineered Solutions"
            title="Selected Projects."
            subtitle="Cross-platform AI assistants, cryptographic forensic systems, and edge DNS platforms."
          />

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#242424] hover:bg-[#2A2A2A] text-xs font-mono text-[#D6D2CB] hover:text-[#F7F6F4] border border-[#F7F6F4]/10 transition-colors shrink-0 self-start md:self-auto mb-12 md:mb-16"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View All on GitHub (@{PERSONAL_INFO.socials.githubUsername})</span>
            <ArrowUpRight className="w-3 h-3 text-[#802938]" />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
