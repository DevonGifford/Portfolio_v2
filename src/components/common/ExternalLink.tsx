import { type ComponentProps } from "react";

/**
 * Renders an external anchor with safe new-tab defaults.
 *
 * @param props.target - Defaults to "_blank" to open in a new tab.
 * @param props.rel - Defaults to "noopener noreferrer" to prevent tab-nabbing.
 * @returns An anchor element; all other standard `<a>` props pass through.
 */
export default function ExternalLink({
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: ComponentProps<"a">) {
  return <a target={target} rel={rel} {...props} />;
}
