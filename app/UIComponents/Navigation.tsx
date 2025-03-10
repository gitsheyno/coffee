"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-amber-800">
                Aromatic Blends
              </span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {links.map(({ href, label }) => (
                <Link
                  className={clsx(
                    "text-amber-900 hover:text-amber-700 px-3 py-2 font-medium transition-all duration-300 ease-in-out",
                    {
                      "border-amber-900 border-b-2 scale-105":
                        pathname === href,
                    }
                  )}
                  key={href}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/shop"
              className="bg-amber-700 px-4 py-2 rounded-md text-white hover:bg-amber-800 transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-amber-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-amber-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-gray-500 hover:text-amber-700 font-medium"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-500 hover:text-amber-700 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-500 hover:text-amber-700 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-500 hover:text-amber-700 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
