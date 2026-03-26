"use client";

import { motion } from "framer-motion";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface HeroSectionProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function HeroSection({ brief, formData }: HeroSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden bg-gray-50">
      {/* Subtle accent gradient — never used as main background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: `radial-gradient(ellipse at bottom right, ${primary}, transparent 70%)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1] mb-6 max-w-4xl">
            {brief.heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            {brief.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: primary }}
            >
              Reserve a Table
            </button>
            <button className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors">
              View Our Menu
            </button>
          </div>

          {/* Info bar */}
          <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-gray-400">
            <span>{formData.location}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{formData.hours}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Reservations welcome</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
