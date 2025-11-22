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

export default function Page() {
  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen w-full"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 mt-24 md:mt-28 space-y-8 md:space-y-10 pb-24">
        {/* ===== Heading ===== */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3">
            Open Access Statement
          </h2>
          <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
        </motion.div>

        {/* ===== Main Intro ===== */}
        <motion.p
          className="text-justify text-sm sm:text-base md:text-[1rem] leading-relaxed text-gray-800"
          variants={fadeUp}
        >
          Scholint Publishers follows an Open Access publishing system, allowing
          all published articles and scholarly content to be freely accessible
          online. There are no subscription costs or access restrictions for
          readers. Anyone can read, download, print, or share the published
          material for educational and non-commercial purposes, provided the
          original work is properly cited. This model ensures that knowledge
          generated through research is available to a wider audience without
          financial or institutional limitations.
        </motion.p>

        {/* ===== Section 1 ===== */}
        <motion.section
          className="space-y-4 sm:space-y-5 md:space-y-6"
          variants={fadeUp}
        >
          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Open Access supports equal access to scientific information and
            encourages the exchange of ideas across global research communities.
            Researchers, professionals, students, and general readers can
            benefit from published work without the need for login credentials
            or library authentication.
          </motion.p>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            All articles are published under a Creative Commons license. Authors
            retain the copyright of their work and grant publishing rights to
            Scholint Publishers. Authors are allowed to:
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-800"
            variants={fadeUp}
          >
            {[
              "Reuse their published material in future scientific works",
              "Archive the final published version in institutional repositories",
              "Share the article on personal or academic networks",
              "Provide copies to colleagues for research purposes",
            ].map((item, i) => (
              <motion.li
                key={i}
              
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-all"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Licensing terms are clearly provided for easy understanding of reuse
            and attribution.
          </motion.p>
        </motion.section>

        {/* ===== Section 2 ===== */}
        <motion.section
          className="space-y-4 sm:space-y-5 md:space-y-6"
          variants={fadeUp}
        >
          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            To support publication processes such as editorial handling, peer
            review, archiving, hosting, and production, an Article Processing
            Charge (APC) may apply to accepted manuscripts. APC information,
            waivers, and payment details are provided on the journal’s website.
          </motion.p>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Open Access ensures long-term preservation of research outputs
            through indexing platforms and secure digital repositories.
          </motion.p>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Scholint Publishers follows ethical publishing standards and ensures
            transparent practices with accurate author attribution.
          </motion.p>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Through Open Access, authors receive improved visibility, and readers
            gain barrier-free access to reliable scholarly work.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
