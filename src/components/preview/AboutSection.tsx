"use client";

import { motion } from "framer-motion";
import { GeneratedBrief } from "@/types";

interface AboutSectionProps {
  brief: GeneratedBrief;
}

export default function AboutSection({ brief }: AboutSectionProps) {
  const accentColor = brief.colorPalette[1]?.hex || brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-12 h-1 rounded-full mb-8"
            style={{ backgroundColor: accentColor }}
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-10">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {brief.aboutParagraphs.slice(0, 2).map((p, i) => (
                <p key={i} className="text-lg text-gray-500 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-6">
              {brief.aboutParagraphs.slice(2).map((p, i) => (
                <p key={i} className="text-lg text-gray-500 leading-relaxed">
                  {p}
                </p>
              ))}
              {/* Visual placeholder for imagery */}
              <div
                className="h-48 rounded-2xl opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${brief.colorPalette[0]?.hex || "#E44332"}, ${brief.colorPalette[2]?.hex || "#333"})`,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
