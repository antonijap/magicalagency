"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Menu } from "lucide-react";
import { GeneratedBrief, IntakeFormData } from "@/types";
import HeroSection from "@/components/preview/HeroSection";
import AboutSection from "@/components/preview/AboutSection";
import MenuSection from "@/components/preview/MenuSection";
import TestimonialsSection from "@/components/preview/TestimonialsSection";
import BookingOverlay from "@/components/preview/BookingOverlay";

interface PreviewClientProps {
  formData: IntakeFormData;
  brief: GeneratedBrief;
}

export default function PreviewClient({ formData, brief }: PreviewClientProps) {
  const primary = brief.colorPalette[0]?.hex || "#8B4513";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Agency banner */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="text-white text-center py-2.5 px-4 text-xs tracking-wider uppercase font-sans"
        style={{ backgroundColor: primary }}
      >
        Draft preview for <strong>{formData.restaurantName}</strong> — by magical.
      </motion.div>

      {/* Nav — minimal, elegant */}
      <header className="px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button className="text-gray-800 md:hidden">
            <Menu size={22} />
          </button>
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-gray-500 font-sans">
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Menu</span>
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Story</span>
          </nav>

          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 tracking-tight">
              {formData.restaurantName}
            </h2>
            {brief.tagline && (
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1 font-sans">
                {brief.tagline}
              </p>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-gray-500 font-sans">
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Contact</span>
            <a
              href="#reserve"
              className="px-5 py-2.5 text-white text-xs uppercase tracking-[0.15em] font-sans transition-colors"
              style={{ backgroundColor: primary }}
            >
              Reserve
            </a>
          </nav>
          <a
            href="#reserve"
            className="md:hidden text-xs uppercase tracking-[0.15em] font-sans px-4 py-2 text-white"
            style={{ backgroundColor: primary }}
          >
            Reserve
          </a>
        </div>
      </header>

      <HeroSection brief={brief} formData={formData} />
      <AboutSection brief={brief} formData={formData} />
      <MenuSection brief={brief} />
      <TestimonialsSection brief={brief} />

      {/* CTA — full-width dark band */}
      <section id="reserve" className="py-32 px-6 bg-[#141414] text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-sans mb-6">
          Reservations
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Join Us for Dinner
        </h2>
        <p className="text-gray-400 font-sans text-sm max-w-md mx-auto mb-10 leading-relaxed">
          {formData.hours} &middot; {formData.location}
        </p>
        <a
          href="#reserve"
          className="inline-block px-10 py-4 text-white text-xs uppercase tracking-[0.2em] font-sans border border-white/30 hover:bg-white hover:text-[#141414] transition-colors"
        >
          Book a Table
        </a>
      </section>

      {/* Footer — minimal, elegant */}
      <footer className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-3xl text-white mb-3">
            {formData.restaurantName}
          </h3>
          {brief.tagline && (
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-sans mb-10">
              {brief.tagline}
            </p>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-400 font-sans mb-10">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {formData.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {formData.hours}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> (555) 123-4567
            </span>
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
    </div>
  );
}
