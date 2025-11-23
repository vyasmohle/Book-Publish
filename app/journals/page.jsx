"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";

const Journals = "/images/journals.jpg";

export default function BrowseJournalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");

  const categories = [
    "All Disciplines",
    "Pharmacy",
    "Biological Sciences",
    "Physical Sciences",
    "Engineering & Technology",
    "Humanities & Arts",
    "Social Sciences",
    "Medical & Health",
    "Environmental Studies",
  ];

  return (
    <motion.div
      className="flex flex-col md:flex-row bg-[#F4F4F7] min-h-screen mt-24 px-4 sm:px-6 md:px-8 pb-10 overflow-y-auto md:overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* ===== Sidebar ===== */}
      <aside className="md:w-64 bg-white p-6 shadow-md md:sticky md:top-[130px] h-fit rounded-lg mb-6 md:mb-0">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          Browse by Category
        </h2>
        <div className="h-[2px] w-full bg-[#e4b199] mb-4"></div>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm sm:text-base transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#1f6f6b] text-white"
                    : "text-gray-700 hover:bg-[#1f6f6b]/80 hover:text-white"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 md:ml-8">
        {/* ===== Search Bar ===== */}
        <div className="mb-6 md:mt-10 mt-5">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none">
              <IoIosSearch className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search journals, topics, authors..."
              className="w-full pl-10 pr-3 py-3 text-sm sm:text-base rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f6f6b] bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* ===== Journal Box ===== */}
        <div className="flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full sm:w-[80%] md:w-[60%] gap-6 justify-items-center">
            <a
              href="https://ijpaf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={Journals}
                alt="Journal Thumbnail"
                className="w-full h-80 md:h-82 sm:h-96 object-contain bg-white"
              />
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
