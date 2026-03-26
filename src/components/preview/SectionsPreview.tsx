"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GeneratedBrief } from "@/types";

interface SectionsPreviewProps {
  brief: GeneratedBrief;
}

export default function SectionsPreview({ brief }: SectionsPreviewProps) {
  const primary = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: primary }}>
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              More Than Just a Meal
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {brief.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-6"
                  style={{ backgroundColor: primary }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {section.content}
                </p>
                <span
                  className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: primary }}
                >
                  Learn more <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
