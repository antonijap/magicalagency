"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GENERATING_MESSAGES } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface GeneratingScreenProps {
  error: string | null;
  onRetry: () => void;
}

export default function GeneratingScreen({ error, onRetry }: GeneratingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((i) => (i < GENERATING_MESSAGES.length - 1 ? i + 1 : i));
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
        <div className="text-center max-w-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{error}</h2>
          <p className="text-sm text-gray-400 mb-6">Even the best chefs have off moments.</p>
          <Button onClick={onRetry}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Cooking up something special...
        </h2>

        <motion.p
          key={messageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-400 mb-8"
        >
          {GENERATING_MESSAGES[messageIndex]}
        </motion.p>

        {/* Minimal progress bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-xs text-gray-300 mt-4">
            This usually takes about 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
}
