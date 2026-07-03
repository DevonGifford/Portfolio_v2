import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names conditionally.
 * `clsx` resolves conditionals/arrays; `twMerge` de-duplicates conflicting
 * Tailwind utilities so a later class wins (e.g. `w-12` + `w-14` -> `w-14`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
