/** Smooth-scroll to the element with the given id (from an `#id` anchor). */
export function smoothScrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Anchor click handler: prevents default navigation, smooth-scrolls to the
 * `#id` in the link's href, and optionally runs a callback (e.g. closing a menu).
 *
 * The active-link highlight is *not* set here — it follows the reader's scroll
 * position via `useActiveSection`, so clicking is only one way to reach it.
 */
export function scrollToAnchor(
  e: React.MouseEvent<HTMLAnchorElement>,
  opts?: { onNavigate?: () => void }
) {
  e.preventDefault();
  smoothScrollToSection(e.currentTarget.href.split("#")[1]);

  opts?.onNavigate?.();
}
