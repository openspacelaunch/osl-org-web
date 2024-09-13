import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <img className="h-12 mr-2" src="slf-logo-banner-default.png" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/opensls"
        >
          OpenSLS
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/#get-involved"
        >
          Get Involved
        </Link>
      </nav>
    </header>
  );
};

export default Header;
