import React from "react";
import { CustomCursor } from "@/components/common/CustomCursor";
import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { HackathonsSection } from "@/components/hackathons/HackathonsSection";
import { ProjectsBentoGrid } from "@/components/projects/ProjectsBentoGrid";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { StrengthsSection } from "@/components/strengths/StrengthsSection";
import { GithubActivitySection } from "@/components/github/GithubActivitySection";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/common/Footer";
import { AskAarushWidget } from "@/components/chat/AskAarushWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2C2C2C] text-[#F7F6F4] relative selection:bg-[#802938] selection:text-[#F7F6F4]">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Floating / Sticky Navigation */}
      <Navbar />

      {/* Hero Section with Mathematical Wave Canvas */}
      <HeroSection />

      {/* Section 01: About & Philosophy */}
      <AboutSection />

      {/* Section 02: Hackathons (HackNWin 3.0 & Cypherverse) */}
      <HackathonsSection />

      {/* Section 03: Projects Bento Grid Showcase */}
      <ProjectsBentoGrid />

      {/* Section 04: Typography-Focused Skills */}
      <SkillsSection />

      {/* Section 05: Core Working Strengths */}
      <StrengthsSection />

      {/* Section 06: GitHub Dev Activity & Heatmap */}
      <GithubActivitySection />

      {/* Section 07: Experience Journey Timeline */}
      <JourneyTimeline />

      {/* Section 08: Contact & Form */}
      <ContactSection />

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Ask Aarush AI Assistant */}
      <AskAarushWidget />
    </main>
  );
}
