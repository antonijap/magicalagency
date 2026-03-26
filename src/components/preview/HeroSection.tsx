"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { VibeTheme } from "@/lib/themes";
import { EditableContent } from "@/hooks/useEditableBrief";
import Editable from "./Editable";

interface HeroSectionProps {
  content: EditableContent;
  edit: { set: (key: keyof EditableContent, value: string) => void };
  theme: VibeTheme;
  primaryColor: string;
  location: string;
}

export default function HeroSection({ content: c, edit, theme: t, primaryColor: primary, location }: HeroSectionProps) {
  return (
    <section className={`relative ${t.heroHeight} flex items-center overflow-hidden`} style={{ backgroundColor: t.heroBg }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${primary}30 0%, ${t.heroBg} 50%, ${primary}15 100%)` }} />
      <div className={`absolute inset-0 ${t.heroOverlay}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white/15 text-sm font-sans uppercase tracking-[0.3em]">Your hero photograph here</p>
      </div>

      <div className={`relative z-10 px-6 w-full max-w-6xl mx-auto ${t.heroAlign === "center" ? "text-center" : "text-left"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={t.heroAlign === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"}
        >
          <p className={`text-xs uppercase ${t.labelTracking} text-white/50 font-sans mb-6`}>{location}</p>

          <Editable
            value={c.heroHeadline}
            onChange={(v) => edit.set("heroHeadline", v)}
            as="h1"
            className={`${t.headingFont} text-white leading-[1.05] mb-6 ${t.mood === "bold" ? "text-6xl md:text-8xl lg:text-9xl font-black uppercase" : "text-5xl md:text-7xl lg:text-8xl"}`}
          />

          <Editable
            value={c.heroSubheadline}
            onChange={(v) => edit.set("heroSubheadline", v)}
            as="p"
            className="text-lg md:text-xl text-white/60 font-sans font-light max-w-xl leading-relaxed mb-12"
            style={t.heroAlign === "center" ? { margin: "0 auto 3rem" } : {}}
          />

          <a href="#reserve" className={`inline-block px-10 py-4 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 ${t.buttonRadius} ${t.buttonStyle === "filled" || t.buttonStyle === "rounded" ? "text-white hover:opacity-90" : "text-white border border-white/40 hover:bg-white hover:text-[#1a1a1a]"}`} style={t.buttonStyle === "filled" || t.buttonStyle === "rounded" ? { backgroundColor: primary } : undefined}>
            Reserve a Table
          </a>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown size={20} className="text-white/20" />
      </motion.div>
    </section>
  );
}
