"use client";

import { motion } from "framer-motion";
import { GeneratedBrief } from "@/types";

interface PaletteStripProps {
  brief: GeneratedBrief;
}

export default function PaletteStrip({ brief }: PaletteStripProps) {
  return (
    <section className="py-12 px-6 border-y border-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium text-gray-300 uppercase tracking-wider mb-4">
            Your Brand Colors
          </p>
          <div className="flex gap-3 flex-wrap">
            {brief.colorPalette.map((color, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div
                  className="w-8 h-8 rounded-lg shadow-sm"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="text-xs font-medium text-gray-600">
                    {color.name}
                  </p>
                  <p className="text-xs text-gray-300">{color.hex}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
