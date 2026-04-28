import { type ComponentProps } from "react";

/**
 * Renders an external anchor with safe new-tab defaults.
 *
 * @param props - Anchor element props.
 * @returns An anchor element.
 */
export default function ExternalLink({
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: ComponentProps<"a">) {
  return <a target={target} rel={rel} {...props} />;
}
