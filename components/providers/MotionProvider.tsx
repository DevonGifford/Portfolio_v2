"use client";

import { MotionConfig } from "motion/react";
import { type ReactNode } from "react";

/**
 * Single place `prefers-reduced-motion` is handled. `reducedMotion="user"`
 * respects the OS setting: transform/layout animations are skipped while
 * opacity still animates. Wraps the whole app in `app/layout.tsx`.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
