"use client";

import { motion } from "framer-motion";
import { GeneratedBrief } from "@/types";

interface MenuSectionProps {
  brief: GeneratedBrief;
}

export default function MenuSection({ brief }: MenuSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <section className="py-32 md:py-40 px-6 bg-[#141414]">
      <div className="max-w-3xl mx-auto">
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
              The Menu
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              A Taste of What Awaits
            </h2>
          </div>

          <div className="space-y-20">
            {brief.menu.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="text-center"
              >
                {/* Category header */}
                <div className="flex items-center justify-center gap-6 mb-10">
                  <div className="h-px flex-1 max-w-[60px] bg-white/20" />
                  <h3
                    className="text-xs uppercase tracking-[0.3em] font-sans font-semibold"
                    style={{ color: primary }}
                  >
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 max-w-[60px] bg-white/20" />
                </div>

                {/* Menu items — elegant centered layout */}
                <div className="space-y-8">
                  {category.items.map((item, ii) => (
                    <div key={ii} className="relative">
                      {/* Dish name + price */}
                      <div className="flex items-baseline justify-center gap-4">
                        <span className="font-serif text-xl text-white">
                          {item.name}
                        </span>
                        {item.tag === "Signature" && (
                          <span
                            className="text-[9px] uppercase tracking-[0.15em] font-sans px-2 py-0.5 text-white rounded-sm"
                            style={{ backgroundColor: primary }}
                          >
                            Signature
                          </span>
                        )}
                        <span className="text-sm text-white/50 font-sans">
                          {item.price}
                        </span>
                      </div>
                      {/* Description */}
                      <p className="text-sm text-white/40 font-sans font-light mt-1.5 max-w-md mx-auto leading-relaxed">
                        {item.description}
                      </p>
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
