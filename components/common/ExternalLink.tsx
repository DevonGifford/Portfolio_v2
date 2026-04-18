import { type ComponentProps } from "react";

/**
 * Anchor that opens in a new tab with safe `rel` defaults (`noopener
 * noreferrer`). All `<a>` props pass through; `target`/`rel` are overridable.
 */
export default function ExternalLink({
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: ComponentProps<"a">) {
  return <a target={target} rel={rel} {...props} />;
}
