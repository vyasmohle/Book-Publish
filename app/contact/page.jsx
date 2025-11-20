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
      className="bg-[#F4F4F7] min-h-screen"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-8 mt-22 space-y-10">

        {/* ===== Section Wrapper ===== */}
        <motion.section
          className="space-y-6 mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
              Get in Touch
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>

          <div className="space-y-5">

            {/* ===== Address Card ===== */}
            <motion.div
              className="bg-white p-4 rounded-md shadow-sm"
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-lg font-semibold mb-1">📍 Address:</h3>
              <p className="text-justify">
                Scholint Publishers
                <br />
                [Your Office Address Here]
                <br />
                (You can update this with your actual office or correspondence
                address later.)
              </p>
            </motion.div>

            {/* ===== Email Card ===== */}
            <motion.div
              className="bg-white p-4 rounded-md shadow-sm"
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-lg font-semibold mb-2">📧 Email:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>General Enquiries:</strong> info@scholintpublishers.com
                </li>
                <li>
                  <strong>Journal Submissions:</strong> editor@ijpaf.com
                </li>
                <li>
                  <strong>Book Proposals:</strong> books@scholintpublishers.com
                </li>
                <li>
                  <strong>Advertisements:</strong> ads@scholintpublishers.com
                </li>
              </ul>
            </motion.div>

            {/* ===== Website Card ===== */}
            <motion.div
              className="bg-white p-4 rounded-md shadow-sm"
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-lg font-semibold mb-1">🌐 Website:</h3>
              <p>www.scholintpublishers.com</p>
            </motion.div>

            {/* ===== Phone Card ===== */}
            <motion.div
              className="bg-white p-4 rounded-md shadow-sm"
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-lg font-semibold mb-1">📞 Phone (optional):</h3>
              <p>+91-XXXXXXXXXX</p>
            </motion.div>

            {/* ===== Office Hours Card ===== */}
            <motion.div
              className="bg-white p-4 rounded-md shadow-sm"
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Monday to Saturday: 10:00 AM – 6:00 PM (IST)</li>
                <li>Sunday: Closed</li>
              </ul>
            </motion.div>

          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
