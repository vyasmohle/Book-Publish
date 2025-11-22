"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const pageFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <motion.div
      className="bg-[#F4F4F7] w-full min-h-screen flex flex-col"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 mt-20 space-y-10">
        <motion.section
          className="space-y-4 sm:space-y-6 md:space-y-8 mt-6 sm:mt-8 md:mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {/* ====== Heading ====== */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3">
              Publish Your Book with Us
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>

          {/* ====== Paragraph 1 ====== */}
          <motion.p
            className="text-gray-800 text-sm sm:text-base leading-relaxed text-justify max-w-3xl"
            variants={fadeUp}
           
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
            className="bg-gray-100 p-3 sm:p-4 rounded-md cursor-pointer max-w-lg"
          >
            <p className="font-medium text-gray-800 text-sm sm:text-base">
              Submit Your Proposal:{" "}
              <span className="font-semibold text-[#0c58ca]">
                scholintpublishers@gmail.com
              </span>
            </p>
          </motion.div>

          {/* ====== Paragraph 2 ====== */}
          <motion.p
            className="text-gray-800 text-sm sm:text-base leading-relaxed text-justify max-w-3xl"
            variants={fadeUp}
           
            
          >
            Our team will assist you with proposal evaluation, editorial
            support, design, and global publication.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
