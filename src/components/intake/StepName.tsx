"use client";

import Input from "@/components/ui/Input";
import { IntakeFormData } from "@/types";

interface StepProps {
  data: IntakeFormData;
  setField: <K extends keyof IntakeFormData>(key: K, value: IntakeFormData[K]) => void;
  error: string | null;
}

export default function StepName({ data, setField, error }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1.5">
        What&apos;s the name of your spot?
      </h2>
      <p className="text-sm text-gray-400 mb-8">
        The one on the sign. The one people tell their friends about.
      </p>
      <Input
        label="Restaurant name"
        value={data.restaurantName}
        onChange={(v) => setField("restaurantName", v)}
        placeholder="e.g. Mama Rosa's Kitchen"
        error={error || undefined}
      />
    </div>
  );
}
