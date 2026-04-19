"use client";

import { cn } from "@/lib/utils";

interface Props {
  titleNumber: string;
  titleName: string;
  /** Center the title and drop the trailing rule (e.g. the Contact CTA). */
  centered?: boolean;
}

export default function SectionTitle({ titleName, titleNumber, centered = false }: Props) {
  return (
    <div>
      <h2
        className={cn(
          "flex items-center font-titleFont text-2xl font-semibold",
          centered ? "justify-center" : "pt-50",
        )}
      >
        <span className="mr-2 text-lg text-textGreen">{titleNumber}.</span> {titleName}
        {!centered && (
          <span className="ml-7 hidden h-[0.5px] bg-gray-700 md:inline-flex md:w-60 lgl:w-72" />
        )}
      </h2>
    </div>
  );
}
