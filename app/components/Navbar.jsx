"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PUBLISH WITH US", dropdown: true },
    { name: "BROWSE JOURNALS", path: "/journals" },
    { name: "BOOKS", path: "/books" },
    { name: "ADVERTISEMENT", path: "/advertisement" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-400 text-black font-semibold text-sm shadow-md z-50">
      <ul className="flex justify-center items-center space-x-8 py-3 relative">
        {navItems.map((item) =>
          item.dropdown ? (
            <li key={item.name} className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:underline focus:outline-none"
              >
                {item.name}
              </button>

              {/* Dropdown Menu (on click) */}
              {showDropdown && (
                <ul className="absolute top-7 left-[-5] bg-white shadow-lg rounded-md text-black py-2 w-48">
                  <li>
                    <Link
                      href="/publish/submit-manuscript"
                      className="block px-4 py-2 hover:bg-orange-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      Submit Manuscript
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/publish/publish-book"
                      className="block px-4 py-2 hover:bg-orange-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      Publish a Book
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:underline ${
                  pathname === item.path ? "underline text-black" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
