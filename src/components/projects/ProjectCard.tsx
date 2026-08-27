"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const isFeatured = project.featured;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#802938]/50 hover:bg-[#272727] ${
        isFeatured ? "lg:col-span-12 xl:col-span-8" : "lg:col-span-6 xl:col-span-4"
      }`}
    >
      {/* Subtle cursor-following radial highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(128, 41, 56, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#802938] font-medium tracking-wider">
              {project.category}
            </span>
            {isFeatured && (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#802938]/20 border border-[#802938]/40 text-[#F7F6F4] uppercase tracking-wider">
                Featured Spotlight
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#96928B] hover:text-[#F7F6F4] hover:bg-[#1E1E1E] transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#96928B] hover:text-[#802938] hover:bg-[#1E1E1E] transition-colors"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Visual Mockup Preview Frame */}
        {project.image && (
          <div
            onClick={() => onSelect(project)}
            className="relative w-full aspect-[16/9] mb-5 rounded-xl overflow-hidden bg-[#1E1E1E] border border-[#F7F6F4]/10 cursor-pointer group-hover:border-[#802938]/40 transition-all duration-300 shadow-md"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}

        {/* Title & Tagline */}
        <h3
          onClick={() => onSelect(project)}
          className="text-xl sm:text-2xl font-semibold text-[#F7F6F4] font-display tracking-tight group-hover:text-[#F7F6F4] cursor-pointer transition-colors"
        >
          {project.title}
        </h3>

        <p className="text-xs font-mono text-[#D6D2CB] mt-1 mb-3 opacity-80">
          {project.tagline}
        </p>

        <p className="text-xs sm:text-sm text-[#D6D2CB] leading-relaxed mb-5 font-normal">
          {project.description}
        </p>

        {/* Featured Project Metrics / Highlights */}
        {isFeatured && project.metrics && (
          <div className="mb-5 grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#1E1E1E]/80 border border-[#F7F6F4]/5">
            {project.metrics.map((m, mIdx) => (
              <div key={mIdx}>
                <div className="font-mono text-sm sm:text-base font-bold text-[#F7F6F4]">
                  {m.value}
                </div>
                <div className="font-mono text-[10px] text-[#96928B] uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info: Technologies & Case Study Trigger */}
      <div className="relative z-10 pt-5 border-t border-[#F7F6F4]/10 mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#1E1E1E] border border-[#F7F6F4]/5 text-[#96928B]"
            >
              {tech}
            </span>
          ))}
          {!isFeatured && project.technologies.length > 4 && (
            <span className="font-mono text-[11px] px-2 py-1 text-[#6E6B65]">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="group/btn inline-flex items-center gap-2 text-xs font-mono text-[#D6D2CB] group-hover:text-[#F7F6F4] transition-colors"
        >
          <span>View Deep Dive &amp; Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#802938] transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
