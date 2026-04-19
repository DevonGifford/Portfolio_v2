"use client";

import OutlineButton from "@/components/common/OutlineButton";
import { siteConfig } from "@/site.config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="cl:py-32 mx-auto flex h-full max-w-contentContainer flex-col items-center justify-center gap-6 py-10"
    >
      <p className="flex items-center font-codeFont text-lg font-semibold tracking-wide text-textGreen">
        04. What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-2xl font-semibold sm:text-3xl lgl:text-4xl">
        Let&apos;s get in touch
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        My inbox is always open and looking for new opportunities <br /> Whether you have a question
        or just want to say hi, I&apos;ll do my best to get back to you!
      </p>
      <a href={`mailto:${siteConfig.email}`}>
        <OutlineButton className="mt-4 h-14 w-40 font-titleFont text-sm tracking-wider">
          Say Hello
        </OutlineButton>
      </a>
    </section>
  );
}
