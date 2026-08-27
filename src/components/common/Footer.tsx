"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setCurrentTime(formatted);
      } catch (e) {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E] border-t border-[#F7F6F4]/10 text-xs font-mono text-[#9E9A93] w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        {/* Left Column: Monogram & Institution */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <a
            href="#"
            className="text-base font-bold font-display text-[#F7F6F4] flex items-center gap-1 hover:opacity-90"
          >
            <span>Aarush</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#802938]" />
          </a>
          <span className="hidden sm:inline text-[#73706A]">|</span>
          <span className="text-[#D6D2CB]">
            B.Tech AI &amp; DS @ {PERSONAL_INFO.institution}
          </span>
        </div>

        {/* Center: Live Time at CGC University */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#F7F6F4]/5 text-[#D6D2CB]">
          <span className="w-2 h-2 rounded-full bg-[#802938]" />
          <span>Mohali, IN (IST):</span>
          <span className="text-[#F7F6F4] font-medium">{currentTime || "Loading..."}</span>
        </div>

        {/* Right: Socials & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F6F4] transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F6F4] transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socials.email}`}
            className="hover:text-[#F7F6F4] transition-colors p-1"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#242424] hover:bg-[#2C2C2C] hover:text-[#F7F6F4] text-[#D6D2CB] border border-[#F7F6F4]/10 transition-colors ml-2 flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Top</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#F7F6F4]/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#73706A] w-full">
        <div>
          © {new Date().getFullYear()} Aarush Singh. All rights reserved.
        </div>
        <div>
          B.Tech AI &amp; Data Science · CGC University
        </div>
      </div>
    </footer>
  );
};
