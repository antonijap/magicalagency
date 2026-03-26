"use client";

import { motion } from "framer-motion";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: "text" | "email";
  multiline?: boolean;
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  multiline = false,
}: InputProps) {
  const inputClasses =
    "w-full bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none py-3 text-xl text-gray-800 placeholder:text-gray-300 transition-colors";

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <label className="block text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={2}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
          autoFocus
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
