"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
const pageFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Page() {
  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen w-full flex flex-col"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 mt-20">
        {/* About Section */}
        <motion.section
          className="space-y-4 mt-6 sm:mt-8 md:mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f6f6b] mb-3">
              About Us
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>

          {/* Example Text Content */}
          <motion.p
            className="text-gray-800 text-sm sm:text-base leading-relaxed text-justify max-w-3xl"
            variants={fadeUp}
          >
            Scholint Publishers is dedicated to advancing academic research and
            innovation through open-access publications. Our mission is to
            provide a credible platform for educators, authors, and researchers
            to share knowledge globally and promote scientific collaboration.
          </motion.p>

          <motion.p
            className="text-gray-800 text-sm sm:text-base leading-relaxed text-justify max-w-3xl"
            variants={fadeUp}
          >
            We believe in maintaining editorial transparency, research
            integrity, and accessibility for all readers, ensuring that
            high-quality academic work reaches a global audience.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
