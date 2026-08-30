"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the currently active section based on what's in view.
 *
 * Uses an IntersectionObserver with a narrow band around the middle of the
 * viewport, so a section becomes active as it passes through the center.
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
