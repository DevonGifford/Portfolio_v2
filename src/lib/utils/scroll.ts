/**
 * Smooth-scrolls to the element matching the given id.
 *
 * @param id - The target element id.
 */
export function smoothScrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Handles in-page anchor navigation with smooth scrolling.
 *
 * @param e - The anchor click event.
 * @param opts.onNavigate - Optional callback to run after navigation.
 */
export function scrollToAnchor(
  e: React.MouseEvent<HTMLAnchorElement>,
  opts?: { onNavigate?: () => void }
) {
  e.preventDefault();
  smoothScrollToSection(e.currentTarget.href.split("#")[1]);

  opts?.onNavigate?.();
}
