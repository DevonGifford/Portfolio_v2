import { render, screen } from "@testing-library/react";

import NavLinkList from "@/components/common/NavLinkList";
import SocialLinks from "@/components/common/SocialLinks";
import { siteConfig } from "@/content/site.config";

/** Section ids the nav is expected to reach; also the anchor targets in `app/page.tsx`. */
const SECTION_IDS = ["home", "about", "experience", "projects", "contact"];

describe("NavLinkList", () => {
  it("renders a link per section, pointing at its anchor", () => {
    render(<NavLinkList />);

    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    expect(hrefs).toEqual(SECTION_IDS.map((id) => `#${id}`));
  });
});

describe("SocialLinks", () => {
  it("renders one link per configured social account", () => {
    render(<SocialLinks />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(Object.keys(siteConfig.social).length);
  });

  it("points each link at its configured URL", () => {
    render(<SocialLinks />);

    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    for (const url of Object.values(siteConfig.social)) {
      expect(hrefs).toContain(url);
    }
  });

  it("gives every link an accessible name", () => {
    render(<SocialLinks />);

    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAccessibleName();
    }
  });
});
