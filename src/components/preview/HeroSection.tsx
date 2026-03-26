"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface HeroSectionProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function HeroSection({ brief, formData }: HeroSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background — gradient simulating a photo overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primary}40 0%, #1a1a1a 50%, ${primary}20 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Placeholder for restaurant photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white/20 text-sm font-sans uppercase tracking-[0.3em]">
          Your hero photograph here
        </p>
      </div>

      {/* Content — minimal, centered, confident */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-sans mb-6">
            {formData.location}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
            {brief.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-sans font-light max-w-xl mx-auto leading-relaxed mb-12">
            {brief.heroSubheadline}
          </p>
          <a
            href="#reserve"
            className="inline-block px-10 py-4 text-white text-xs uppercase tracking-[0.2em] font-sans border border-white/40 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={20} className="text-white/30" />
      </motion.div>
    </section>
  );
}
