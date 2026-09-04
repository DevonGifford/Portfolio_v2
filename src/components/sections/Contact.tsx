"use client";

import { outlineButton } from "@/components/common/OutlineButton";
import SectionTitle from "../common/SectionTitle";
import { siteConfig } from "@/content/site.config";
import ParagraphText from "../common/ParagraphText";
import type { Contact as ContactCopy } from "@/lib/content";
import { Fragment } from "react";

export default function Contact({ copy }: { copy: ContactCopy }) {
  return (
    <section
      id="contact"
      className="lgl:py-80 max-w-contentContainer mx-auto my-20 flex h-full flex-col items-center justify-center gap-6 py-30"
    >
      <SectionTitle titleNumber={copy.title.number} titleName={copy.title.name} centered />
      <h2 className="font-titleFont lgl:text-4xl text-2xl font-semibold sm:text-3xl">
        {copy.heading}
      </h2>
      <p className="text-textDark max-w-150 text-center">
        {copy.paragraphs.map((paragraph, index) => (
          <Fragment key={index}>
            {index > 0 && <br />}
            <ParagraphText paragraph={paragraph} />
          </Fragment>
        ))}
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className={outlineButton("font-titleFont mt-4 h-14 w-40 text-sm tracking-wider")}
      >
        {copy.ctaLabel}
      </a>
    </section>
  );
}
