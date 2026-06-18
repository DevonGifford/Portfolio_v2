import { useEffect, useState } from "react";

/**
 * Creates typewriter-style animated text from a list of words.
 *
 * @param options - Typewriter animation options.
 * @param options.words - Words to type through in order.
 * @param options.loop - Whether the animation restarts after the final word.
 * @param options.typingSpeed - Delay between typed characters in milliseconds.
 * @param options.deletingSpeed - Delay between deleted characters in milliseconds.
 * @param options.pauseTime - Delay after a word is typed before deletion starts, in milliseconds.
 * @returns The current text and whether the hook is actively typing.
 */
export const useTypewriter = ({
  words,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: {
  words: readonly string[];
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
  }, [subIndex, index, deleting, words, loop, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    setText(words[index]?.substring(0, subIndex));
  }, [subIndex, index, words]);

  return { text, isTyping };
};
