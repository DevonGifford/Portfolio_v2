"use client";

import { useTypewriter } from "@/lib/animation/useTypewriter";
import { cn } from "@/lib/utils/cn";

type TypewriterProps = {
  words: readonly string[];
  className?: string;
};

/**
 * Renders rotating typewriter text for a list of words.
 *
 * @param props.words - Words to rotate through, one at a time.
 * @param props.className - Extra classes applied to the wrapper `<span>`.
 * @returns Animated text with a blinking cursor.
 */
export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const { text, isTyping } = useTypewriter({ words });

  return (
    <span className={cn("whitespace-nowrap", className)}>
      {text}
      <span className={cn("ml-1", isTyping && "animate-blink")}>|</span>
    </span>
  );
}
