"use client";

import { motion } from "framer-motion";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface HeroSectionProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function HeroSection({ brief, formData }: HeroSectionProps) {
  const primaryColor = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background gradient using generated primary color */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background: `radial-gradient(ellipse at top, ${primaryColor} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Restaurant name badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
            {formData.restaurantName}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[0.95]">
            {brief.heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {brief.heroSubheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              className="px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: primaryColor }}
            >
              Reserve a Table
            </button>
            <button className="px-8 py-4 rounded-xl text-gray-600 font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
              View Menu
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
