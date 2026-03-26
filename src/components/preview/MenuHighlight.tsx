"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GeneratedBrief, IntakeFormData } from "@/types";

interface MenuHighlightProps {
  brief: GeneratedBrief;
  formData: IntakeFormData;
}

export default function MenuHighlight({
  brief,
  formData,
}: MenuHighlightProps) {
  const primaryColor = brief.colorPalette[0]?.hex || "#E44332";

  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: `${primaryColor}08` }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Star size={20} style={{ color: primaryColor }} fill={primaryColor} />
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: primaryColor }}
            >
              Signature Dish
            </span>
            <Star size={20} style={{ color: primaryColor }} fill={primaryColor} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {formData.signatureDish}
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            The dish that started it all. The reason regulars keep coming back
            and new faces light up.
          </p>

          {/* Visual dish card placeholder */}
          <div className="relative max-w-md mx-auto">
            <div
              className="aspect-[4/3] rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}20, ${brief.colorPalette[2]?.hex || "#f5f5f5"}30)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-300 text-sm">
                [Your beautiful dish photo here]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
