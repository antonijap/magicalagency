"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight } from "lucide-react";

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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[420px] z-50"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <Calendar className="text-primary" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  It&apos;s 80% cooked.
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Let&apos;s jump on a 15-min call to add the secret sauce
                  and launch it. No cost, no pressure.
                </p>

                {/* Google Calendar booking link */}
                <a
                  href="https://calendar.google.com/calendar/appointments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary-dark transition-colors text-sm w-full justify-center"
                >
                  <Calendar size={16} />
                  Book Your Free Call
                  <ArrowRight size={14} />
                </a>

                <p className="text-xs text-gray-300 mt-3 text-center">
                  15 minutes. That&apos;s all it takes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
