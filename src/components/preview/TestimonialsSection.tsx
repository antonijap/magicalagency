"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GeneratedBrief } from "@/types";
import { VibeTheme } from "@/lib/themes";

interface TestimonialsSectionProps {
  brief: GeneratedBrief;
  theme: VibeTheme;
}

export default function TestimonialsSection({ brief, theme: t }: TestimonialsSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <section className={`${t.sectionPadding} px-6`} style={{ backgroundColor: t.sectionAltBg }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <p
              className={`text-xs uppercase ${t.labelTracking} font-sans mb-6`}
              style={{ color: primary }}
            >
              Guest Voices
            </p>
            <h2 className={`${t.headingFont} text-4xl md:text-5xl ${t.headingColor}`}>
              What Our Guests Say
            </h2>
          </div>

          <div className="space-y-16">
            {brief.testimonials.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      fill={si < review.rating ? primary : (t.mood === "dark" ? "#333" : "#d4d4d4")}
                      style={{ color: si < review.rating ? primary : (t.mood === "dark" ? "#333" : "#d4d4d4") }}
                    />
                  ))}
                </div>

                <blockquote className={`${t.headingFont} text-xl md:text-2xl leading-relaxed italic mb-6 ${
                  t.mood === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <p className={`text-xs uppercase tracking-[0.2em] font-sans ${t.mutedColor}`}>
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
