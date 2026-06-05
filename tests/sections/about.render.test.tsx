import { render, screen } from "@testing-library/react";

import About from "@/components/sections/About";
import { about, skillGroups } from "@/lib/content";

describe("About section", () => {
  it("renders every skill group heading", () => {
    render(<About about={about} skillGroups={skillGroups} />);

    for (const group of skillGroups) {
      expect(screen.getByText(`${group.title}:`)).toBeInTheDocument();
    }
  });

  it("renders an icon for every skill", () => {
    render(<About about={about} skillGroups={skillGroups} />);

    for (const group of skillGroups) {
      for (const skill of group.skills) {
        expect(screen.getByAltText(skill.alt)).toBeInTheDocument();
      }
    }
  });

  it("renders no more icons than the data declares", () => {
    render(<About about={about} skillGroups={skillGroups} />);

    const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);
    const icons = screen.getAllByRole("listitem");

    expect(icons).toHaveLength(skillCount);
  });

  it("renders the profile image with descriptive alt text", () => {
    render(<About about={about} skillGroups={skillGroups} />);

    const profiles = screen
      .getAllByRole("img")
      .filter((img) => /profile/i.test(img.getAttribute("alt") ?? ""));

    expect(profiles.length).toBeGreaterThan(0);
  });
});

describe("About content", () => {
  it("renders every prose segment", () => {
    const { container } = render(<About about={about} skillGroups={skillGroups} />);
    const rendered = container.textContent ?? "";

    for (const paragraph of about.paragraphs) {
      expect(rendered).toContain(paragraph.map((segment) => segment.text).join(""));
    }
  });

  it("renders the closing line and the portrait alt text", () => {
    render(<About about={about} skillGroups={skillGroups} />);

    expect(screen.getByText(about.closing)).toBeInTheDocument();
    expect(screen.getByAltText(about.portraitAlt)).toBeInTheDocument();
  });
});
