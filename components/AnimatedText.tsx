import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singelWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }: any) => {
  return (
    <div className="flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center sm:py-0 ">
      <motion.h1
        className={`inline-block w-full font-bold  capitalize text-8xl  
        
        ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word: any, index: any) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block dark:text-white"
            variants={singelWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
