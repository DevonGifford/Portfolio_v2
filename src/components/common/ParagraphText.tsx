"use client";

import { Fragment } from "react";

import type { Paragraph } from "@/lib/content/schema";

/**
 * Renders one content paragraph.
 *
 * Segments carry their own emphasis, so copy in `content/` stays free of
 * markup: `highlight` becomes the accent green, `emphasis` becomes italics, and
 * a plain run renders as bare text.
 *
 * @param props.paragraph - The segments to render, in order.
 * @returns The paragraph's inline content, unwrapped — the caller supplies the
 *   element and its classes.
 */
export default function ParagraphText({ paragraph }: { paragraph: Paragraph }) {
  return (
    <>
      {paragraph.map((segment, index) => {
        const key = `${index}-${segment.text}`;

        if (segment.highlight) {
          return (
            <span key={key} className="text-textGreen">
              {segment.text}
            </span>
          );
        }

        if (segment.emphasis) return <em key={key}>{segment.text}</em>;

        return <Fragment key={key}>{segment.text}</Fragment>;
      })}
    </>
  );
}
