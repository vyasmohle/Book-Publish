"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false); // 👈 separate dropdown state
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Publish with us", dropdown: true },
    { name: "Browse Journals", path: "/journals" },
    { name: "Books", path: "/books" },
    { name: "Advertisements", path: "/advertisement" },
    { name: "Contact us", path: "/contact" },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      {/* ======= Top Bar ======= */}
      <div className="flex  items-center justify-between bg-white border-b border-gray-200 px-4 md:px-8">
        <div className="flex items-center relative md:left-[74%] ">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img
                src="/images/logo-2.png"
                alt="Logo"
                className="h-20 w-31 object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-sans md:text-3xl">
              <span className="font-sans font-semibold">Scholint</span> Publishers
            </h1>
            <div className="text-sm text-gray-600 font-sans italic">
              Publishing Thoughts into Reality
            </div>
          </div>
        </div>
      </div>

      {/* ======= Main Navigation ======= */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* ======= Desktop Navigation ======= */}
            <motion.ul
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="hidden md:flex gap-6 lg:gap-10 items-center py-3 justify-center w-full"
            >
              {navItems.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <button className="flex items-center gap-1 text-sm lg:text-base font-medium text-gray-800 hover:text-black transition">
                      {item.name}
                      <FaChevronDown
                        className={`transition-transform duration-200 w-3 ml-1 ${
                          showDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* ======= Desktop Dropdown ======= */}
                    {showDropdown && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-6 w-48 bg-white border border-gray-300 rounded-md shadow-xl text-sm z-50"
                      >
                        <li>
                          <Link
                            href="/publish/submit-manuscript"
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            Submit Manuscript
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/publish/publish-book"
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            Publish a Book
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </li>
                ) : (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`text-sm lg:text-base font-medium transition ${
                        pathname === item.path
                          ? "underline text-gray-900"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </motion.ul>

            {/* ======= Mobile Menu Button ======= */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenu((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 rounded focus:outline-none"
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="2" rx="1" fill="#333" />
                  <rect y="8" width="24" height="2" rx="1" fill="#333" />
                  <rect y="16" width="24" height="2" rx="1" fill="#333" />
                </svg>
              </button>
            </div>
          </div>

          {/* ======= Mobile Navigation ======= */}
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border rounded-md mt-2 p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setMobileDropdown((s) => !s)}
                        className="w-full text-left font-medium text-gray-800 flex items-center justify-between"
                      >
                        {item.name}
                        <FaChevronDown
                          className={`transition-transform duration-200 w-3 ${
                            mobileDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {mobileDropdown && (
                        <div className="pl-4 mt-2 space-y-2">
                          <Link
                            href="/publish/submit-manuscript"
                            onClick={() => {
                              setMobileMenu(false);
                              setMobileDropdown(false);
                            }}
                            className="block text-sm hover:text-[#0c58ca]"
                          >
                            Submit Manuscript
                          </Link>
                          <Link
                            href="/publish/publish-book"
                            onClick={() => {
                              setMobileMenu(false);
                              setMobileDropdown(false);
                            }}
                            className="block text-sm hover:text-[#0c58ca]"
                          >
                            Publish a Book
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenu(false)}
                      className="font-medium text-gray-800 hover:text-[#0c58ca]"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
