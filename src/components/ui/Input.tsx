"use client";

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
    "w-full bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 outline-none py-2 text-base text-gray-900 placeholder:text-gray-300 transition-colors";

  return (
    <div className="w-full">
      <label className="block text-xs text-gray-400 mb-2">{label}</label>
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
        <p className="text-red-500 text-xs mt-1.5">{error}</p>
      )}
    </div>
  );
}
