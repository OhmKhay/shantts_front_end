import Link from "next/link";
import React from "react";
import { Layout } from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid sm:text-base ">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>
          &copy; {new Date().getFullYear()} HaoHaa | All Rights Reserved.
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
