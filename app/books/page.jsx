"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  // Fade-in for full page
  const pageFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-content"
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
          {/* ====== Heading ====== */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
              Publish Your Book With Us
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>

          {/* ====== Paragraph 1 ====== */}
          <motion.p
            className="text-justify"
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            Are you an author, educator, or researcher looking to publish your
            work? We welcome book proposals from individuals and institutions
            across all fields of academic and applied sciences.
          </motion.p>

          {/* ====== Email Box ====== */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 80 }}
            className="bg-gray-100 p-3 rounded-md cursor-pointer"
          >
            <p className="font-medium">
              📘 Submit Your Proposal:{" "}
              <span className="font-semibold">abc@gmail.com</span>
            </p>
          </motion.div>

          {/* ====== Paragraph 2 ====== */}
          <motion.p
            className="text-justify"
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            Our team will assist you with proposal evaluation, editorial
            support, design, and global publication.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
