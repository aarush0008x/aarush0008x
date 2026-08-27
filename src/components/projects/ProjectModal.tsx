"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Cpu, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ARCHITECTURE_FLOWS: Record<string, { steps: string[]; caption: string }> = {
  nimocode: {
    steps: [
      "Subdomain Request (Vercel/Custom)",
      "Cloudflare Workers Edge Proxy",
      "Automated DNS Verification API",
      "Instant Edge Routing (<2s Propagation)",
    ],
    caption: "Edge DNS proxying & instant public subdomain routing architecture",
  },
  rockinroll: {
    steps: [
      "Client Audio Player UI",
      "Web Audio API & Spectrum Visualizer",
      "Optimized State Manager",
      "Low-Latency CDN Streaming (rockinroll.in)",
    ],
    caption: "Interactive real-time audio playback & visual spectrum pipeline",
  },
  evidenceledger: {
    steps: [
      "RAW Forensic Disk Image Ingestion",
      "Signature-Based Binary File Carving",
      "SHA-256 Hash-Chained Audit Ledger",
      "NIST SP 800-88 Tamper Certificate (25/25 Tests)",
    ],
    caption: "Cryptographic tamper-evident chain & forensic verification pipeline",
  },
  bodhai: {
    steps: [
      "Terminal CLI & Cross-Platform UI",
      "Intelligent Engine Dispatcher",
      "Cloudflare Workers AI (Llama 3.1 8B) / Ollama",
      "Real-Time Web Synthesis & Instant Share Links",
    ],
    caption: "Multi-surface edge routing & local AI fallback architecture",
  },
  smartdrobe: {
    steps: [
      "Closet Apparel Photo Ingestion",
      "Computer Vision Feature Extraction",
      "Color Harmony & Season Matrix",
      "Weather-Aware Outfit Recommendation Engine",
    ],
    caption: "Computer vision wardrobe indexing & style generation pipeline",
  },
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const archFlow = ARCHITECTURE_FLOWS[project.id];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1E1E1E]/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#242424] border border-[#F7F6F4]/15 shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#1E1E1E] text-[#D6D2CB] hover:text-[#F7F6F4] hover:bg-[#323232] transition-colors border border-[#F7F6F4]/10"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#802938]">
              <span>{project.category}</span>
              <span>·</span>
              <span className="text-[#96928B]">{project.role}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F6F4] font-display">
              {project.title}
            </h3>
            <p className="text-sm text-[#D6D2CB] mt-1 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 mb-8 text-sm sm:text-base text-[#D6D2CB] leading-relaxed">
            <p>{project.detailedDescription}</p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#1E1E1E] border border-[#F7F6F4]/10">
              {project.metrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="font-mono text-lg sm:text-xl font-bold text-[#F7F6F4]">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[11px] text-[#96928B] uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Deep-Dive Diagram Card */}
          {archFlow && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#1E1E1E] border border-[#802938]/30 shadow-inner">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#802938]" />
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#F7F6F4] font-semibold">
                  System Architecture Flow
                </h4>
              </div>

              <div className="space-y-2.5">
                {archFlow.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#802938]/20 text-[#802938] border border-[#802938]/40 text-xs font-mono font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 p-2.5 rounded-lg bg-[#242424] border border-[#F7F6F4]/5 text-xs font-mono text-[#D6D2CB]">
                      {step}
                    </div>
                    {idx < archFlow.steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#802938] shrink-0 hidden sm:block opacity-60" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[11px] font-mono text-[#9E9A93] italic">
                ℹ️ {archFlow.caption}
              </p>
            </div>
          )}

          {/* Key Highlights */}
          <div className="mb-8 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#96928B]">
              Key Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D6D2CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#802938] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#96928B] mb-3">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-md bg-[#1E1E1E] border border-[#F7F6F4]/10 text-[#D6D2CB]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Links Action Bar */}
          <div className="pt-6 border-t border-[#F7F6F4]/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E1E1E] hover:bg-[#2C2C2C] text-[#F7F6F4] text-xs font-mono border border-[#F7F6F4]/15 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#802938] hover:bg-[#9E3A4C] text-[#F7F6F4] text-xs font-mono transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="font-mono text-xs text-[#96928B]">
              Author: @aarush0008x · CGC University
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
