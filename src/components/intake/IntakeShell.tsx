"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useIntakeForm } from "@/hooks/useIntakeForm";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import StepName from "./StepName";
import StepVibe from "./StepVibe";
import StepDish from "./StepDish";
import StepLogistics from "./StepLogistics";
import GeneratingScreen from "@/components/generating/GeneratingScreen";

const slideVariants = {
  enter: { y: 20, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

export default function IntakeShell() {
  const router = useRouter();
  const form = useIntakeForm();
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);

  const steps = [
    <StepName key="name" data={form.data} setField={form.setField} error={form.error} />,
    <StepVibe key="vibe" data={form.data} setField={form.setField} error={form.error} />,
    <StepDish key="dish" data={form.data} setField={form.setField} error={form.error} />,
    <StepLogistics key="logistics" data={form.data} setField={form.setField} error={form.error} />,
  ];

  const handleNext = async () => {
    if (form.isLastStep) {
      if (!form.validate()) return;
      setIsGenerating(true);
      setGenError(null);

      try {
        const minDelay = new Promise((r) => setTimeout(r, 5000));
        const apiCall = fetch("/api/generate-brief", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form.data),
        }).then(async (res) => {
          if (!res.ok) throw new Error("Generation failed");
          return res.json();
        });

        const [result] = await Promise.all([apiCall, minDelay]);
        router.push(`/preview/${result.id}`);
      } catch {
        setGenError("Something went wrong in the kitchen. Let's try again.");
        setIsGenerating(false);
      }
    } else {
      form.nextStep();
    }
  };

  if (isGenerating) {
    return <GeneratingScreen error={genError} onRetry={() => { setGenError(null); handleNext(); }} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <a href="/" className="text-sm font-medium text-gray-900 tracking-tight">
            magical<span className="text-primary">.</span>
          </a>
          <span className="text-xs text-gray-300">Free draft</span>
        </div>
        <ProgressBar currentStep={form.step} totalSteps={form.totalSteps} />
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center px-6">
        <div className="max-w-xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={form.step}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {steps[form.step]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 py-8 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between">
          {form.isFirstStep ? (
            <Button variant="ghost" href="/">
              <ArrowLeft size={14} className="mr-1.5" />
              Back
            </Button>
          ) : (
            <Button variant="ghost" onClick={form.prevStep}>
              <ArrowLeft size={14} className="mr-1.5" />
              Back
            </Button>
          )}

          <Button onClick={handleNext} size="lg">
            {form.isLastStep ? (
              <>
                <Sparkles size={14} className="mr-1.5" />
                Generate My Site
              </>
            ) : (
              <>
                Next Step
                <ArrowRight size={14} className="ml-1.5" />
              </>
            )}
          </Button>
        </div>

        <p className="text-center text-xs text-gray-300 mt-5">
          {form.isLastStep
            ? "Takes about 30 seconds. No payment needed."
            : "Your info stays private. No spam, ever."}
        </p>
      </div>
    </div>
  );
}
