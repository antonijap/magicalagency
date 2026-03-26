"use client";

import { motion } from "framer-motion";
import { VibeTheme } from "@/lib/themes";
import { EditableContent } from "@/hooks/useEditableBrief";
import Editable from "./Editable";

interface AboutSectionProps {
  content: EditableContent;
  edit: { set: (key: keyof EditableContent, value: string) => void; setAboutParagraph: (i: number, v: string) => void };
  theme: VibeTheme;
  primaryColor: string;
}

export default function AboutSection({ content: c, edit, theme: t, primaryColor: primary }: AboutSectionProps) {
  return (
    <section className={`${t.sectionPadding} px-6`} style={{ backgroundColor: t.pageBg }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={t.heroAlign === "center" ? "text-center" : ""}
        >
          <p className={`text-xs uppercase ${t.labelTracking} font-sans mb-8`} style={{ color: primary }}>Our Story</p>
          <h2 className={`${t.headingFont} text-4xl md:text-5xl ${t.headingColor} mb-12 leading-tight`}>
            Welcome to {c.restaurantName}
          </h2>
          <div className={`w-16 h-px mb-12 ${t.heroAlign === "center" ? "mx-auto" : ""}`} style={{ backgroundColor: primary }} />

          <div className={`max-w-2xl space-y-6 ${t.heroAlign === "center" ? "mx-auto" : ""}`}>
            {c.aboutParagraphs.map((p, i) => (
              <Editable
                key={i}
                value={p}
                onChange={(v) => edit.setAboutParagraph(i, v)}
                as="p"
                className={`${t.bodyColor} text-base md:text-lg leading-[1.8] font-sans font-light`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-20"
        >
          <div className={`aspect-[4/5] ${t.cardRadius} flex items-center justify-center`} style={{ backgroundColor: t.mood === "dark" ? "#1a1a1a" : "#e8e4df" }}>
            <p className={`text-xs uppercase tracking-[0.2em] font-sans ${t.mood === "dark" ? "text-gray-600" : "text-gray-400"}`}>Interior photo</p>
          </div>
          <div className={`aspect-[4/5] ${t.cardRadius} flex items-center justify-center`} style={{ backgroundColor: t.mood === "dark" ? "#1a1a1a" : "#e8e4df" }}>
            <p className={`text-xs uppercase tracking-[0.2em] font-sans ${t.mood === "dark" ? "text-gray-600" : "text-gray-400"}`}>Signature dish photo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
