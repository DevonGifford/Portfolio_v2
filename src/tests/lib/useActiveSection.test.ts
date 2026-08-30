import { act, renderHook } from "@testing-library/react";

import { useActiveSection } from "@/lib/utils/useActiveSection";

/** Section ids in document order, matching how `NavigationLinks` passes them. */
const IDS = ["home", "about", "contact"] as const;

type Callback = (entries: Pick<IntersectionObserverEntry, "isIntersecting" | "target">[]) => void;

/** The observer instance the hook constructed, so tests can drive its callback. */
let observed: { callback: Callback; targets: Set<Element>; disconnected: boolean };

/**
 * A controllable IntersectionObserver.
 *
 * jsdom doesn't trigger real intersection events, so tests invoke the callback directly.
 */
class ControllableObserver {
  constructor(callback: Callback) {
    observed = { callback, targets: new Set(), disconnected: false };
  }
  observe(element: Element) {
    observed.targets.add(element);
  }
  unobserve(element: Element) {
    observed.targets.delete(element);
  }
  disconnect() {
    observed.disconnected = true;
  }
  takeRecords() {
    return [];
  }
}

/** Reports the given sections as entering, and every other section as leaving. */
function scrollTo(...visible: string[]) {
  act(() => {
    observed.callback(
      IDS.map((id) => ({
        isIntersecting: visible.includes(id),
        target: document.getElementById(id) as Element,
      }))
    );
  });
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", ControllableObserver);
  document.body.innerHTML = IDS.map((id) => `<section id="${id}"></section>`).join("");
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
});

describe("useActiveSection()", () => {
  it("reports the first section before the reader has scrolled", () => {
    const { result } = renderHook(() => useActiveSection(IDS));

    expect(result.current).toBe("home");
  });

  it("follows the reader into a section that scrolls into view", () => {
    const { result } = renderHook(() => useActiveSection(IDS));

    scrollTo("about");

    expect(result.current).toBe("about");
  });

  it("keeps the last section active once the reader scrolls past everything", () => {
    const { result } = renderHook(() => useActiveSection(IDS));

    scrollTo("contact");
    scrollTo();

    expect(result.current).toBe("contact");
  });

  it("prefers the earlier section while two are in view at once", () => {
    const { result } = renderHook(() => useActiveSection(IDS));

    scrollTo("about", "contact");

    expect(result.current).toBe("about");
  });

  it("tracks sections leaving across separate callbacks, not just the latest batch", () => {
    const { result } = renderHook(() => useActiveSection(IDS));

    scrollTo("about", "contact"); // Only `about` changes here; `contact` must still be remembered as in view.
    act(() => {
      observed.callback([{ isIntersecting: false, target: document.getElementById("about")! }]);
    });

    expect(result.current).toBe("contact");
  });

  it("disconnects the observer on unmount", () => {
    const { unmount } = renderHook(() => useActiveSection(IDS));

    unmount();

    expect(observed.disconnected).toBe(true);
  });
});
