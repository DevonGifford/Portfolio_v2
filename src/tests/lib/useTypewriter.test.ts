import { act, renderHook } from "@testing-library/react";

import { useTypewriter } from "@/lib/animation/useTypewriter";

/**
 * Timers are faked throughout: the hook is entirely `setTimeout`-driven, so
 * real timers would make these tests both slow and flaky.
 */
const TYPING = 100;
const DELETING = 50;
const PAUSE = 1000;

/** Words are kept short so a full type/delete cycle is countable by hand. */
const WORDS = ["ab", "cd"] as const;

function setup(overrides: Parameters<typeof useTypewriter>[0] | object = {}) {
  return renderHook(() =>
    useTypewriter({
      words: WORDS,
      typingSpeed: TYPING,
      deletingSpeed: DELETING,
      pauseTime: PAUSE,
      ...overrides,
    })
  );
}

/**
 * Advances the hook by `times` steps of `ms`.
 *
 * One act per step, deliberately:
 * The hook schedules its next timer from the effect that runs *after* React flushes the previous state update,
 * so a single `advanceTimersByTime(ms * 3)` would fire one timer, not three.
 */
function tick(ms: number, times = 1) {
  for (let step = 0; step < times; step += 1) {
    act(() => {
      vi.advanceTimersByTime(ms);
    });
  }
}

/** Steps to type or delete a word: one per character, plus one for the clamp. */
const stepsFor = (word: string) => word.length + 1;

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("useTypewriter", () => {
  it("starts empty and reports that it is typing", () => {
    const { result } = setup();

    expect(result.current.text).toBe("");
    expect(result.current.isTyping).toBe(true);
  });

  it("reveals one character per typing tick", () => {
    const { result } = setup();

    tick(TYPING);
    expect(result.current.text).toBe("a");

    tick(TYPING);
    expect(result.current.text).toBe("ab");
  });

  it("stops reporting isTyping once the word is complete", () => {
    const { result } = setup();

    tick(TYPING, stepsFor(WORDS[0]));

    expect(result.current.text).toBe("ab");
    expect(result.current.isTyping).toBe(false);
  });

  it("holds the finished word for the whole pause", () => {
    const { result } = setup();

    tick(TYPING, stepsFor(WORDS[0]));
    tick(PAUSE - 1);

    expect(result.current.text).toBe("ab");
  });

  it("deletes a character per tick once the pause elapses", () => {
    const { result } = setup();

    tick(TYPING, stepsFor(WORDS[0]));
    tick(PAUSE);

    // The first delete step only drops the clamped index; the text is unchanged.
    tick(DELETING);
    expect(result.current.text).toBe("ab");

    tick(DELETING);
    expect(result.current.text).toBe("a");

    tick(DELETING);
    expect(result.current.text).toBe("");
  });

  it("advances to the next word after deleting", () => {
    const { result } = setup();

    tick(TYPING, stepsFor(WORDS[0]));
    tick(PAUSE);
    tick(DELETING, stepsFor(WORDS[0]));

    expect(result.current.isTyping).toBe(true);

    tick(TYPING);
    expect(result.current.text).toBe("c");
  });

  it("wraps back to the first word after the last", () => {
    const { result } = setup();

    // Two full cycles: type, pause, delete, advance — twice.
    for (const word of WORDS) {
      tick(TYPING, stepsFor(word));
      tick(PAUSE);
      tick(DELETING, stepsFor(word));
    }

    tick(TYPING);
    expect(result.current.text).toBe("a");
  });

  it("keeps exactly one timer pending at a time", () => {
    setup();

    tick(TYPING);
    expect(vi.getTimerCount()).toBe(1);
  });

  it("clears its pending timer when unmounted mid-pause", () => {
    const { unmount } = setup();

    tick(TYPING, stepsFor(WORDS[0]));
    expect(vi.getTimerCount()).toBe(1);

    unmount();

    expect(vi.getTimerCount()).toBe(0);
  });

  it("clears its pending timer when unmounted mid-word", () => {
    const { unmount } = setup();

    tick(TYPING);
    unmount();

    expect(vi.getTimerCount()).toBe(0);
  });
});
