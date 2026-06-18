import { render, screen } from "@testing-library/react";

import Banner from "@/components/sections/Banner";
import { banner } from "@/lib/content";
import { siteConfig } from "@/content/site.config";

describe("Banner section", () => {
  it("renders the configured name", () => {
    render(<Banner copy={banner} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(siteConfig.name);
  });

  it("offers the CV as a download from the configured path", () => {
    render(<Banner copy={banner} />);

    const cv = screen
      .getAllByRole("link")
      .find((link) => link.getAttribute("href") === siteConfig.resumePath);

    expect(cv).toBeDefined();
    expect(cv).toHaveAttribute("download");
  });

  it("links its call to action at an on-page section", () => {
    render(<Banner copy={banner} />);

    const anchors = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"))
      .filter((href) => href?.startsWith("#"));

    expect(anchors.length).toBeGreaterThan(0);
  });
});

describe("Banner content", () => {
  it("renders every prose segment", () => {
    const { container } = render(<Banner copy={banner} />);
    const rendered = container.textContent ?? "";

    for (const paragraph of banner.paragraphs) {
      expect(rendered).toContain(paragraph.map((segment) => segment.text).join(""));
    }
  });

  it("renders the greeting, closing line and both labels", () => {
    render(<Banner copy={banner} />);

    expect(screen.getByText(banner.greeting)).toBeInTheDocument();
    expect(screen.getByText(banner.closing)).toBeInTheDocument();
    expect(screen.getByText(banner.cta.label)).toBeInTheDocument();
    expect(screen.getByText(banner.resumeLabel)).toBeInTheDocument();
  });
});
