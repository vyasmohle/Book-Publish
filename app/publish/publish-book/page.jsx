"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Page() {
  // Page fade animation
  const pageFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sections1 = [
    {
      heading: "What We Publish",
      paragraph:
        "We welcome book proposals and manuscripts across a wide range of academic, scientific, and professional fields. We primarily focus on:",
      listType: "unordered",
      list: [
        "Pharmaceutical and Allied Sciences",
        "Life Sciences and Biotechnology",
        "Medical and Health Sciences",
        "Engineering and Applied Sciences",
        "Social Sciences and Education",
        "Interdisciplinary and Emerging Fields",
      ],
      afterListParagraph:
        "We accept proposals for textbooks, reference books, edited volumes, conference proceedings, and academic monographs. Whether you are an individual author or part of an institution, we provide full editorial and production support to bring your book to publication.",
    },
    {
      heading: "Why Publish with Us",
      paragraph:
        "Publishing a book with Scholint Publishers offers authors several key advantages:",
      listType: "unordered",
      list: [
        "Professional Editing and Design: Our editorial team ensures your book meets academic standards with careful editing, formatting, and layout design.",
        "ISBN and Copyright Registration: Each published book is assigned an ISBN and registered under the author’s copyright.",
        "Global Online Availability: Books are made available through online platforms for worldwide visibility and accessibility.",
        "Open Access Option: Authors can choose to make their books freely accessible online for greater reach and citation.",
        "Transparent Process: We maintain clear communication at every stage from proposal to publication.",
      ],
      afterListParagraph:
        "Our goal is to make the publishing experience smooth, transparent, and rewarding.",
    },
    {
      heading: "The Publishing Process",
      paragraph:
        "Publishing with Scholint Publishers involves the following steps:",
      listType: "ordered",
      list: [
        "Submit Your Proposal",
        "Editorial Evaluation",
        "Manuscript Preparation",
        "Review and Proofing",
        "Publication and Distribution",
      ],
      afterListParagraph: "",
    },
    {
      heading: "1. Submit Your Proposal",
      paragraph: "Authors should send a book proposal that includes:",
      listType: "unordered",
      list: [
        "Title and brief description of the book",
        "Table of contents or chapter outline",
        "Target audience and subject area",
        "Short author biography",
        "Sample chapter (if available)",
      ],
      afterListParagraph:
        "Proposals can be submitted directly through email at books@scholintpublishers.com.",
    },
    {
      heading: "2. Editorial Evaluation",
      paragraph:
        "Once received, your proposal will be reviewed by our editorial team or subject experts to assess its relevance, originality, and suitability for publication.",
      listType: "none",
      list: [],
      afterListParagraph:
        "If accepted, we will contact you with the publishing terms and next steps.",
    },
    {
      heading: "3. Manuscript Preparation",
      paragraph:
        "After approval, authors are required to prepare the full manuscript according to our Author Guidelines for Book Publishing (to be provided upon acceptance).",
      listType: "none",
      list: [],
      afterListParagraph:
        "Our editorial team assists with formatting, referencing, cover design, and typesetting to ensure professional presentation.",
    },
    {
      heading: "4. Review and Proofing",
      paragraph:
        "The completed manuscript undergoes an internal review for quality and consistency.",
      listType: "none",
      list: [],
      afterListParagraph:
        "Authors receive proofs for final corrections before publication to ensure the final version meets expectations.",
    },
    {
      heading: "5. Publication and Distribution",
      paragraph:
        "After final approval, the book is published and made available in print and digital formats.",
      listType: "none",
      list: [],
      afterListParagraph:
        "Each title receives an ISBN, is listed on our official website, and can be made available through online platforms. Open-access books are freely accessible to readers worldwide.",
    },
    {
      heading: "Book Promotion and Author Support",
      paragraph:
        "We believe that every book deserves visibility. Our team promotes newly published books through our website, newsletters, and academic channels.",
      listType: "unordered",
      list: [
        "Complimentary digital copies",
        "Discounted author copies (in print, if available)",
        "Continuous visibility through our publishing network",
      ],
      afterListParagraph:
        "We also collaborate with institutions and libraries for wider distribution and indexing opportunities.",
    },
  ];

  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen w-full"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 mt-24 md:mt-28 space-y-10 md:space-y-12 pb-24">
        {/* ===== Top Section ===== */}
        <motion.section
          className="space-y-4 sm:space-y-5 md:space-y-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black"
            variants={fadeUp}
          >
            Publish Your Book with Scholint Publishers
          </motion.h1>

          <div className="h-0.5 w-full bg-[#f3c1b0] mb-2"></div>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Scholint Publishers invites authors, educators, researchers, and
            professionals to publish their academic and educational books with
            us. We aim to provide a reliable platform for authors who wish to
            share their knowledge, ideas, and research outcomes with a global
            audience. Our publishing model focuses on quality, accessibility, and
            author satisfaction ensuring that every book we publish adds
            genuine value to the academic and professional community.
          </motion.p>
        </motion.section>

        {/* ===== Dynamic Sections ===== */}
        {sections1.map((section, index) => (
          <motion.section
            key={index}
            className="space-y-3 sm:space-y-4 md:space-y-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-semibold text-black"
              variants={fadeUp}
            >
              {section.heading}
            </motion.h2>

            <motion.p
              className="text-justify text-sm sm:text-base text-gray-800"
              variants={fadeUp}
            >
              {section.paragraph}
            </motion.p>

            {section.listType !== "none" &&
              (section.listType === "ordered" ? (
                <motion.ol
                  className="list-decimal list-inside space-y-1 text-sm sm:text-base text-gray-800"
                  variants={fadeUp}
                >
                  {section.list.map((item, i) => (
                    <motion.li key={i} >
                      {item}
                    </motion.li>
                  ))}
                </motion.ol>
              ) : (
                <motion.ul
                  className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-800"
                  variants={fadeUp}
                >
                  {section.list.map((item, i) => (
                    <motion.li key={i} >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              ))}

            {section.afterListParagraph && (
              <motion.p
                className="text-justify text-sm sm:text-base text-gray-800"
                variants={fadeUp}
              >
                {section.afterListParagraph}
              </motion.p>
            )}
          </motion.section>
        ))}

        {/* ===== Final Section ===== */}
        <motion.section
          className="space-y-4 sm:space-y-5 md:space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-black"
            variants={fadeUp}
          >
            Start Your Publishing Journey
          </motion.h2>

          <motion.p
            className="text-justify text-sm sm:text-base text-gray-800"
            variants={fadeUp}
          >
            If you are planning to publish a textbook, reference book, or
            research monograph, we would be glad to assist you through each stage
            of the publishing process.
          </motion.p>

          {/* Contact Card */}
          <motion.div
            className="bg-gray-100 p-4 sm:p-5 rounded-md shadow-sm space-y-2 sm:space-y-3"
            variants={fadeUp}
            whileHover={{ scale: 1.01, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
          >
            <p className="font-medium flex items-center gap-2 text-sm sm:text-base text-gray-900">
              <MdEmail className="text-black text-lg sm:text-xl" /> Submit your
              proposal:{" "}
              <span className="font-semibold">
                books@scholintpublishers.com
              </span>
            </p>
            <p className="font-medium flex items-center gap-2 text-sm sm:text-base text-gray-900">
              <AiOutlineGlobal className="text-black text-lg sm:text-xl" /> Visit:{" "}
              <span className="font-semibold">www.scholintpublishers.com</span>
            </p>
          </motion.div>

          <motion.p
            className="text-justify text-sm sm:text-base text-gray-800"
            variants={fadeUp}
          >
            Your ideas deserve to be read, shared, and cited.
          </motion.p>

          <motion.p
            className="text-justify text-sm sm:text-base text-gray-800"
            variants={fadeUp}
          >
            Let Scholint Publishers help you bring your work to readers around the
            world.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
