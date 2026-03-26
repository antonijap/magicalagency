"use client";

import RadioCard from "@/components/ui/RadioCard";
import { VIBE_OPTIONS } from "@/lib/constants";
import { IntakeFormData } from "@/types";

interface StepProps {
  data: IntakeFormData;
  setField: <K extends keyof IntakeFormData>(key: K, value: IntakeFormData[K]) => void;
  error: string | null;
}

export default function StepVibe({ data, setField, error }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1.5">
        If your restaurant was a person, how would they dress?
      </h2>
      <p className="text-sm text-gray-400 mb-8">
        This sets the entire tone. Choose the one that feels right.
      </p>
      <div className="grid grid-cols-1 gap-2">
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
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
}
