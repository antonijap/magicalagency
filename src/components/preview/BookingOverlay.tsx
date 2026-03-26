"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function BookingOverlay() {
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
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed bottom-5 right-5 left-5 md:left-auto md:w-[380px] z-50"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-5 relative">
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={14} />
            </button>

            <p className="text-sm font-semibold text-gray-900 mb-1">
              It&apos;s 80% cooked.
            </p>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Let&apos;s jump on a 15-min call to add the secret sauce and launch it.
            </p>

            <a
              href="https://calendar.google.com/calendar/appointments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
            >
              Book Your Free Call
              <ArrowRight size={14} />
            </a>

            <p className="text-xs text-gray-300 mt-3 text-center">
              No cost, no pressure. 15 minutes.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
