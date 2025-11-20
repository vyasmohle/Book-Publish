"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  // Fade-in for full page
  const pageFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Fade up for sections
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
              Our Journals
            </h2>
            <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            className="text-justify italic"
            variants={fadeUp}
          >
            All our journals are open access, allowing unrestricted online access
            to published research for readers and institutions worldwide.
          </motion.p>

          {/* Main Content */}
          <motion.div
            className="space-y-2"
            variants={fadeUp}
          >
            <motion.h3
              className="text-md font-semibold"
              variants={fadeUp}
            >
              Current Journal
            </motion.h3>

            <motion.p
              className="font-medium"
              variants={fadeUp}
            >
              International Journal of Pharmacy and Allied Fields (IJPAF)
            </motion.p>

            {/* Journal Info Card */}
            <motion.div
              className="bg-gray-100 p-3 rounded-md space-y-1 shadow-sm hover:shadow-md transition-all cursor-pointer"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <p>
                ISSN (Online):{" "}
                <span className="font-semibold">[To be updated]</span>
              </p>
              <p>
                Frequency: <span className="font-semibold">Monthly</span>
              </p>
              <p>
                Access Type: <span className="font-semibold">Open Access</span>
              </p>
              <p>
                Website: <span className="font-semibold">www.ijpaf.com</span>
              </p>
            </motion.div>

            {/* Paragraphs */}
            <motion.p
              className="text-justify"
              variants={fadeUp}
            >
              The International Journal of Pharmacy and Allied Fields (IJPAF) is a
              peer-reviewed open-access journal dedicated to publishing high-quality
              research papers, reviews, and short communications in pharmaceutical
              sciences, medical sciences, biotechnology, and allied fields.
            </motion.p>

            <motion.p
              className="text-justify"
              variants={fadeUp}
            >
              IJPAF aims to create a platform for researchers, academicians, and
              professionals to share their latest findings and innovations that
              contribute to the advancement of healthcare and life sciences.
            </motion.p>

            {/* Scope of Journal */}
            <motion.h3
              className="text-md font-semibold mt-4"
              variants={fadeUp}
            >
              Scope of the Journal
            </motion.h3>

            <motion.ul
              className="list-disc list-inside space-y-1"
              variants={fadeUp}
            >
              {[
                "Pharmaceutical Chemistry and Analysis",
                "Pharmacology and Toxicology",
                "Pharmaceutics and Drug Delivery Systems",
                "Pharmacognosy and Herbal Medicine",
                "Clinical and Hospital Pharmacy",
                "Biotechnology and Bioinformatics",
                "Biomedical and Health Sciences",
                "Regulatory Affairs and Pharmaceutical Management",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="hover:text-[#1f6f6b] transition"
                  whileHover={{ x: 6 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="text-justify"
              variants={fadeUp}
            >
              The journal also considers interdisciplinary studies that connect
              pharmacy with fields like public health, biotechnology, and life
              sciences.
            </motion.p>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
