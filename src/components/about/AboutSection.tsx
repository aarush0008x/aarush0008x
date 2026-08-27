"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";
import { Brain, Code2, Users, Rocket } from "lucide-react";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: "B.Tech in AI & Data Science",
      desc: "Student at CGC University, exploring algorithmic theory, deep learning models, and edge AI deployment pipelines.",
      icon: Brain,
    },
    {
      title: "Full-Stack Web Engineering",
      desc: "Translating computational concepts into scalable, clean web applications using React, Next.js, TypeScript, and FastAPI.",
      icon: Code2,
    },
    {
      title: "Collaborative Mindset",
      desc: "Strong communication skills, thriving in multidisciplinary teams and intense hackathon sprint environments.",
      icon: Users,
    },
    {
      title: "Real-World Experience",
      desc: "Driven by hands-on engineering, 24-hour hackathons (HackNWin 3.0, Cypherverse), and continuous experimentation.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#282828]/50 border-t border-[#F7F6F4]/5 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading
          number="01"
          tag="Background & Philosophy"
          title="Building, Learning, and Exploring Technology."
          subtitle="A perspective centered on rigorous engineering, continuous learning, and human collaboration."
        />

        {/* Editorial Top Grid: Story on Left, Single Image Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12 mb-16 w-full">
          {/* Left Column: Deep Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#D6D2CB] text-base sm:text-lg leading-relaxed font-normal w-full">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I am a <strong className="text-[#F7F6F4] font-medium">B.Tech student specializing in Artificial Intelligence and Data Science</strong> at <strong className="text-[#F7F6F4] font-medium">CGC University</strong>. My work centers on the intersection of intelligent systems, scalable full-stack web engineering, and deliberate interface design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Rather than viewing technology solely through theoretical models, I believe the most profound learning happens when ideas are built, tested, and shipped in real-world scenarios. Whether architecting cross-platform AI tools like <strong className="text-[#F7F6F4] font-medium">BodhAI</strong> or platforms like <strong className="text-[#F7F6F4] font-medium">nimoCode</strong> and <strong className="text-[#F7F6F4] font-medium">RockinRoll</strong>, I focus on clean architecture, structural clarity, and usability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Beyond code syntax, I place immense value on <strong className="text-[#F7F6F4] font-medium">clear communication and meaningful collaboration</strong>. I enjoy working alongside fellow developers, brainstorming under 24-hour time constraints at hackathons, and presenting technical concepts with confidence.
            </motion.p>

            {/* Editorial Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#242424] border-l-2 border-[#802938] border-y border-r border-[#F7F6F4]/10 mt-8 w-full"
            >
              <p className="italic text-[#F7F6F4] text-base font-normal">
                &ldquo;Engineering is not merely about writing syntax; it is about distilling complexity into purposeful, reliable systems that empower people.&rdquo;
              </p>
              <span className="block mt-3 text-xs font-mono text-[#9E9A93]">— Aarush · CGC University</span>
            </motion.div>
          </div>

          {/* Right Column: Single High-Resolution Image Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative group w-full max-w-sm rounded-2xl sm:rounded-3xl overflow-hidden bg-[#242424] border-[2.5px] border-[#F7F6F4]/90 shadow-2xl aspect-[9/13]">
              <Image
                src="/images/aarush-about.jpg"
                alt="Aarush Singh"
                fill
                priority
                className="object-cover object-[center_18%] hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 80vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#1E1E1E]/90 backdrop-blur-md border border-[#F7F6F4]/10 text-xs font-mono">
                <span className="text-[#F7F6F4] font-medium block">Aarush Singh</span>
                <span className="text-[#802938] text-[11px]">AI &amp; Data Science · CGC University</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 4 Engineering Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#242424] border border-[#F7F6F4]/10 hover:border-[#802938]/40 transition-colors duration-300 w-full flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#802938]/10 border border-[#802938]/20 text-[#802938] w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F7F6F4] font-display tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9E9A93] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
