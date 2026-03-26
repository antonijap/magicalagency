"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { VibeTheme } from "@/lib/themes";
import { EditableContent } from "@/hooks/useEditableBrief";
import { MenuItem } from "@/types";
import Editable from "./Editable";

interface MenuSectionProps {
  content: EditableContent;
  edit: {
    setMenuItem: (cat: number, item: number, field: keyof MenuItem, value: string) => void;
    setMenuCategory: (cat: number, value: string) => void;
  };
  theme: VibeTheme;
  primaryColor: string;
}

export default function MenuSection({ content: c, edit, theme: t, primaryColor: primary }: MenuSectionProps) {
  const isCenter = t.menuAlign === "center";

  return (
    <section className={`${t.sectionPadding} px-6`} style={{ backgroundColor: t.menuBg }}>
      <div className={isCenter ? "max-w-3xl mx-auto" : "max-w-5xl mx-auto"}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <div className={`mb-20 ${isCenter ? "text-center" : ""}`}>
            <p className={`text-xs uppercase ${t.labelTracking} font-sans mb-6`} style={{ color: primary }}>The Menu</p>
            <h2 className={`${t.headingFont} text-4xl md:text-5xl text-white`}>
              {t.mood === "bold" ? "WHAT'S COOKING" : "A Taste of What Awaits"}
            </h2>
          </div>

          {isCenter ? (
            <div className="space-y-20">
              {c.menu.map((category, ci) => (
                <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1, duration: 0.5 }} className="text-center">
                  <div className="flex items-center justify-center gap-6 mb-10">
                    <div className="h-px flex-1 max-w-[60px] bg-white/20" />
                    <Editable value={category.category} onChange={(v) => edit.setMenuCategory(ci, v)} as="h3" className={`text-xs uppercase ${t.labelTracking} font-sans font-semibold`} style={{ color: primary }} />
                    <div className="h-px flex-1 max-w-[60px] bg-white/20" />
                  </div>
                  <div className="space-y-8">
                    {category.items.map((item, ii) => (
                      <div key={ii}>
                        <div className="flex items-baseline justify-center gap-4 flex-wrap">
                          <Editable value={item.name} onChange={(v) => edit.setMenuItem(ci, ii, "name", v)} as="span" className={`${t.headingFont} text-xl text-white`} />
                          {item.tag === "Signature" && (
                            <span className={`text-[9px] uppercase tracking-[0.15em] font-sans px-2 py-0.5 text-white ${t.cardRadius}`} style={{ backgroundColor: primary }}>
                              <Flame size={9} className="inline mr-0.5 -mt-0.5" />Signature
                            </span>
                          )}
                          <Editable value={item.price} onChange={(v) => edit.setMenuItem(ci, ii, "price", v)} as="span" className="text-sm text-white/40 font-sans" />
                        </div>
                        <Editable value={item.description} onChange={(v) => edit.setMenuItem(ci, ii, "description", v)} as="p" className="text-sm text-white/35 font-sans font-light mt-1.5 max-w-md mx-auto" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
              {c.menu.map((category, ci) => (
                <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1, duration: 0.4 }}>
                  <Editable value={category.category} onChange={(v) => edit.setMenuCategory(ci, v)} as="h3" className={`text-sm uppercase ${t.labelTracking} font-sans font-bold mb-6 pb-3 border-b border-white/10`} style={{ color: primary }} />
                  <div className="space-y-5">
                    {category.items.map((item, ii) => (
                      <div key={ii} className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Editable value={item.name} onChange={(v) => edit.setMenuItem(ci, ii, "name", v)} as="span" className="text-white font-semibold font-sans" />
                            {item.tag && (
                              <span className={`text-[9px] font-bold px-2 py-0.5 text-white font-sans ${t.buttonRadius}`} style={{ backgroundColor: primary }}>
                                {item.tag === "Signature" && <Flame size={9} className="inline mr-0.5 -mt-0.5" />}{item.tag}
                              </span>
                            )}
                          </div>
                          <Editable value={item.description} onChange={(v) => edit.setMenuItem(ci, ii, "description", v)} as="p" className="text-gray-500 text-sm mt-0.5 font-sans" />
                        </div>
                        <Editable value={item.price} onChange={(v) => edit.setMenuItem(ci, ii, "price", v)} as="span" className="text-white font-semibold text-sm font-sans whitespace-nowrap" />
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
