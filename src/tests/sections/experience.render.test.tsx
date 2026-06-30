import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Experience from "@/components/sections/Experience";
import { experience } from "@/lib/content";

/**
 * Sidebar tabs, in data order.
 *
 * Queried by role rather than by label: two entries legitimately share a label
 * (the same employer, two roles), and the labels also appear as company names
 * in the entry body.
 */
function tabs() {
  return screen.getAllByRole("tab");
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

/**
 * The tabs were previously bare `<li onClick>` elements: clickable in jsdom, but
 * unreachable for anyone not using a mouse. These assert the ARIA tab contract
 * that replaced them.
 */
describe("Experience keyboard access", () => {
  it("exposes the sidebar as a labelled tablist", () => {
    render(<Experience jobs={experience} />);

    expect(screen.getByRole("tablist")).toHaveAccessibleName();
    expect(tabs()).toHaveLength(experience.length);
  });

  it("marks only the open tab as selected", () => {
    render(<Experience jobs={experience} />);

    const selected = tabs().filter((tab) => tab.getAttribute("aria-selected") === "true");

    expect(selected).toHaveLength(1);
    expect(selected[0]).toHaveTextContent(experience[0].label);
  });

  it("puts a single tab stop on the tablist so Tab does not walk every entry", () => {
    render(<Experience jobs={experience} />);

    const reachable = tabs().filter((tab) => tab.getAttribute("tabindex") === "0");

    expect(reachable).toHaveLength(1);
  });

  it("moves to the next entry on ArrowDown and takes focus with it", async () => {
    const user = userEvent.setup();
    render(<Experience jobs={experience} />);

    await user.tab();
    await user.keyboard("{ArrowDown}");

    expect(tabs()[1]).toHaveFocus();
    expect(tabs()[1]).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText(experience[1].componentProps.intro)).toBeInTheDocument();
  });

  it("wraps from the first entry to the last on ArrowUp", async () => {
    const user = userEvent.setup();
    render(<Experience jobs={experience} />);

    await user.tab();
    await user.keyboard("{ArrowUp}");

    expect(tabs().at(-1)).toHaveFocus();
    expect(screen.getByText(experience.at(-1)!.componentProps.intro)).toBeInTheDocument();
  });

  it("jumps to the last entry on End and back to the first on Home", async () => {
    const user = userEvent.setup();
    render(<Experience jobs={experience} />);

    await user.tab();
    await user.keyboard("{End}");
    expect(screen.getByText(experience.at(-1)!.componentProps.intro)).toBeInTheDocument();

    await user.keyboard("{Home}");
    expect(screen.getByText(experience[0].componentProps.intro)).toBeInTheDocument();
  });

  it("links the open tab to the panel describing it", () => {
    render(<Experience jobs={experience} />);

    const panel = screen.getByRole("tabpanel");
    const openTab = tabs().find((tab) => tab.getAttribute("aria-selected") === "true");

    expect(panel).toHaveAttribute("aria-labelledby", openTab!.id);
    expect(openTab).toHaveAttribute("aria-controls", panel.id);
  });
});

/**
 * The default tab used to be the hardcoded key `"tuvLead"`, resolved with a
 * non-null assertion. That was safe only while that entry happened to sit first
 * in content/experience.ts — reordering or renaming it left the section with an
 * undefined entry and threw on render.
 */
describe("Experience default entry", () => {
  it("opens on whichever entry the content lists first", () => {
    const reordered = [...experience].reverse();
    render(<Experience jobs={reordered} />);

    expect(screen.getByText(reordered[0].componentProps.intro)).toBeInTheDocument();
    expect(tabs()[0]).toHaveAttribute("aria-selected", "true");
  });

  it("renders a subset that omits the previously hardcoded default", () => {
    const withoutFirst = experience.slice(1);

    expect(withoutFirst.some((entry) => entry.key === "tuvLead")).toBe(false);

    render(<Experience jobs={withoutFirst} />);

    expect(screen.getByText(withoutFirst[0].componentProps.intro)).toBeInTheDocument();
  });
});
