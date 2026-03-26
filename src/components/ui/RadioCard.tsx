"use client";

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
}: RadioCardProps) {
  const Icon = iconMap[icon] || Heart;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors ${
        selected
          ? "border-gray-900 bg-gray-50"
          : "border-gray-150 bg-white hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={18}
          className={selected ? "text-gray-900" : "text-gray-300"}
        />
        <div>
          <p
            className={`text-sm font-medium ${
              selected ? "text-gray-900" : "text-gray-700"
            }`}
          >
            {label}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        </div>
      </div>
    </button>
  );
}
