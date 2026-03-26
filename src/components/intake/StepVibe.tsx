"use client";

import RadioCard from "@/components/ui/RadioCard";
import { VIBE_OPTIONS } from "@/lib/constants";
import { IntakeFormData } from "@/types";
import { motion } from "framer-motion";

interface StepProps {
  data: IntakeFormData;
  setField: <K extends keyof IntakeFormData>(
    key: K,
    value: IntakeFormData[K]
  ) => void;
  error: string | null;
}

export default function StepVibe({ data, setField, error }: StepProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
        If your restaurant was a person, how would they dress?
      </h2>
      <p className="text-gray-400 text-lg">
        This sets the entire tone. Choose the one that feels right.
      </p>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
        {VIBE_OPTIONS.map((option, i) => (
          <RadioCard
            key={option.value}
            label={option.label}
            description={option.description}
            icon={option.icon}
            selected={data.vibe === option.value}
            onClick={() => setField("vibe", option.value)}
            index={i}
          />
        ))}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
