"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);

      if (href.startsWith("#")) {
        if (href === "#get-involved") {
          //   const element = document.querySelector(href);
          //   if (element) {
          //     element.scrollIntoView({ behavior: "smooth" });
          //   }
          // } else {
          // router.push("/");
          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      } else {
        router.push(href);
      }
    },
    [router, pathname]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/opensasa", label: "OpenSASA" },
    { href: "/projects", label: "Projects" },
    { href: "#get-involved", label: "Get Involved" },
  ];

  return (
    <header
      className={`fixed top-0 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-4 lg:px-6 h-10 md:h-14 flex items-center bg-white shadow-md">
        <Link className="flex items-center justify-center" href="/">
          <Image
            className="max-h-8 md:max-h-12 w-auto mr-2"
            src="/slf-logo-banner-default.png"
            alt="Open Space Launch Foundation Logo"
            width={200}
            height={200}
          />
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
            >
              <span className="text-sm font-medium hover:underline underline-offset-4">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={toggleMenu}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="ml-auto md:hidden">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  <span className="text-lg font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
