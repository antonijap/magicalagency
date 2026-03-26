"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChefHat, AlertCircle } from "lucide-react";
import { GENERATING_MESSAGES } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface GeneratingScreenProps {
  error: string | null;
  onRetry: () => void;
}

export default function GeneratingScreen({
  error,
  onRetry,
}: GeneratingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((i) =>
        i < GENERATING_MESSAGES.length - 1 ? i + 1 : i
      );
    }, 1800);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 1.5, 92));
    }, 100);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-primary" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{error}</h2>
          <p className="text-gray-400 mb-8">
            Even the best chefs have off moments.
          </p>
          <Button onClick={onRetry}>Try Again</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg w-full">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-8"
        >
          <ChefHat className="text-primary" size={36} />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-3">
          Cooking up something special...
        </h2>

        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-lg text-gray-400 mb-10"
        >
          {GENERATING_MESSAGES[messageIndex]}
        </motion.p>

        {/* Progress bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-xs text-gray-300 mt-3">
            This usually takes about 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
}
