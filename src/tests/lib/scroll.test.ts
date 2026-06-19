import { scrollToAnchor, smoothScrollToSection } from "@/lib/utils/scroll";

/** Minimal stand-in for the anchor click event `scrollToAnchor` receives. */
function anchorEvent(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.classList.add("nav-link");
  document.body.append(anchor);

  return {
    anchor,
    event: {
      preventDefault: vi.fn(),
      currentTarget: anchor,
    } as unknown as React.MouseEvent<HTMLAnchorElement>,
  };
}

afterEach(() => {
  document.body.innerHTML = "";
});

describe("smoothScrollToSection()", () => {
  it("scrolls to the element with the given id", () => {
    const section = document.createElement("section");
    section.id = "projects";
    document.body.append(section);

    smoothScrollToSection("projects");

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("no-ops when no element has that id", () => {
    expect(() => smoothScrollToSection("does-not-exist")).not.toThrow();
    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
  });
});

describe("scrollToAnchor()", () => {
  it("prevents navigation and scrolls to the href target", () => {
    const section = document.createElement("section");
    section.id = "about";
    document.body.append(section);

    const { event } = anchorEvent("http://localhost/#about");
    scrollToAnchor(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("fires onNavigate", () => {
    const onNavigate = vi.fn();
    const { event } = anchorEvent("http://localhost/#contact");

    scrollToAnchor(event, { onNavigate });

    expect(onNavigate).toHaveBeenCalledOnce();
  });

  it("moves the `active` class onto the clicked link when setActive is set", () => {
    const { anchor: first } = anchorEvent("http://localhost/#about");
    first.classList.add("active");
    const { anchor: second, event } = anchorEvent("http://localhost/#contact");

    scrollToAnchor(event, { setActive: true });

    expect(first).not.toHaveClass("active");
    expect(second).toHaveClass("active");
  });

  it("no-ops gracefully when the target section is missing", () => {
    const { event } = anchorEvent("http://localhost/#nowhere");

    expect(() => scrollToAnchor(event)).not.toThrow();
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
