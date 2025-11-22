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

  // close dropdown when click outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // colors (matches screenshot / brand)
  const ORANGE = "#E16417"; // title & accents
  const NAV_BG = "rgba(255,255,255,0.92)"; // nav background
  const NAV_LINK_BG = "#FFECE0"; // subtle hover - not strictly necessary

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top header: logo (left) + big title (right) */}
      <div
        className="flex items-center justify-between bg-white border-b border-gray-200 px-4 md:px-8 "
        style={{ background: "#ffffff" }}
      >
        {/* Left: logo */}
        {/* <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="/images/Plogo.png"
              alt="Logo"
              className="h-20 w-20 object-contain cursor-pointer"
            />
          </Link>
        </div> */}
        {/* Right: big title (matches screenshot where title sits on right) */}
        <div className=" flex items-center relative left-[75%]">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img
                src="/images/logo-2.png"
                alt="Logo"
                className="h-20 w-31 object-cover cursor-pointer "
              />
            </Link>
          </div>
        <div>
            <h1
            className="text-2xl font-sans md:text-3xl"
            style={{  }}
          >
            <span className="font-sans font-semibold" >Scholint</span> Publisher
          </h1>
          <div className="text-sm text-gray-600 font-sans italic">
            Publishing Thoughts into Reality
          </div>
        </div>
        </div>
      </div>

      {/* Centered navigation strip */}
      <nav
        className=" border-b bg-white  border-gray-200"
        // style={{ background: "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Desktop nav (centered links) */}
            <motion.ul
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="hidden md:flex gap-8 items-center py-3 justify-center w-full"
            >
              {navItems.map((item) =>
                item.dropdown ? (
                  <li key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setShowDropdown((s) => !s)}
                      className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black transition"
                    >
                      {item.name}
                      <FaChevronDown
                        className={`transition-transform duration-200 w-2.5 mt-0.5 ml-0.5 ${
                          showDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* dropdown menu */}
                    {showDropdown && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-5 w-44 bg-white border border-gray-300 rounded-md shadow-xl text-sm"
                      >
                        <li>
                          <Link
                            href="/publish/submit-manuscript"
                            className="block px-4 py-2 hover:bg-gray-200"
                            onClick={() => setShowDropdown(false)}
                          >
                            Submit Manuscript
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/publish/publish-book"
                            className="block px-4 py-2 hover:bg-gray-200"
                            onClick={() => setShowDropdown(false)}
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
                      className={`text-sm font-medium transition ${
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

            {/* Mobile controls */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenu((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 rounded"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="22" height="2" rx="1" fill="#333" />
                  <rect y="7" width="22" height="2" rx="1" fill="#333" />
                  <rect y="14" width="22" height="2" rx="1" fill="#333" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden bg-white border rounded-md mt-2 p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setShowDropdown((s) => !s)}
                        className="w-full text-left font-medium"
                      >
                        {item.name}
                      </button>
                      {showDropdown && (
                        <div className="pl-4 mt-2 space-y-2">
                          <Link
                            href="/publish/submit-manuscript"
                            onClick={() => setMobileMenu(false)}
                            className="block"
                          >
                            Submit Manuscript
                          </Link>
                          <Link
                            href="/publish/publish-book"
                            onClick={() => setMobileMenu(false)}
                            className="block"
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
                      className="font-medium"
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
