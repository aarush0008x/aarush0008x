"use client";

import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ContactForm } from "./ContactForm";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, MapPin, Clock, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#2C2C2C] border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading
          number="08"
          tag="Reach Out"
          title="Let's build something meaningful."
          subtitle="I'm always interested in learning, collaborating, and working on interesting ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12 w-full">
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-5 w-full">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-colors w-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#802938]">
                  <Mail className="w-4 h-4" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#1E1E1E] text-[#9E9A93] hover:text-[#F7F6F4] text-xs font-mono transition-colors flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="text-base sm:text-lg font-semibold text-[#F7F6F4] font-display hover:text-[#802938] transition-colors break-all"
              >
                {PERSONAL_INFO.socials.email}
              </a>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-all block group w-full"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#802938]">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9E9A93] group-hover:text-[#802938] transition-colors" />
              </div>
              <div className="text-base font-semibold text-[#F7F6F4] font-display">
                github.com/{PERSONAL_INFO.socials.githubUsername}
              </div>
              <p className="text-xs text-[#9E9A93] mt-1">
                Explore repositories, code commits, and project architectures
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-all block group w-full"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#802938]">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9E9A93] group-hover:text-[#802938] transition-colors" />
              </div>
              <div className="text-base font-semibold text-[#F7F6F4] font-display">
                linkedin.com/in/{PERSONAL_INFO.socials.linkedinHandle || "aarush-singh-4b3a20358"}
              </div>
              <p className="text-xs text-[#9E9A93] mt-1">
                Connect for professional inquiries, hackathons, and networking
              </p>
            </a>

            {/* Academic & Geographic Location */}
            <div className="p-6 rounded-2xl bg-[#1E1E1E]/80 border border-[#F7F6F4]/5 space-y-2.5 text-xs font-mono text-[#9E9A93] w-full">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#802938]" />
                <span className="text-[#D6D2CB]">{PERSONAL_INFO.location} · {PERSONAL_INFO.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#802938]" />
                <span>Timezone: {PERSONAL_INFO.timezone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
