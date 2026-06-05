import { render, screen } from "@testing-library/react";

import Contact from "@/components/sections/Contact";
import { contact } from "@/lib/content";
import { siteConfig } from "@/site.config";

describe("Contact section", () => {
  it("points its call to action at the configured email address", () => {
    render(<Contact contact={contact} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", `mailto:${siteConfig.email}`);
  });

  it("renders a heading", () => {
    render(<Contact contact={contact} />);

    expect(screen.getAllByRole("heading").length).toBeGreaterThan(0);
  });
});

describe("Contact content", () => {
  it("renders every prose segment", () => {
    const { container } = render(<Contact contact={contact} />);
    const rendered = container.textContent ?? "";

    for (const paragraph of contact.paragraphs) {
      expect(rendered).toContain(paragraph.map((segment) => segment.text).join(""));
    }
  });

  it("renders the heading and CTA label", () => {
    render(<Contact contact={contact} />);

    expect(screen.getByText(contact.heading)).toBeInTheDocument();
    expect(screen.getByText(contact.ctaLabel)).toBeInTheDocument();
  });
});
