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

// Removes motion-only props before rendering a plain DOM element.
function stripMotionProps(props: MotionProps): MotionProps {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => !MOTION_ONLY_PROPS.has(key))
  ) as MotionProps;
}

// Renders `motion.div` and friends as plain HTML elements.
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

// Render Next Image as a normal <img>.
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: MotionProps & { src?: unknown; alt?: string }) => {
    const resolved = typeof src === "object" && src !== null ? (src as { src: string }).src : src;

    return createElement("img", { src: resolved, alt, ...props });
  },
}));

// jsdom does not implement scrollIntoView.
Element.prototype.scrollIntoView = vi.fn();

// Basic IntersectionObserver stub for component tests.
class InertIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly scrollMargin = "";
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// useActiveSection has its own controllable observer in its test file.
vi.stubGlobal("IntersectionObserver", InertIntersectionObserver);
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
