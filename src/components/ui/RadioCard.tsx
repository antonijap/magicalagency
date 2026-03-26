"use client";

import { motion } from "framer-motion";
import { Sun, Wine, Zap, Heart, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Sun, Wine, Zap, Heart };

interface RadioCardProps {
  label: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}

export default function RadioCard({
  label,
  description,
  icon,
  selected,
  onClick,
  index,
}: RadioCardProps) {
  const Icon = iconMap[icon] || Heart;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
        selected
          ? "border-primary bg-primary-light shadow-sm"
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-2.5 rounded-lg ${
            selected ? "bg-primary text-white" : "bg-gray-50 text-gray-400"
          } transition-colors`}
        >
          <Icon size={22} />
        </div>
        <div>
          <p
            className={`font-semibold text-lg ${
              selected ? "text-primary" : "text-gray-800"
            }`}
          >
            {label}
          </p>
          <p className="text-gray-400 text-sm mt-0.5">{description}</p>
        </div>
      </div>
    </motion.button>
  );
}
