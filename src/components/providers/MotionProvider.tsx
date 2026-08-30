"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Single place `prefers-reduced-motion` is handled. `reducedMotion="user"`
 * respects the OS setting: transform/layout animations are skipped while
 * opacity still animates. Wraps the whole app in `app/layout.tsx`.
 *
 * @param props.children - The app, wrapped in `MotionConfig`.
 * @returns The children wrapped in a reduced-motion-aware `MotionConfig`.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
