"use client";

import { useTypewriter } from "@/lib/useTypewriter";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  /** Words to rotate through in the typewriter animation. */
  words: readonly string[];
  /** Extra classes applied to the wrapper. */
  className?: string;
};

/**
 * Renders rotating typewriter text for a list of words.
 *
 * @param props.words - Words to rotate through in the typewriter animation.
 * @param props.className - Extra classes applied to the wrapper.
 * @returns A typewriter text element.
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
