/** Smooth-scroll to the element with the given id (from an `#id` anchor). */
export function smoothScrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Anchor click handler: prevents default navigation, smooth-scrolls to the
 * `#id` in the link's href, and optionally marks the active nav link and/or
 * runs a callback (e.g. closing a menu).
 */
export function scrollToAnchor(
  e: React.MouseEvent<HTMLAnchorElement>,
  opts?: { setActive?: boolean; onNavigate?: () => void }
) {
  e.preventDefault();
  smoothScrollToSection(e.currentTarget.href.split("#")[1]);

  if (opts?.setActive) {
    document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  }

  opts?.onNavigate?.();
}
