import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center mt-4 justify-center w-[50px] h-[30px] rounded-sm text-[14px] font-bold border border-transparent border-solid  bg-[#1C64F2] text-light dark:border-light "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Shan
      </MotionLink>
      <span className="px-2 mt-6"> TTS</span>
    </div>
  );
};

export default Logo;
