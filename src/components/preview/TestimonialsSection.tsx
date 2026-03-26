"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GeneratedBrief } from "@/types";

interface TestimonialsSectionProps {
  brief: GeneratedBrief;
}

export default function TestimonialsSection({ brief }: TestimonialsSectionProps) {
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
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: primary }}
            >
              What People Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Don&apos;t Take Our Word For It
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {brief.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <Quote
                  size={32}
                  className="absolute top-6 right-6 opacity-10"
                  style={{ color: primary }}
                />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={16}
                      fill={si < t.rating ? primary : "#e5e5e5"}
                      style={{ color: si < t.rating ? primary : "#e5e5e5" }}
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: primary }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">Google Review</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
