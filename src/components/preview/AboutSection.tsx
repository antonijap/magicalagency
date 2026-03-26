"use client";

import { motion } from "framer-motion";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface AboutSectionProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function AboutSection({ brief, formData }: AboutSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <section className="py-32 md:py-40 px-6" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] font-sans mb-8"
            style={{ color: primary }}
          >
            Our Story
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12 leading-tight">
            Welcome to {formData.restaurantName}
          </h2>

          {/* Decorative line */}
          <div className="w-16 h-px mx-auto mb-12" style={{ backgroundColor: primary }} />

          <div className="max-w-2xl mx-auto space-y-6">
            {brief.aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-500 text-base md:text-lg leading-[1.8] font-sans font-light"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Two photo placeholders side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-20"
        >
          <div className="aspect-[4/5] bg-gray-200/50 flex items-center justify-center">
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-sans">
              Interior photo
            </p>
          </div>
          <div className="aspect-[4/5] bg-gray-200/50 flex items-center justify-center">
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-sans">
              Signature dish photo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
