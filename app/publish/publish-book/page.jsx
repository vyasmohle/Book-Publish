"use client";

import React from "react";
import { motion } from "framer-motion";

export default function page() {
  // Page fade animation
  const pageFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        "Transparent Process: We maintain clear communication at every stage — from proposal to publication.",
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
      paragraph:
        "Authors should send a book proposal that includes the following:",
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
        "Authors receive proofs for final corrections before the book is published. This step ensures that both author and publisher are satisfied with the final version.",
    },

    {
      heading: "5. Publication and Distribution",
      paragraph:
        "After final approval, the book is published and made available in print and digital formats.",
      listType: "none",
      list: [],
      afterListParagraph:
        "Each title receives an ISBN, is listed on our official website, and can be made available through various online platforms. Authors choosing the open-access option will have their books freely accessible for readers around the world.",
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
    // <main className="max-w-7xl mx-auto px-4 py-8">
    //   {/* <h1 className="text-3xl font-bold mb-4 text-center">
    //    Book publish
    //   </h1> */}

    //   <section className="mb-10 mt-10">
    //     <h1 className="text-lg font-semibold mb-2">
    //       Publish Your Book with Scholint Publishers
    //     </h1>
    //     <p className="text-justify leading-5.5 mb-4">
    //       Scholint Publishers invites authors, educators, researchers, and
    //       professionals to publish their academic and educational books with us.
    //       We aim to provide a reliable platform for authors who wish to share
    //       their knowledge, ideas, and research outcomes with a global audience.{" "}
    //       <br />
    //       Our publishing model focuses on quality, accessibility, and author
    //       satisfaction — ensuring that every book we publish adds genuine value
    //       to the academic and professional community.
    //     </p>
    //   </section>

    //   {sections1.map((section, index) => (
    //     <section key={index} className="space-y-2">
    //       <h2 className="text-lg font-semibold">{section.heading}</h2>

    //       <p className="text-justify">{section.paragraph}</p>

    //       {section.listType !== "none" &&
    //         (section.listType === "ordered" ? (
    //           <ol className="list-decimal list-inside">
    //             {section.list.map((item, i) => (
    //               <li key={i}>{item}</li>
    //             ))}
    //           </ol>
    //         ) : (
    //           <ul className="list-disc list-inside">
    //             {section.list.map((item, i) => (
    //               <li key={i}>{item}</li>
    //             ))}
    //           </ul>
    //         ))}

    //       <p className="text-justify mb-2">{section.afterListParagraph}</p>
    //     </section>
    //   ))}

    //   <section className="space-y-4">
    //     <h2 className="text-lg font-semibold">Start Your Publishing Journey</h2>

    //     <p className="text-justify">
    //       If you are planning to publish a textbook, reference book, or research
    //       monograph, we would be glad to assist you through each stage of the
    //       publishing process.
    //     </p>

    //     <div className="bg-gray-100 p-3 rounded-md space-y-1">
    //       <p className="font-medium">
    //         📧 Submit your proposal:{" "}
    //         <span className="font-semibold">books@scholintpublishers.com</span>
    //       </p>
    //       <p className="font-medium">
    //         🌐 Visit:{" "}
    //         <span className="font-semibold">www.scholintpublishers.com</span>
    //       </p>
    //     </div>

    //     <p className="text-justify">
    //       Your ideas deserve to be read, shared, and cited.
    //     </p>

    //     <p className="text-justify">
    //       Let Scholint Publishers help you bring your work to readers around the
    //       world.
    //     </p>
    //   </section>
    // </main>
     <motion.div
      className="bg-[#F4F4F7] min-h-screen mt-27 pb-24"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-10 mt-10">

        {/* Top Section */}
        <motion.section
          className="mb-10 space-y-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl font-medium text-black"
            variants={fadeUp}
          >
            Publish Your Book with Scholint Publishers
          </motion.h1>

          <div className="h-0.5 w-full bg-[#f3c1b0] mb-3"></div>

          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Scholint Publishers invites authors, educators, researchers, and
            professionals to publish their academic and educational books with us.
            We aim to provide a reliable platform for authors who wish to share
            their knowledge, ideas, and research outcomes with a global audience.
            <br />
            Our publishing model focuses on quality, accessibility, and author
            satisfaction — ensuring that every book we publish adds genuine value
            to the academic and professional community.
          </motion.p>
        </motion.section>

        {/* Dynamically Rendered Sections */}
        {sections1.map((section, index) => (
          <motion.section
            key={index}
            className="space-y-3 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-xl font-semibold text-black"
              variants={fadeUp}
            >
              {section.heading}
            </motion.h2>

            <motion.p className="text-justify" variants={fadeUp}>
              {section.paragraph}
            </motion.p>

            {section.listType !== "none" &&
              (section.listType === "ordered" ? (
                <motion.ol
                  className="list-decimal list-inside space-y-1"
                  variants={fadeUp}
                >
                  {section.list.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="transition"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ol>
              ) : (
                <motion.ul
                  className="list-disc list-inside space-y-1"
                  variants={fadeUp}
                >
                  {section.list.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="transition"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              ))}

            <motion.p className="text-justify" variants={fadeUp}>
              {section.afterListParagraph}
            </motion.p>
          </motion.section>
        ))}

        {/* Final Section */}
        <motion.section
          className="space-y-4 mt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-semibold text-black"
            variants={fadeUp}
          >
            Start Your Publishing Journey
          </motion.h2>

          <motion.p className="text-justify" variants={fadeUp}>
            If you are planning to publish a textbook, reference book, or research
            monograph, we would be glad to assist you through each stage of the
            publishing process.
          </motion.p>

          {/* Card Animation */}
          <motion.div
            className="bg-gray-100 p-4 rounded-md shadow-sm space-y-2"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-medium">
              📧 Submit your proposal:{" "}
              <span className="font-semibold">books@scholintpublishers.com</span>
            </p>
            <p className="font-medium">
              🌐 Visit:{" "}
              <span className="font-semibold">www.scholintpublishers.com</span>
            </p>
          </motion.div>

          <motion.p className="text-justify" variants={fadeUp}>
            Your ideas deserve to be read, shared, and cited.
          </motion.p>

          <motion.p className="text-justify" variants={fadeUp}>
            Let Scholint Publishers help you bring your work to readers around the
            world.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
