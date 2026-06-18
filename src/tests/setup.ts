import "@testing-library/jest-dom/vitest";

import { createElement, type ReactNode } from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

/** Props `motion` owns that must not reach the DOM as attributes. */
const MOTION_ONLY_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "variants",
  "whileHover",
  "whileTap",
  "whileInView",
  "whileFocus",
  "whileDrag",
  "viewport",
  "layout",
  "layoutId",
  "drag",
  "custom",
  "onAnimationStart",
  "onAnimationComplete",
]);

type MotionProps = Record<string, unknown> & { children?: ReactNode };

/**
 * Renders `motion.div` and friends as their plain DOM tag.
 *
 * Every section is `"use client"` + motion, so without this the suite would be
 * testing the animation library rather than the markup. `ref` is deliberately
 * *not* stripped: React 19 passes it as an ordinary prop, and `MobileMenu`
 * attaches one to a `motion.div`.
 */
function stripMotionProps(props: MotionProps): MotionProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => !MOTION_ONLY_PROPS.has(key))
  ) as MotionProps;
}

vi.mock("motion/react", () => {
  const motion = new Proxy({} as Record<string, unknown>, {
    get(_target, tag) {
      // Vitest probes the module for `then` / `__esModule`; only real tags render.
      if (typeof tag !== "string") return undefined;

      return function MotionMock({ children, ...props }: MotionProps) {
        return createElement(tag, stripMotionProps(props), children);
      };
    },
  });

  return {
    motion,
    AnimatePresence: ({ children }: { children?: ReactNode }) => children,
    MotionConfig: ({ children }: { children?: ReactNode }) => children,
    useReducedMotion: () => false,
  };
});

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: MotionProps & { src?: unknown; alt?: string }) => {
    const resolved = typeof src === "object" && src !== null ? (src as { src: string }).src : src;

    return createElement("img", { src: resolved, alt, ...props });
  },
}));

// jsdom implements neither, and lib/scroll.ts calls both.
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
