import { type ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-textGreen text-textGreen duration-300 hover:bg-hoverColor";

/**
 * Shared class for the green outlined button/link look — usable on any element.
 *
 * @param className - Extra classes merged with the base look.
 * @returns The combined Tailwind class string.
 */
export const outlineButton = (className?: string) => cn(base, className);

/**
 * Green outlined `<button>`. For anchors or motion elements that need the same
 * look, apply `outlineButton()` to their className instead.
 *
 * @param props.className - Extra classes merged with the outline-button look.
 * @returns A `<button>` styled with the outline-button look.
 */
export default function OutlineButton({ className, ...props }: ComponentProps<"button">) {
  return <button className={outlineButton(className)} {...props} />;
}
