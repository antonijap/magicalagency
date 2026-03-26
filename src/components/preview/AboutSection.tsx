"use client";

import { motion } from "framer-motion";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface AboutSectionProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function AboutSection({ brief, formData }: AboutSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gray-100" />
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-sm text-center px-8">
                  Your restaurant photo here
                </p>
              </div>
              {/* Small accent block */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl"
                style={{ backgroundColor: primary, opacity: 0.15 }}
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: primary }}>
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Welcome to {formData.restaurantName}
              </h2>
              <div className="space-y-5">
                {brief.aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
