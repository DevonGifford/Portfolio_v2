"use client";

import { cn } from "@/lib/utils/cn";

interface Props {
  titleNumber: string;
  titleName: string;
  centered?: boolean;
}

/**
 * Renders the shared themed heading used across page sections.
 *
 * @param props.titleNumber - Two-digit index shown before the name, e.g. "01".
 * @param props.titleName - The heading text.
 * @param props.centered - Center the title and drop the trailing rule (e.g. the Contact CTA).
 * @returns An `<h2>` heading, optionally followed by a decorative rule.
 */
export default function SectionTitle({ titleName, titleNumber, centered = false }: Props) {
  return (
    <div>
      <h2
        className={cn(
          "font-titleFont flex items-center text-2xl font-semibold",
          centered ? "justify-center" : "pt-40"
        )}
      >
        <span className="text-textGreen mr-2 text-lg">{titleNumber}.</span> {titleName}
        {!centered && (
          <span className="lgl:w-72 bg-textDark ml-7 hidden h-[0.5px] md:inline-flex md:w-60" />
        )}
      </h2>
    </div>
  );
}
