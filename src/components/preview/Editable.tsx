"use client";

import { useState, useRef, useEffect } from "react";
import { Pencil } from "lucide-react";

interface EditableProps {
  value: string;
  onChange: (value: string) => void;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
}

export default function Editable({
  value,
  onChange,
  as: Tag = "p",
  className = "",
  style,
}: EditableProps) {
  const [editing, setEditing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
      // Place cursor at end
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [editing]);

  const handleBlur = () => {
    setEditing(false);
    if (ref.current) {
      const newValue = ref.current.innerText.trim();
      if (newValue !== value) {
        onChange(newValue);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && Tag !== "p") {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
  };

  return (
    <span
      className="relative inline-block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Tag
        ref={ref as never}
        className={`${className} ${editing ? "outline-none ring-2 ring-blue-400/30 rounded px-1 -mx-1" : ""} ${!editing ? "cursor-pointer" : ""}`}
        style={style}
        contentEditable={editing}
        suppressContentEditableWarning
        onClick={() => !editing && setEditing(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        {value}
      </Tag>
      {hovered && !editing && (
        <span className="absolute -top-2 -right-6 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg opacity-80">
          <Pencil size={10} className="text-white" />
        </span>
      )}
    </span>
  );
}
