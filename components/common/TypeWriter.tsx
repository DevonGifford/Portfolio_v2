"use client";

import { useTypewriter } from "@/utils/TypeWriter";

type TypewriterProps = {
  words: string[];
  className?: string;
};

export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const { text, isTyping } = useTypewriter({ words });

  return (
    <span className={`whitespace-nowrap ${className}`}>
      {text}
      <span className={`ml-1 ${isTyping ? "animate-blink" : ""}`}>|</span>
    </span>
  );
}
