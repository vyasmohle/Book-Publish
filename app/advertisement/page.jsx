"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  // Page fade-in
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
      className="bg-[#F4F4F7] pt-5  min-h-content"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-8 mt-22 space-y-10">
        
        {/* ===== Section Wrapper ===== */}
        <motion.section
          className="space-y-4 mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
              Advertise With Us
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>

          {/* Paragraph 1 */}
          <motion.p
            className="text-justify"
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            Promote your brand, institution, or product to a focused audience of 
            researchers, academicians, healthcare professionals, and students 
            through Scholint Publishers.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className="text-justify"
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            Our platform offers high visibility among readers and contributors 
            from pharmacy, medical, life sciences, and allied fields through our 
            journals and publications.
          </motion.p>

          {/* Email Card */}
          <motion.div
            className="bg-gray-100 p-3 rounded-md shadow-sm cursor-pointer"
            variants={fadeUp}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
            }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <p className="font-medium">
              📧 For Advertisement Enquiries:{" "}
              <span className="font-semibold">
                ads@scholintpublishers.com
              </span>
            </p>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
