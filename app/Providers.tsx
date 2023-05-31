"use client";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID as string);
    ReactGA.pageview(window.location.pathname);
  }, []);
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
