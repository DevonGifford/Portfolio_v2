import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Experience from "@/components/sections/Experience";
import { experience } from "@/lib/content";

/**
 * Sidebar tabs, in data order.
 *
 * Indexed rather than queried by label: two entries legitimately share a label
 * (the same employer, two roles), and the labels also appear as company names
 * in the entry body.
 */
function tabs() {
  return within(screen.getAllByRole("list")[0]).getAllByRole("listitem");
}

/**
 * Content-agnostic: every assertion loops the data module, so these survive the
 * move into `content/` — only the import above changes.
 */
describe("Experience section", () => {
  it("renders a sidebar tab for every job entry", () => {
    render(<Experience jobs={experience} />);

    expect(tabs()).toHaveLength(experience.length);

    experience.forEach((entry, index) => {
      expect(tabs()[index]).toHaveTextContent(entry.label);

      if (entry.sub) expect(tabs()[index]).toHaveTextContent(entry.sub);
    });
  });

  it("renders the first entry's details by default", () => {
    render(<Experience jobs={experience} />);
    const first = experience[0].componentProps;

    expect(screen.getByText(first.dates)).toBeInTheDocument();
    expect(screen.getByText(first.intro)).toBeInTheDocument();

    for (const bullet of first.bullets) {
      expect(screen.getByText(`${bullet.heading}:`)).toBeInTheDocument();
    }
  });

  it("swaps the details when another tab is clicked", async () => {
    const user = userEvent.setup();
    render(<Experience jobs={experience} />);

    const target = experience.at(-1)!;
    await user.click(tabs().at(-1)!);

    expect(screen.getByText(target.componentProps.dates)).toBeInTheDocument();
    expect(screen.getByText(target.componentProps.intro)).toBeInTheDocument();
  });

  it("renders every bullet of every entry when its tab is selected", async () => {
    const user = userEvent.setup();
    render(<Experience jobs={experience} />);

    for (const [index, entry] of experience.entries()) {
      await user.click(tabs()[index]);

      for (const bullet of entry.componentProps.bullets) {
        expect(screen.getByText(`${bullet.heading}:`)).toBeInTheDocument();
      }
    }
  });
});
