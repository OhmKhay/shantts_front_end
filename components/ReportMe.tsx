import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const ReportMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 ">
      <div className="relative z-20 flex items-center justify-center w-48 h-auto md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSezbAV0bzpy_fj7fQhHT27r4v83JrZWyBNsKf-IkbPFyLBOtA/viewform?usp=sharing"
          className="flex  items-center justify-center cursor-pointer
absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
font-semibold hover:bg-light hover:text-dark

dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
md:w-12 md:h-12 sm:text-[9.4px]

"
        >
          Report
        </Link>
      </div>
    </div>
  );
};

export default ReportMe;
