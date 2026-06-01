import { render, screen } from "@testing-library/react";

import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/site.config";

describe("Contact section", () => {
  it("points its call to action at the configured email address", () => {
    render(<Contact />);

    expect(screen.getByRole("link")).toHaveAttribute("href", `mailto:${siteConfig.email}`);
  });

  it("renders a heading", () => {
    render(<Contact />);

    expect(screen.getAllByRole("heading").length).toBeGreaterThan(0);
  });
});
