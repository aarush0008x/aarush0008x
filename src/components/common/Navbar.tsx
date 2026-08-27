"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ResumeModal } from "@/components/resume/ResumeModal";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [resumeOpen, setResumeOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["about", "hackathons", "projects", "skills", "journey", "github", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "py-3 bg-[#242424]/95 backdrop-blur-md border-b border-[#F7F6F4]/10 shadow-lg shadow-black/25"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold font-display text-[#F7F6F4] tracking-tight hover:opacity-90 transition-opacity"
            aria-label="Aarush Portfolio Home"
          >
            <span>Aarush</span>
            <span className="w-2 h-2 rounded-full bg-[#802938] group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1E1E1E]/90 px-3 py-1.5 rounded-full border border-[#F7F6F4]/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-mono tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-[#F7F6F4] bg-[#802938] font-medium shadow-sm"
                      : "text-[#D6D2CB] hover:text-[#F7F6F4] hover:bg-[#2C2C2C]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Resume & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#242424] hover:bg-[#2C2C2C] text-[#D6D2CB] hover:text-[#F7F6F4] text-xs font-mono border border-[#F7F6F4]/15 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#802938]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#802938] hover:bg-[#9E3A4C] text-[#F7F6F4] text-xs font-medium tracking-wide transition-colors duration-200 border border-[#802938]/40 shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#242424] border border-[#F7F6F4]/10 text-[#F7F6F4] hover:bg-[#323232] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[70px] z-40 p-6 mx-4 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 pb-3 mb-1 border-b border-[#F7F6F4]/10 text-xs font-mono text-[#96928B]">
                <span className="w-2 h-2 rounded-full bg-[#802938]" />
                <span>B.Tech AI & DS · {PERSONAL_INFO.institution}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-lg text-sm font-mono text-[#D6D2CB] hover:text-[#F7F6F4] hover:bg-[#2C2C2C] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#802938]" />
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-[#F7F6F4]/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeOpen(true);
                  }}
                  className="w-full text-center py-2.5 rounded-xl bg-[#1E1E1E] hover:bg-[#2C2C2C] text-[#F7F6F4] text-xs font-mono border border-[#F7F6F4]/10 transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#802938]" />
                  <span>View / Download Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-[#802938] hover:bg-[#9E3A4C] text-[#F7F6F4] text-sm font-medium transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
