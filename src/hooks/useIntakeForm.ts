"use client";

import { useState, useCallback } from "react";
import { IntakeFormData } from "@/types";

const TOTAL_STEPS = 4;

const initialData: IntakeFormData = {
  restaurantName: "",
  vibe: "",
  signatureDish: "",
  location: "",
  hours: "",
};

const validators: Record<number, (data: IntakeFormData) => string | null> = {
  0: (d) =>
    d.restaurantName.trim() ? null : "Every great spot needs a name",
  1: (d) => (d.vibe ? null : "Pick a vibe — we'll match the design to it"),
  2: (d) =>
    d.signatureDish.trim() ? null : "What's the star of the menu?",
  3: (d) => {
    if (!d.location.trim()) return "Where can hungry people find you?";
    if (!d.hours.trim()) return "When are the doors open?";
    return null;
  },
};

export function useIntakeForm() {
  const [data, setData] = useState<IntakeFormData>(initialData);
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const setField = useCallback(
    <K extends keyof IntakeFormData>(key: K, value: IntakeFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
      setError(null);
    },
    []
  );

  const nextStep = useCallback((): boolean => {
    const validator = validators[step];
    const err = validator ? validator(data) : null;
    if (err) {
      setError(err);
      return false;
    }
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      setError(null);
    }
    return true;
  }, [step, data]);

  const prevStep = useCallback(() => {
    if (step > 0) {
      setStep((s) => s - 1);
      setError(null);
    }
  }, [step]);

  const validate = useCallback((): boolean => {
    const validator = validators[step];
    const err = validator ? validator(data) : null;
    if (err) {
      setError(err);
      return false;
    }
    return true;
  }, [step, data]);

  return {
    data,
    step,
    error,
    setField,
    nextStep,
    prevStep,
    validate,
    isFirstStep: step === 0,
    isLastStep: step === TOTAL_STEPS - 1,
    totalSteps: TOTAL_STEPS,
  };
}
