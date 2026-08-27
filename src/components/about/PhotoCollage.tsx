"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const PhotoCollage: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* 2-Column Collage Layout */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
        {/* Left Column: Big Portrait (6.5 cols) */}
        <div className="col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#242424] border-[2.5px] border-[#F7F6F4]/90 shadow-2xl aspect-[9/13] w-full"
          >
            <Image
              src="/images/aarush-main.jpg"
              alt="Aarush Singh Portrait"
              fill
              priority
              className="object-cover object-[center_8%] hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 60vw, 30vw"
            />
          </motion.div>

          {/* Overlaid Quote Card matching exact reference design */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 z-20 w-[180px] sm:w-[220px] p-3.5 sm:p-4 rounded-2xl bg-[#281F22] border-[2px] border-[#F7F6F4]/80 shadow-2xl"
          >
            <span className="text-[#C27A86] text-xl sm:text-2xl font-serif font-bold leading-none block mb-1">
              &ldquo;&ldquo;
            </span>
            <p className="text-[11px] sm:text-xs text-[#F7F6F4] leading-relaxed font-sans font-normal">
              Code is not just what I write, it&apos;s how I solve problems and build a better future.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Stacked 2 Images (5 cols) */}
        <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
          {/* Top Image (Angled Selfie with picture on wall) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#242424] border-[2.5px] border-[#F7F6F4]/90 shadow-xl aspect-[4/3] w-full"
          >
            <Image
              src="/images/aarush-cap.png"
              alt="Aarush Singh"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 40vw, 20vw"
            />
          </motion.div>

          {/* Bottom Image (Standing in blue striped shirt) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#242424] border-[2.5px] border-[#F7F6F4]/90 shadow-xl aspect-[3/4] w-full"
          >
            <Image
              src="/images/aarush-standing.jpg"
              alt="Aarush Singh Standing"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 40vw, 20vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
