"use client";

import { useTypewriter } from "@/utils/TypeWriter";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  words: readonly string[];
  className?: string;
};

export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const { text, isTyping } = useTypewriter({ words });

  return (
    <span className={cn("whitespace-nowrap", className)}>
      {text}
      <span className={cn("ml-1", isTyping && "animate-blink")}>|</span>
    </span>
  );
}
