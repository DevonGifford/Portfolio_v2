import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Projects from "@/components/sections/Projects";
import capstoneEntries from "@/components/sections/projects/capstone-projects/capstoneEntries";
import miniProjectsEntries from "@/components/sections/projects/mini-projects/miniProjectEntries";

/** Mini projects shown before "Show More" — mirrors the slice in Projects.tsx. */
const PREVIEW_COUNT = 6;

describe("Projects section", () => {
  it("renders every capstone project", () => {
    render(<Projects />);

    for (const project of capstoneEntries) {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
      expect(screen.getAllByText(project.description).length).toBeGreaterThan(0);
    }
  });

  it("links every capstone project to its repo and live site", () => {
    render(<Projects />);
    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    for (const project of capstoneEntries) {
      expect(hrefs).toContain(project.gitLink);
      expect(hrefs).toContain(project.liveLink);
    }
  });

  it("renders every capstone tech stack entry", () => {
    render(<Projects />);

    for (const project of capstoneEntries) {
      for (const tech of project.techStackList) {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      }
    }
  });

  it("shows only the first few mini projects until Show More", () => {
    render(<Projects />);

    for (const project of miniProjectsEntries.slice(0, PREVIEW_COUNT)) {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    }

    for (const project of miniProjectsEntries.slice(PREVIEW_COUNT)) {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    }
  });

  it("reveals every remaining mini project on Show More, and hides them again", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: /show more/i }));

    for (const project of miniProjectsEntries) {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    }

    await user.click(screen.getByRole("button", { name: /show less/i }));

    expect(screen.queryByText(miniProjectsEntries.at(-1)!.title)).not.toBeInTheDocument();
  });
});
