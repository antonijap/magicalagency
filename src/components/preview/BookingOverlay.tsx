"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

interface BookingOverlayProps {
  primaryColor: string;
}

export default function BookingOverlay({ primaryColor }: BookingOverlayProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto md:w-[440px] z-50"
        >
          <div
            className="p-6 md:rounded-2xl shadow-2xl relative text-white"
            style={{ backgroundColor: primaryColor }}
          >
            {/* Close */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-white" size={22} />
              </div>
              <div className="flex-1 pr-6">
                <h3 className="font-bold text-xl mb-1">
                  It&apos;s 80% cooked.
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Let&apos;s jump on a quick 15-min call to add the secret sauce,
                  plug in your photos, and launch it live.
                </p>

                <a
                  href="https://calendar.app.google/WsdFZ68XWkBMoWwS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white font-bold px-6 py-3 rounded-xl text-sm w-full justify-center transition-transform hover:scale-[1.02]"
                  style={{ color: primaryColor }}
                >
                  Book Your Free Call
                  <ArrowRight size={16} />
                </a>

                <p className="text-white/50 text-xs mt-3 text-center">
                  Free &middot; No obligation &middot; 15 minutes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
