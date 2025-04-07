import { useEffect, useState } from "react";

export const useTypewriter = ({
  words,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (index >= words.length) {
      if (!loop) return;
      setIndex(0);
    }

    if (subIndex === words[index]?.length + 1 && !deleting) {
      setIsTyping(false);
      setTimeout(() => setDeleting(true), pauseTime);

      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      setIsTyping(true);

      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(words[index]?.substring(0, subIndex));
  }, [subIndex, index, words]);

  return { text, isTyping };
};
