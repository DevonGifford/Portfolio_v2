"use client";

import { useTypewriter } from "@/utils/TypeWriter";
import React from "react";

type TypewriterProps = {
  words: string[];
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({ words, className = "" }) => {
  const { text, isTyping } = useTypewriter({ words });

  return (
    <span className={`whitespace-nowrap ${className}`}>
      {text}
      <span className={`ml-1 ${isTyping ? "animate-blink" : ""}`}>|</span>
    </span>
  );
};

export default Typewriter;
