import { render, screen } from "@testing-library/react";

import Banner from "@/components/sections/Banner";
import { siteConfig } from "@/site.config";

describe("Banner section", () => {
  it("renders the configured name", () => {
    render(<Banner />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(siteConfig.name);
  });

  it("offers the CV as a download from the configured path", () => {
    render(<Banner />);

    const cv = screen
      .getAllByRole("link")
      .find((link) => link.getAttribute("href") === siteConfig.resumePath);

    expect(cv).toBeDefined();
    expect(cv).toHaveAttribute("download");
  });

  it("links its call to action at an on-page section", () => {
    render(<Banner />);

    const anchors = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"))
      .filter((href) => href?.startsWith("#"));

    expect(anchors.length).toBeGreaterThan(0);
  });
});
