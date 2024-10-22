"use client";

import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 sm:w-1/2">
        © 2024 Open Space Launch Foundation. All rights reserved.
        <br />
        Open Space Launch Foundation is a CIO (Charitable Incorporated
        Organisation) pending registration with the Charity Commission for
        England and Wales (Application No. 5247450).
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="/privacy"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
