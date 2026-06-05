"use client";

import { outlineButton } from "@/components/common/OutlineButton";
import SectionTitle from "../common/SectionTitle";
import { siteConfig } from "@/site.config";
import RichText from "../common/RichText";
import type { Contact as ContactContent } from "@/lib/content";
import { Fragment } from "react";

/**
 * @param props.contact - Parsed contact copy.
 */
export default function Contact({ contact }: { contact: ContactContent }) {
  return (
    <section
      id="contact"
      className="cl:py-32 max-w-contentContainer mx-auto flex h-full flex-col items-center justify-center gap-6 py-10"
    >
      <SectionTitle titleNumber={contact.title.number} titleName={contact.title.name} centered />
      <h2 className="font-titleFont lgl:text-4xl text-2xl font-semibold sm:text-3xl">
        {contact.heading}
      </h2>
      <p className="text-textDark max-w-[600px] text-center">
        {contact.paragraphs.map((paragraph, index) => (
          <Fragment key={index}>
            {index > 0 && <br />}
            <RichText paragraph={paragraph} />
          </Fragment>
        ))}
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className={outlineButton("font-titleFont mt-4 h-14 w-40 text-sm tracking-wider")}
      >
        {contact.ctaLabel}
      </a>
    </section>
  );
}
