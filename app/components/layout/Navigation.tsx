// components/layout/Navigation.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/#products" className="hover:text-blue-600">
          Products
        </Link>
        <Link href="/#testimonials" className="hover:text-blue-600">
          Testimonials
        </Link>
        <Link href="/#contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="sr-only">Open menu</span>
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-blue-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/#products"
              className="block px-3 py-2 hover:bg-blue-50 rounded-md"
            >
              Products
            </Link>
            <Link
              href="/#testimonials"
              className="block px-3 py-2 hover:bg-blue-50 rounded-md"
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 hover:bg-blue-50 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
