import { motion } from "framer-motion";
import Typewriter, { Options } from "typewriter-effect";

const Banner = () => {
  const options: Options = {
    strings: [
      "    ",
      "Full-Stack Developer",
      "Quality Engineer",
      "React Specialist",
      "Python Enthusiast",
      "Next.js Developer",
      "Web Developer",
      "ex-FAANG",
      "Future Senior Dev",
      "Aspiring Principal Engineer",
    ],
    autoStart: true,
    loop: true,
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer min-h-screen h-full mx-auto mdl:py-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 justify-center"
    >
      {/* Hello World Heading */}
      <motion.h3
        className="text-xs md:text-lg font-codeFont tracking-wide text-textGreen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        Hello World, my name is
      </motion.h3>

      {/* Name heading & Auto-Typing Array heading*/}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="text-3xl md:text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Devon Gifford.{" "}
        <span className="text-lg md:text-2xl lg:text-3xl text-textDark mt-2 lgl:mt-4">
          <Typewriter options={options} />
        </span>
      </motion.h1>

      {/* Introductory Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="flex flex-col gap-1.5 text-sm sml:text-base text-textDark font-medium"
      >
        <div>
          {" "}
          Self taught software engineer with a strong focus on frontend
          development. I specialize in crafting web and mobile applications
          using React & TypeScript.
        </div>
        <div>
          Leveraging my background in Marketing and experience in Software
          Testing at a renowned
          <em> FAANG </em>
          company, my approach brings a unique perspective that prioritizes clean and reliable code.
        </div>
        <div className="mt-2 italic">Fully committed to the philosophy of lifelong learning.</div>
        <a href="#Projects" onClick={handleScroll} className="mt-2">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Capstone Projects
            {/* Animated underline bar */}
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="w-40 h-10 text-xs sml:w-52 sml:h-14 sml:text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        <a href="/assets/DevonGifford-FullstackDeveloper-2024.pdf" download>
          Download my latest CV
        </a>
      </motion.button>
    </section>
  );
};

export default Banner;
