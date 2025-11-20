"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants (FIXED)
const pageFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-8 mt-22">
        <motion.section
          className="space-y-4 mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
              About Us
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
