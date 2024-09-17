"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scrollTo) {
        window.location.hash = scrollTo; // Update the URL
        document.querySelector(scrollTo)?.scrollIntoView({
          behavior: "smooth",
        });
        setScrollTo(null);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    }; // Cleanup on unmount
  }, [scrollTo]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setScrollTo(href);
    }
    setIsOpen(false); // Close the drawer
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/opensls", label: "OpenSLS" },
    { href: "/projects", label: "Projects" },
    { href: "#get-involved", label: "Get Involved" },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link href="/" className="flex items-center justify-center">
        <img
          className="h-auto max-h-10 w-auto mr-2"
          src="slf-logo-banner-default.png"
          alt="Open Space Launch Foundation Logo"
        />
      </Link>
      <nav className="hidden md:flex gap-4 sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            onClick={(e) => handleLinkClick(e, item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
