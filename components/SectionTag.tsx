import React from "react";

interface SectionTagProps {
  text: string;
}

export default function SectionTag({ text }: SectionTagProps) {
  return (
    <span className="font-spacegrotesk text-xs uppercase tracking-tag text-lime font-semibold block mb-4">
      {text}
    </span>
  );
}
