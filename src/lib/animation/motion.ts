import type { Variants, Transition } from "motion/react";

export const DURATION = { fast: 0.2, base: 0.5, slow: 1.5 } as const;

type Tween = { delay?: number; duration?: number; ease?: Transition["ease"] };

/** Fade opacity 0 -> 1. */
export const fadeIn = ({ delay = 0, duration = DURATION.base, ease }: Tween = {}) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ...(ease && { ease }) },
});

/** Axis offset + opacity. `axis: "y"` = fade up; `axis: "x"` = slide in. */
export const slideIn = ({
  axis = "y",
  offset = 20,
  delay = 0,
  duration = DURATION.base,
  ease,
}: Tween & { axis?: "x" | "y"; offset?: number } = {}) => ({
  initial: { [axis]: offset, opacity: 0 },
  animate: { [axis]: 0, opacity: 1 },
  transition: { duration, delay, ...(ease && { ease }) },
});

/** Stagger container — drives children via the `hidden`/`show` variant labels. */
export const stagger = ({ each = 0.1, delayChildren = 0 } = {}): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren } },
});

/** Stagger child — animates in tandem with a `stagger` parent. */
export const staggerItem = (axis: "x" | "y" = "y"): Variants =>
  axis === "x"
    ? {
        hidden: { x: 20, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: DURATION.base } },
      }
    : {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: DURATION.base } },
      };
