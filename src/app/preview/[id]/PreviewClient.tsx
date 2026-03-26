"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Menu } from "lucide-react";
import { GeneratedBrief, IntakeFormData } from "@/types";
import HeroSection from "@/components/preview/HeroSection";
import AboutSection from "@/components/preview/AboutSection";
import MenuHighlight from "@/components/preview/MenuHighlight";
import SectionsPreview from "@/components/preview/SectionsPreview";
import BookingOverlay from "@/components/preview/BookingOverlay";

interface PreviewClientProps {
  formData: IntakeFormData;
  brief: GeneratedBrief;
}

export default function PreviewClient({ formData, brief }: PreviewClientProps) {
  const primary = brief.colorPalette[0]?.hex || "#E44332";
  const dark = brief.colorPalette[3]?.hex || "#1a1a1a";

  return (
    <div className="min-h-screen bg-white">
      {/* Agency banner — bold, visible */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="text-white text-center py-3 px-4 text-sm font-medium"
        style={{ backgroundColor: primary }}
      >
        This is a draft preview for <strong>{formData.restaurantName}</strong> — crafted by magical.
      </motion.div>

      {/* Real-looking site nav */}
      <header className="px-6 py-5 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight" style={{ color: dark }}>
            {formData.restaurantName}
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Menu</span>
            <span className="hover:text-gray-900 cursor-pointer">About</span>
            <span className="hover:text-gray-900 cursor-pointer">Contact</span>
            <button
              className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
              style={{ backgroundColor: primary }}
            >
              Reserve a Table
            </button>
          </nav>
          <button className="md:hidden text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Generated website sections */}
      <HeroSection brief={brief} formData={formData} />
      <AboutSection brief={brief} formData={formData} />
      <MenuHighlight brief={brief} formData={formData} />
      <SectionsPreview brief={brief} />

      {/* Footer — looks like a real restaurant site footer */}
      <footer className="py-16 px-6" style={{ backgroundColor: dark }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <h4 className="text-white text-lg font-bold mb-4">{formData.restaurantName}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {brief.aboutParagraphs[0]?.slice(0, 120)}...
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Visit Us</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-center gap-2"><MapPin size={14} /> {formData.location}</p>
                <p className="flex items-center gap-2"><Clock size={14} /> {formData.hours}</p>
                <p className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Hours</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{formData.hours}</p>
              <button
                className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: primary }}
              >
                Book a Table
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; 2026 {formData.restaurantName}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Website concept by <span style={{ color: primary }}>magical.</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Booking overlay */}
      <BookingOverlay primaryColor={primary} />
    </div>
  );
}
