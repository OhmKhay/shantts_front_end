import React from "react";

export const Layout = ({ children, className = "" }: any) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 p-32 dark:bg-dark dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};
