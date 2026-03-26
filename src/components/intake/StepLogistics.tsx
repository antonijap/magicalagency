"use client";

import Input from "@/components/ui/Input";
import { IntakeFormData } from "@/types";

interface StepProps {
  data: IntakeFormData;
  setField: <K extends keyof IntakeFormData>(key: K, value: IntakeFormData[K]) => void;
  error: string | null;
}

export default function StepLogistics({ data, setField, error }: StepProps) {
  const locationError = error && !data.location.trim() ? error : undefined;
  const hoursError = error && data.location.trim() && !data.hours.trim() ? error : undefined;

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1.5">
        Where can people find you, and when are the doors open?
      </h2>
      <p className="text-sm text-gray-400 mb-8">
        The practical stuff. Don&apos;t worry, we&apos;ll make it look beautiful.
      </p>
      <div className="space-y-6">
        <Input
          label="Address / location"
          value={data.location}
          onChange={(v) => setField("location", v)}
          placeholder="e.g. 123 Main St, Brooklyn, NY"
          error={locationError}
        />
        <Input
          label="Opening hours"
          value={data.hours}
          onChange={(v) => setField("hours", v)}
          placeholder="e.g. Tue-Sun, 11am-10pm"
          error={hoursError}
        />
      </div>
    </div>
  );
}
