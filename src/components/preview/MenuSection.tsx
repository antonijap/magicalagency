"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { GeneratedBrief } from "@/types";
import { VibeTheme } from "@/lib/themes";

interface MenuSectionProps {
  brief: GeneratedBrief;
  theme: VibeTheme;
}

export default function MenuSection({ brief, theme: t }: MenuSectionProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";
  const isCenter = t.menuAlign === "center";

  return (
    <section className={`${t.sectionPadding} px-6`} style={{ backgroundColor: t.menuBg }}>
      <div className={isCenter ? "max-w-3xl mx-auto" : "max-w-5xl mx-auto"}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={`mb-20 ${isCenter ? "text-center" : ""}`}>
            <p
              className={`text-xs uppercase ${t.labelTracking} font-sans mb-6`}
              style={{ color: primary }}
            >
              The Menu
            </p>
            <h2 className={`${t.headingFont} text-4xl md:text-5xl text-white`}>
              {t.mood === "bold" ? "WHAT'S COOKING" : "A Taste of What Awaits"}
            </h2>
          </div>

          {isCenter ? (
            /* Centered elegant layout — formal & traditional */
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
                  <div className="flex items-center justify-center gap-6 mb-10">
                    <div className="h-px flex-1 max-w-[60px] bg-white/20" />
                    <h3
                      className={`text-xs uppercase ${t.labelTracking} font-sans font-semibold`}
                      style={{ color: primary }}
                    >
                      {category.category}
                    </h3>
                    <div className="h-px flex-1 max-w-[60px] bg-white/20" />
                  </div>

                  <div className="space-y-8">
                    {category.items.map((item, ii) => (
                      <div key={ii}>
                        <div className="flex items-baseline justify-center gap-4">
                          <span className={`${t.headingFont} text-xl text-white`}>
                            {item.name}
                          </span>
                          {item.tag === "Signature" && (
                            <span
                              className={`text-[9px] uppercase tracking-[0.15em] font-sans px-2 py-0.5 text-white ${t.cardRadius}`}
                              style={{ backgroundColor: primary }}
                            >
                              <Flame size={9} className="inline mr-0.5 -mt-0.5" />
                              Signature
                            </span>
                          )}
                          <span className="text-sm text-white/40 font-sans">{item.price}</span>
                        </div>
                        <p className="text-sm text-white/35 font-sans font-light mt-1.5 max-w-md mx-auto">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Two-column left-aligned — casual & trendy */
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
              {brief.menu.map((category, ci) => (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1, duration: 0.4 }}
                >
                  <h3
                    className={`text-sm uppercase ${t.labelTracking} font-sans font-bold mb-6 pb-3 border-b border-white/10`}
                    style={{ color: primary }}
                  >
                    {category.category}
                  </h3>
                  <div className="space-y-5">
                    {category.items.map((item, ii) => (
                      <div key={ii} className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-white font-semibold font-sans">{item.name}</span>
                            {item.tag && (
                              <span
                                className={`text-[9px] font-bold px-2 py-0.5 text-white font-sans ${t.buttonRadius}`}
                                style={{ backgroundColor: primary }}
                              >
                                {item.tag === "Signature" && <Flame size={9} className="inline mr-0.5 -mt-0.5" />}
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-500 text-sm mt-0.5 font-sans">{item.description}</p>
                        </div>
                        <span className="text-white font-semibold text-sm font-sans whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
