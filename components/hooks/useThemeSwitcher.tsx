"use client";
import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
    }

    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
