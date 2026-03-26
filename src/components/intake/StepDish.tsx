"use client";

import Input from "@/components/ui/Input";
import { IntakeFormData } from "@/types";

interface StepProps {
  data: IntakeFormData;
  setField: <K extends keyof IntakeFormData>(
    key: K,
    value: IntakeFormData[K]
  ) => void;
  error: string | null;
}

export default function StepDish({ data, setField, error }: StepProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
        What&apos;s the one dish people travel across town for?
      </h2>
      <p className="text-gray-400 text-lg">
        We&apos;ll make this the hero of your site. The thing that makes
        mouths water before they even walk in.
      </p>
      <div className="pt-8">
        <Input
          label="Signature Dish"
          value={data.signatureDish}
          onChange={(v) => setField("signatureDish", v)}
          placeholder="e.g. Wood-fired Margherita with San Marzano tomatoes"
          error={error || undefined}
        />
      </div>
    </div>
  );
}
