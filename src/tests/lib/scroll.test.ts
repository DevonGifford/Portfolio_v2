import { scrollToAnchor, smoothScrollToSection } from "@/lib/utils/scroll";

/** Minimal stand-in for the anchor click event `scrollToAnchor` receives. */
function anchorEvent(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
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

  it("no-ops if section does not exist on the page", () => {
    expect(() => smoothScrollToSection("does-not-exist")).not.toThrow();
    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
  });
});

describe("scrollToAnchor()", () => {
  it("smooth scrolls to correction section instead of jumping to new page", () => {
    const section = document.createElement("section");
    section.id = "about";
    document.body.append(section);

    const { event } = anchorEvent("http://localhost/#about");
    scrollToAnchor(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("can close the mobile menue after scrolling to a section", () => {
    const onNavigate = vi.fn();
    const { event } = anchorEvent("http://localhost/#contact");

    scrollToAnchor(event, { onNavigate });

    expect(onNavigate).toHaveBeenCalledOnce();
  });

  it("no-ops gracefully when the target section is missing", () => {
    const { event } = anchorEvent("http://localhost/#nowhere");

    expect(() => scrollToAnchor(event)).not.toThrow();
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
