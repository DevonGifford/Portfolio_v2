"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view.
 *
 * Replaces the previous approach of toggling a CSS class imperatively on click,
 * which had three problems: it queried every `.nav-link` on the page and so hit
 * the desktop and mobile navs at once, it never updated when the reader scrolled
 * rather than clicked, and React could reconcile the class away.
 *
 * The `rootMargin` collapses the viewport to a band across its middle, so a
 * section becomes active as it passes the centre of the screen rather than the
 * moment its top edge appears. `root` stays `null` (the viewport) — `<main>` is
 * the scroll container but it fills the viewport, so the two agree.
 *
 * @param ids - Section ids in document order. Must be a stable reference.
 * @returns The id of the section in view, or the first id before any callback.
 */
export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    // The callback only reports sections whose intersection *changed*, so the
    // full set has to be tracked across calls rather than read from `entries`.
    const inView = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        }

        // Document order breaks ties while two sections share the band.
        const current = ids.find((id) => inView.has(id));

        if (current) setActiveId(current);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
