"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GeneratedBrief } from "@/types";

interface TestimonialsSectionProps {
  brief: GeneratedBrief;
}

export default function TestimonialsSection({ brief }: TestimonialsSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <section className="py-32 md:py-40 px-6" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <p
              className="text-xs uppercase tracking-[0.3em] font-sans mb-6"
              style={{ color: primary }}
            >
              Guest Voices
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
              What Our Guests Say
            </h2>
          </div>

          <div className="space-y-16">
            {brief.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center max-w-2xl mx-auto"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      fill={si < t.rating ? primary : "#d4d4d4"}
                      style={{ color: si < t.rating ? primary : "#d4d4d4" }}
                    />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-sans">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
