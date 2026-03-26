"use client";

import Input from "@/components/ui/Input";
import { IntakeFormData } from "@/types";

interface StepProps {
  data: IntakeFormData;
  setField: <K extends keyof IntakeFormData>(key: K, value: IntakeFormData[K]) => void;
  error: string | null;
}

export default function StepDish({ data, setField, error }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1.5">
        What&apos;s the one dish people travel across town for?
      </h2>
      <p className="text-sm text-gray-400 mb-8">
        We&apos;ll make this the hero of your site. The thing that makes mouths water.
      </p>
      <Input
        label="Signature dish"
        value={data.signatureDish}
        onChange={(v) => setField("signatureDish", v)}
        placeholder="e.g. Wood-fired Margherita with San Marzano tomatoes"
        error={error || undefined}
      />
    </div>
  );
}
