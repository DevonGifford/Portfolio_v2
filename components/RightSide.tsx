import React from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}
      className="w-full h-full flex flex-col items-center justify-end gap-40 text-textLight"
    >
      <a href="mailto:devongifford@outlook.com">
        <p className="text-sm rotate-90 w-62 tracking-widest hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          devongifford@outlook.com
        </p>
      </a>
      <span className="w-[2px] h-52 bg-textDark inline-flex"></span>
    </motion.div>
  );
};

export default RightSide;
