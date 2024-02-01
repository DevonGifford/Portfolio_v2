import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer h-full mx-auto py-10 cl:py-32 flex flex-col gap-6 items-center justify-center"
    >
      <p className="font-codeFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-2xl sm:text-3xl lgl:text-4xl font-semibold">
        Let&apos;s get in touch
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        My inbox is always open and looking for new opportunities. <br />{" "}
        Whether you have a question or just want to say hi, I&apos;ll try my
        best to get back to you!
      </p>
      <a href="mailto:devongifford@outloook.com">
        <button className="w-40 h-14 border border-textGreen mt-4 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
