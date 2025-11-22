"use client";
import React from "react";
import { motion } from "framer-motion";
import { pageFade, fadeUp } from "@/app/animations/framer"; // adjust if needed

function Page() {
  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen "
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-7 mt-27 pb-24">

        {/* Heading */}
        <motion.div variants={fadeUp}>
          <h2 className="text-4xl md:text-4xl font-medium text-black mb-3">
            Open Access Statement
          </h2>
          <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
        </motion.div>

        {/* Main Intro */}
        <motion.p
          className="text-justify text-sm md:text-base leading-relaxed"
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

        {/* Section 1 */}
        <motion.section className="space-y-4" variants={fadeUp}>
          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
            variants={fadeUp}
          >
            Open Access supports equal access to scientific information and 
            encourages the exchange of ideas across global research communities. 
            Researchers, professionals, students, and general readers can benefit 
            from published work without the need for login credentials or library 
            authentication.
          </motion.p>

          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
            variants={fadeUp}
          >
            All articles are published under a Creative Commons license. Authors 
            retain the copyright of their work and grant publishing rights to 
            Scholint Publishers. Authors are allowed to:
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-1 text-sm md:text-base"
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
                whileHover={{ x: 6 }}
                className="transition text-gray-800"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
            variants={fadeUp}
          >
            Licensing terms are clearly provided for easy understanding of reuse 
            and attribution.
          </motion.p>
        </motion.section>

        {/* Section 2 */}
        <motion.section className="space-y-4" variants={fadeUp}>
          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
            variants={fadeUp}
          >
            To support publication processes such as editorial handling, peer 
            review, archiving, hosting, and production, an Article Processing 
            Charge (APC) may apply to accepted manuscripts. APC information, 
            waivers, and payment details are provided on the journal’s website.
          </motion.p>

          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
            variants={fadeUp}
          >
            Open Access ensures long-term preservation of research outputs through 
            indexing platforms and secure digital repositories.
          </motion.p>

          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
            variants={fadeUp}
          >
            Scholint Publishers follows ethical publishing standards and ensures 
            transparent practices with accurate author attribution.
          </motion.p>

          <motion.p
            className="text-justify text-sm md:text-base leading-relaxed"
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

export default Page;
