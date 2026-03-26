"use client";

import { motion } from "framer-motion";
import { GeneratedBrief } from "@/types";

interface SectionsPreviewProps {
  brief: GeneratedBrief;
}

export default function SectionsPreview({ brief }: SectionsPreviewProps) {
  const primaryColor = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {brief.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5"
                  style={{ backgroundColor: primaryColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
