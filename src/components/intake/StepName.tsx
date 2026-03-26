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

export default function StepName({ data, setField, error }: StepProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
        What&apos;s the name of your spot?
      </h2>
      <p className="text-gray-400 text-lg">
        The one on the sign. The one people tell their friends about.
      </p>
      <div className="pt-8">
        <Input
          label="Restaurant Name"
          value={data.restaurantName}
          onChange={(v) => setField("restaurantName", v)}
          placeholder="e.g. Mama Rosa's Kitchen"
          error={error || undefined}
        />
      </div>
    </div>
  );
}
