"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { GeneratedBrief } from "@/types";

interface MenuSectionProps {
  brief: GeneratedBrief;
}

export default function MenuSection({ brief }: MenuSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#E44332";
  const dark = brief.colorPalette[3]?.hex || "#1a1a1a";

  return (
    <section className="py-24 px-6" style={{ backgroundColor: dark }}>
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
              Our Menu
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              What&apos;s Cooking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {brief.menu.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.4 }}
              >
                <h3
                  className="text-lg font-bold uppercase tracking-wider mb-6 pb-3 border-b"
                  style={{ color: primary, borderColor: `${primary}40` }}
                >
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.items.map((item, ii) => (
                    <div key={ii} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">
                            {item.name}
                          </span>
                          {item.tag && (
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                              style={{ backgroundColor: primary }}
                            >
                              {item.tag === "Signature" && (
                                <Flame size={10} className="inline mr-0.5 -mt-0.5" />
                              )}
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-white font-semibold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
