import { render, screen } from "@testing-library/react";

import NavigationLinks from "@/components/common/NavigationLinks";
import SocialMediaLinks from "@/components/common/SocialMediaLinks";
import { siteConfig } from "@/content/site.config";

/** Section ids the nav is expected to reach; also the anchor targets in `app/page.tsx`. */
const SECTION_IDS = ["home", "about", "experience", "projects", "contact"];

describe("NavigationLinks", () => {
  it("renders a link per section, pointing at its anchor", () => {
    render(<NavigationLinks />);

    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    expect(hrefs).toEqual(SECTION_IDS.map((id) => `#${id}`));
  });
});

describe("SocialMediaLinks", () => {
  it("renders one link per configured social account", () => {
    render(<SocialMediaLinks />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(Object.keys(siteConfig.social).length);
  });

  it("points each link at its configured URL", () => {
    render(<SocialMediaLinks />);

    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    for (const url of Object.values(siteConfig.social)) {
      expect(hrefs).toContain(url);
    }
  });

  it("gives every link an accessible name", () => {
    render(<SocialMediaLinks />);

    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAccessibleName();
    }
  });
});

/**
 * The active link used to be set by toggling a class via
 * `document.querySelectorAll(".nav-link")`, which hit the desktop and mobile
 * navs at once and never responded to scrolling. It is React state now.
 */
describe("NavigationLinks active state", () => {
  it("marks the section in view with aria-current", () => {
    render(<NavigationLinks />);

    const current = screen.getAllByRole("link").filter((link) => link.hasAttribute("aria-current"));

    expect(current).toHaveLength(1);
    expect(current[0]).toHaveAttribute("aria-current", "location");
    expect(current[0]).toHaveAttribute("href", `#${siteConfig.nav[0].id}`);
  });

  it("keeps the desktop and mobile navs independent", () => {
    const { unmount } = render(<NavigationLinks />);
    unmount();

    render(
      <>
        <NavigationLinks />
        <NavigationLinks isMobile />
      </>
    );

    // One marked link per instance — the old class-toggling approach left the
    // hidden nav unmarked because a single querySelectorAll cleared both.
    const current = screen.getAllByRole("link").filter((link) => link.hasAttribute("aria-current"));

    expect(current).toHaveLength(2);
  });

  it("does not leave the dead nav-link hook class behind", () => {
    const { container } = render(<NavigationLinks />);

    expect(container.querySelector(".nav-link")).toBeNull();
  });
});
