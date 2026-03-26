"use client";

import { motion } from "framer-motion";
import { GeneratedBrief, IntakeFormData } from "@/types";
import { VibeTheme } from "@/lib/themes";

interface AboutSectionProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
  theme: VibeTheme;
}

export default function AboutSection({ brief, formData, theme: t }: AboutSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <section className={`${t.sectionPadding} px-6`} style={{ backgroundColor: t.pageBg }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={t.heroAlign === "center" ? "text-center" : ""}
        >
          <p
            className={`text-xs uppercase ${t.labelTracking} font-sans mb-8`}
            style={{ color: primary }}
          >
            Our Story
          </p>

          <h2 className={`${t.headingFont} text-4xl md:text-5xl ${t.headingColor} mb-12 leading-tight`}>
            Welcome to {formData.restaurantName}
          </h2>

          {/* Decorative line */}
          <div
            className={`w-16 h-px mb-12 ${t.heroAlign === "center" ? "mx-auto" : ""}`}
            style={{ backgroundColor: primary }}
          />

          <div className={`max-w-2xl space-y-6 ${t.heroAlign === "center" ? "mx-auto" : ""}`}>
            {brief.aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className={`${t.bodyColor} text-base md:text-lg leading-[1.8] font-sans font-light`}
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Photo placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-20"
        >
          <div
            className={`aspect-[4/5] ${t.cardRadius} flex items-center justify-center`}
            style={{ backgroundColor: t.mood === "dark" ? "#1a1a1a" : "#e8e4df" }}
          >
            <p className={`text-xs uppercase tracking-[0.2em] font-sans ${t.mood === "dark" ? "text-gray-600" : "text-gray-400"}`}>
              Interior photo
            </p>
          </div>
          <div
            className={`aspect-[4/5] ${t.cardRadius} flex items-center justify-center`}
            style={{ backgroundColor: t.mood === "dark" ? "#1a1a1a" : "#e8e4df" }}
          >
            <p className={`text-xs uppercase tracking-[0.2em] font-sans ${t.mood === "dark" ? "text-gray-600" : "text-gray-400"}`}>
              Signature dish photo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
