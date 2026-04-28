"use client";

import { cn } from "@/lib/utils";

interface Props {
  titleNumber: string;
  titleName: string;
  /** Center the title and drop the trailing rule (e.g. the Contact CTA). */
  centered?: boolean;
}

/**
 * Renders the shared themed heading used across page sections.
 *
 * @param props - Section title options.
 * @returns A section title heading.
 */
export default function SectionTitle({ titleName, titleNumber, centered = false }: Props) {
  return (
    <div>
      <h2
        className={cn(
          "font-titleFont flex items-center text-2xl font-semibold",
          centered ? "justify-center" : "pt-50"
        )}
      >
        <span className="text-textGreen mr-2 text-lg">{titleNumber}.</span> {titleName}
        {!centered && (
          <span className="lgl:w-72 ml-7 hidden h-[0.5px] bg-gray-700 md:inline-flex md:w-60" />
        )}
      </h2>
    </div>
  );
}
