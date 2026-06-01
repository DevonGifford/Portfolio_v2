import { render, screen } from "@testing-library/react";

import About, { skillGroups } from "@/components/sections/About";

describe("About section", () => {
  it("renders every skill group heading", () => {
    render(<About />);

    for (const group of skillGroups) {
      expect(screen.getByText(`${group.title}:`)).toBeInTheDocument();
    }
  });

  it("renders an icon for every skill", () => {
    render(<About />);

    for (const group of skillGroups) {
      for (const skill of group.skills) {
        expect(screen.getByAltText(skill.alt)).toBeInTheDocument();
      }
    }
  });

  it("renders no more icons than the data declares", () => {
    render(<About />);

    const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);
    const icons = screen.getAllByRole("listitem");

    expect(icons).toHaveLength(skillCount);
  });

  it("renders the profile image with descriptive alt text", () => {
    render(<About />);

    const profiles = screen
      .getAllByRole("img")
      .filter((img) => /profile/i.test(img.getAttribute("alt") ?? ""));

    expect(profiles.length).toBeGreaterThan(0);
  });
});
