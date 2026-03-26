"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Menu } from "lucide-react";
import { GeneratedBrief, IntakeFormData } from "@/types";
import { getTheme } from "@/lib/themes";
import HeroSection from "@/components/preview/HeroSection";
import AboutSection from "@/components/preview/AboutSection";
import MenuSection from "@/components/preview/MenuSection";
import TestimonialsSection from "@/components/preview/TestimonialsSection";
import BookingOverlay from "@/components/preview/BookingOverlay";
import DesignToolbar from "@/components/preview/DesignToolbar";

interface PreviewClientProps {
  formData: IntakeFormData;
  brief: GeneratedBrief;
}

export default function PreviewClient({ formData, brief }: PreviewClientProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";
  const [activeVibe, setActiveVibe] = useState(formData.vibe);
  const t = getTheme(activeVibe);

  return (
    <div className="min-h-screen" style={{ backgroundColor: t.pageBg }}>
      {/* Agency banner */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="text-white text-center py-2.5 px-4 text-xs tracking-wider uppercase font-sans"
        style={{ backgroundColor: primary }}
      >
        Draft preview for <strong>{formData.restaurantName}</strong> — by magical.
      </motion.div>

      {/* Nav — adapts to vibe */}
      <header className="px-6 py-6" style={{ backgroundColor: t.pageBg }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {t.navStyle === "centered" ? (
            <>
              <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-sans" style={{ color: t.mood === "dark" ? "#888" : "#999" }}>
                <span className="hover:opacity-70 cursor-pointer transition-opacity">Menu</span>
                <span className="hover:opacity-70 cursor-pointer transition-opacity">Story</span>
              </nav>
              <div className="text-center">
                <h2 className={`${t.headingFont} text-2xl md:text-3xl tracking-tight ${t.headingColor}`}>
                  {formData.restaurantName}
                </h2>
                {brief.tagline && (
                  <p className={`text-[10px] uppercase ${t.labelTracking} mt-1 font-sans ${t.mutedColor}`}>
                    {brief.tagline}
                  </p>
                )}
              </div>
              <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-sans" style={{ color: t.mood === "dark" ? "#888" : "#999" }}>
                <span className="hover:opacity-70 cursor-pointer transition-opacity">Contact</span>
                <a
                  href="#reserve"
                  className={`px-5 py-2.5 text-white text-xs uppercase tracking-[0.15em] font-sans ${t.buttonRadius}`}
                  style={{ backgroundColor: primary }}
                >
                  Reserve
                </a>
              </nav>
            </>
          ) : (
            <>
              <div>
                <h2 className={`${t.headingFont} text-2xl font-bold tracking-tight ${t.headingColor}`}>
                  {formData.restaurantName}
                </h2>
                {brief.tagline && (
                  <p className={`text-[10px] uppercase ${t.labelTracking} mt-0.5 font-sans ${t.mutedColor}`}>
                    {brief.tagline}
                  </p>
                )}
              </div>
              <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-sans" style={{ color: t.mood === "dark" ? "#888" : "#666" }}>
                <span className="hover:opacity-70 cursor-pointer transition-opacity">Menu</span>
                <span className="hover:opacity-70 cursor-pointer transition-opacity">About</span>
                <span className="hover:opacity-70 cursor-pointer transition-opacity">Contact</span>
                <a
                  href="#reserve"
                  className={`px-5 py-2.5 text-white text-xs uppercase tracking-[0.15em] font-sans ${t.buttonRadius}`}
                  style={{ backgroundColor: primary }}
                >
                  Reserve
                </a>
              </nav>
            </>
          )}
          <button className={`md:hidden ${t.headingColor}`}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      <HeroSection brief={brief} formData={formData} theme={t} />
      <AboutSection brief={brief} formData={formData} theme={t} />
      <MenuSection brief={brief} theme={t} />
      <TestimonialsSection brief={brief} theme={t} />

      {/* CTA band */}
      <section id="reserve" className={`${t.sectionPadding} px-6 text-center`} style={{ backgroundColor: t.mood === "dark" ? "#0a0a0a" : "#141414" }}>
        <p className={`text-xs uppercase ${t.labelTracking} font-sans mb-6`} style={{ color: primary }}>
          Reservations
        </p>
        <h2 className={`${t.headingFont} text-4xl md:text-5xl text-white mb-6`}>
          Join Us
        </h2>
        <p className="text-gray-500 font-sans text-sm max-w-md mx-auto mb-10 leading-relaxed">
          {formData.hours} &middot; {formData.location}
        </p>
        <a
          href="#reserve"
          className={`inline-block px-10 py-4 text-xs uppercase tracking-[0.2em] font-sans border transition-colors ${t.buttonRadius} ${
            t.buttonStyle === "filled"
              ? "text-white"
              : "text-white border-white/30 hover:bg-white hover:text-[#141414]"
          }`}
          style={t.buttonStyle === "filled" ? { backgroundColor: primary } : undefined}
        >
          Book a Table
        </a>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6" style={{ backgroundColor: t.footerBg }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className={`${t.headingFont} text-3xl text-white mb-3`}>
            {formData.restaurantName}
          </h3>
          {brief.tagline && (
            <p className={`text-xs uppercase ${t.labelTracking} text-gray-600 font-sans mb-10`}>
              {brief.tagline}
            </p>
          )}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-500 font-sans mb-10">
            <span className="flex items-center gap-2"><MapPin size={14} /> {formData.location}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {formData.hours}</span>
            <span className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</span>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-gray-600 font-sans">
              &copy; 2026 {formData.restaurantName} &middot; Website concept by{" "}
              <span style={{ color: primary }}>magical.</span>
            </p>
          </div>
        </div>
      </footer>

      <BookingOverlay primaryColor={primary} />
      <DesignToolbar
        currentVibe={activeVibe}
        onVibeChange={setActiveVibe}
        primaryColor={primary}
      />
    </div>
  );
}
