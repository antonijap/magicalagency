"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush, X, Sun, Wine, Zap, Heart, Check } from "lucide-react";

interface DesignToolbarProps {
  currentVibe: string;
  onVibeChange: (vibe: string) => void;
  primaryColor: string;
}

const vibes = [
  { value: "casual", label: "Casual & Comfy", icon: Sun, preview: "Rounded, bright, friendly" },
  { value: "formal", label: "Black Tie", icon: Wine, preview: "Dark, elegant, refined" },
  { value: "trendy", label: "Trendy & Loud", icon: Zap, preview: "Bold, modern, high-contrast" },
  { value: "traditional", label: "Traditional", icon: Heart, preview: "Serif, warm, timeless" },
];

export default function DesignToolbar({
  currentVibe,
  onVibeChange,
  primaryColor,
}: DesignToolbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed top-20 right-4 z-[60] w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        {open ? (
          <X size={18} className="text-gray-600" />
        ) : (
          <Paintbrush size={18} className="text-gray-600" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-36 right-4 z-[60] w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Change Design Style
              </p>
              <p className="text-[11px] text-gray-300 mt-1">
                Pick a vibe — the whole page adapts instantly
              </p>
            </div>

            <div className="p-2">
              {vibes.map((vibe) => {
                const Icon = vibe.icon;
                const isActive = currentVibe === vibe.value;

                return (
                  <button
                    key={vibe.value}
                    onClick={() => {
                      onVibeChange(vibe.value);
                    }}
                    className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-colors ${
                      isActive ? "bg-gray-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? "text-white" : "bg-gray-100 text-gray-400"
                      }`}
                      style={isActive ? { backgroundColor: primaryColor } : {}}
                    >
                      {isActive ? <Check size={14} /> : <Icon size={14} />}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                        {vibe.label}
                      </p>
                      <p className="text-[11px] text-gray-400">{vibe.preview}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 border-t border-gray-100 bg-gray-50">
              <p className="text-[10px] text-gray-400 text-center">
                Colors, fonts, and photos are refined on our call
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
