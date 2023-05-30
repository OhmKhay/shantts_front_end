"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GithubIcon, SunIcon, MoonIcon } from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useTheme } from "next-themes";

const CustomLink = ({ href, title, className = "" }: any) => {
  const router: any = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }: any) => {
  const router: any = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      ref={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode]: any = useThemeSwitcher();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8 ">
      {/* <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={() => handleClick()}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button> */}

      <div className="flex items-center justify-between w-full lg:hidden">
        <nav className="flex items-center justify-center">
          {/* <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Teaching" className="ml-4" />
          <CustomLink href="/cv/gchism_cv.pdf" title="CV" className="ml-4" /> */}
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://github.com/haohaaorg"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>

          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
              setTheme(mode === "light" ? "dark" : "light");
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ease
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      `}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <div className="invisible lg:visible absolute top-[30px] left-[60%]">
        <button
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
            setTheme(mode === "light" ? "dark" : "light");
          }}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ease
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      `}
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </div>

      <div className="absolute left-[10%] top-2 sm:left-[20%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
