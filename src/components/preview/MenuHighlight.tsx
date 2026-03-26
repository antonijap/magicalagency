"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface MenuHighlightProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function MenuHighlight({ brief, formData }: MenuHighlightProps) {
  const primary = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star size={18} style={{ color: primary }} fill={primary} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: primary }}>
                Signature Dish
              </span>
              <Star size={18} style={{ color: primary }} fill={primary} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {formData.signatureDish}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Dish photo placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gray-100" />
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-sm">Your dish photo here</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The dish that started it all. The reason regulars keep coming back
                and new faces light up. Every bite tells the story of {formData.restaurantName}.
              </p>
              <div className="flex items-center gap-4 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill={primary} style={{ color: primary }} />
                ))}
                <span className="text-sm text-gray-500 font-medium">&quot;Best in town&quot;</span>
              </div>
              <button
                className="px-6 py-3 rounded-lg text-white font-semibold"
                style={{ backgroundColor: primary }}
              >
                See Full Menu
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
