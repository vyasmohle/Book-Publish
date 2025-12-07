"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Page() {
  // Page fade
  const pageFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // --- Data Sections ---
  const sections1 = [
    {
      heading: "Step 1: Prepare Your Paper",
      paragraph:
        "Before submission, authors must ensure that their manuscripts strictly follow the IJPAF Author Guidelines, available on the journal’s website. A well-prepared manuscript accelerates the review and publication process. Authors should:",
      listType: "unordered",
      list: [
        "Format the manuscript according to the journal’s prescribed structure (Title Page, Abstract, Keywords, Introduction, Materials & Methods, Results, Discussion, Conclusion, and References).",
        "Ensure that references are cited correctly using the preferred referencing style mentioned in the guidelines.",
        "Include all relevant tables, figures, and graphs with appropriate captions.",
        "Verify that the work is original, free from plagiarism, and has not been published or submitted elsewhere.",
        "Prepare supplementary files such as a cover letter, conflict of interest statement, and ethical approval certificates (if applicable).",
        "Confirm that all co-authors have reviewed and approved the final version before submission.",
      ],
      afterListParagraph:
        "Taking the time to prepare your paper carefully ensures smooth processing and demonstrates professional research integrity.",
    },
    {
      heading: "Step 2: Login / Register",
      paragraph:
        "Authors must visit the IJPAF Submission Portal to initiate the submission process. New authors can create an account by providing details such as name, institutional affiliation, and contact info. Registered users can log in directly. Once logged in, authors can:",
      listType: "unordered",
      list: [
        "Submit new manuscripts",
        "Track review status of submitted articles",
        "Communicate with the editorial team",
        "Upload revised versions after peer-review feedback",
      ],
      afterListParagraph:
        "The submission portal is intuitive, allowing authors to manage their submissions efficiently at every stage.",
    },
    {
      heading: "Step 3: Upload Your Files",
      paragraph:
        "After logging in, select “Submit New Manuscript” and follow the instructions to upload your files. The following documents are typically required:",
      listType: "ordered",
      list: [
        "Main Manuscript File (in Word format)",
        "Cover Letter describing significance and originality",
        "Figures and Tables in high-resolution formats (JPEG/TIFF)",
        "Declaration Statements (Author contribution, conflict of interest, funding, ethical approval if applicable)",
      ],
      afterListParagraph:
        "Please review all uploaded files before submission. The system will confirm once your manuscript has been received by the editorial office.",
    },
    {
      heading: "Step 4: Peer Review",
      paragraph:
        "Upon submission, your manuscript undergoes initial screening by the editorial board. Once approved, it is sent for double-blind peer review. During review:",
      listType: "unordered",
      list: [
        "Reviewers assess originality, methodology, clarity, and ethical compliance.",
        "Authors may receive reviewer comments or revision requests.",
        "Revised manuscripts must include a response to reviewer feedback.",
      ],
      afterListParagraph:
        "This ensures that all accepted manuscripts meet high academic and scientific standards.",
    },
    {
      heading: "Step 5: Decision & Publication",
      paragraph:
        "After peer review, the editorial board makes a final decision acceptance, revision, or rejection. For accepted manuscripts:",
      listType: "unordered",
      list: [
        "The paper undergoes formatting, proofreading, and quality checks.",
        "Authors are notified of the acceptance and publication schedule.",
        "Articles are published online and made available under open access.",
      ],
      afterListParagraph:
        "Each published paper receives a DOI and is indexed in relevant scholarly databases for greater visibility.",
    },
  ];

  const sections2 = [
    {
      heading: "Article Processing Charges (APC)",
      paragraph:
        "As an open-access publisher, a nominal Article Processing Charge (APC) applies to accepted manuscripts. It covers hosting, indexing, and long-term accessibility. Details about APCs are available on the IJPAF Journal Website.",
    },
    {
      heading: "Publication Ethics",
      paragraph:
        "All parties authors, reviewers, and editors must follow ethical publishing practices. Every published paper should reflect genuine, original, and responsible research.",
    },
  ];

  const sections3 = [
    {
      heading: "1. Responsibilities of Authors",
      paragraph:
        "Authors must ensure accuracy, originality, and integrity of content. Before submission, authors should:",
      listType: "unordered",
      list: [
        "Ensure originality not published or submitted elsewhere.",
        "Present genuine, unaltered data and results.",
        "Cite all sources correctly and disclose funding or sponsorship.",
        "Obtain ethical approvals when needed.",
        "Include only contributors who meet authorship criteria.",
      ],
      afterListParagraph:
        "Submitting the same work to multiple journals or altering results is unethical and may lead to rejection.",
    },
    {
      heading: "2. Plagiarism Policy",
      paragraph:
        "All submissions are checked for plagiarism using standard software. Plagiarism includes:",
      listType: "unordered",
      list: [
        "Copying text, data, or ideas without proper citation.",
        "Reusing published work without permission (self-plagiarism).",
        "Presenting others’ work as one’s own.",
      ],
      afterListParagraph:
        "Detected plagiarism may result in rejection or retraction after publication.",
    },
    {
      heading: "3. Data and Image Integrity",
      paragraph:
        "Authors must ensure that data and images are accurate and honestly presented.",
      listType: "unordered",
      list: [
        "Keep raw data for verification if required.",
        "Avoid using external images without permission.",
        "Label all figures and tables correctly.",
      ],
      afterListParagraph:
        "Data manipulation or falsification will be treated as scientific misconduct.",
    },
  ];

  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen w-full"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 mt-24 md:mt-28 space-y-8 md:space-y-10 pb-24">
        {/* ===== Page Header ===== */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3">
            Manuscript Submission
          </h2>
          <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
        </motion.div>

        {/* ===== Intro Section ===== */}
        <motion.section
          className="space-y-4 sm:space-y-5 md:space-y-6"
          variants={fadeUp}
        >
          <motion.h3
            className="text-lg sm:text-xl font-semibold text-gray-800"
            variants={fadeUp}
          >
            Manuscript Submission Process
          </motion.h3>

          <motion.p
            className="text-justify text-sm sm:text-base leading-relaxed text-gray-800"
            variants={fadeUp}
          >
            Scholint Publishers welcomes the submission of high-quality research
            manuscripts that contribute to scientific and educational progress.
            We ensure a transparent, ethical, and efficient publication process
            for authors worldwide.
            <br />
            Submissions are invited for our open-access journal the
            <strong> International Journal of Pharmacy and Allied Fields
            (IJPAF)</strong> covering all areas of pharmaceutical and allied
            sciences.
          </motion.p>
        </motion.section>

        {/* ===== Why Publish With Us ===== */}
        <motion.section
          className="space-y-4 sm:space-y-5 md:space-y-6"
          variants={fadeUp}
        >
          <motion.h3
            className="text-lg sm:text-xl font-semibold text-gray-800"
            variants={fadeUp}
          >
            Why Publish with Us
          </motion.h3>

          <motion.p
            className="text-justify text-sm sm:text-base text-gray-800"
            variants={fadeUp}
          >
            At Scholint Publishers, we value the efforts of researchers and
            offer:
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-sm sm:text-base space-y-1 text-gray-800"
            variants={fadeUp}
          >
            {[
              "Peer-reviewed quality: Double-blind expert review.",
              "Open Access visibility: Free global availability.",
              "Fast and transparent processing.",
              "Author support throughout the process.",
              "Ethical publishing aligned with COPE standards.",
            ].map((item, i) => (
              <motion.li key={i} >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* ===== Steps Sections ===== */}
        {sections1.map((section, index) => (
          <motion.section
            key={index}
            className="space-y-3 sm:space-y-4 md:space-y-5"
            variants={fadeUp}
          >
            <motion.h3
              className="text-lg sm:text-xl font-semibold text-gray-900"
              variants={fadeUp}
            >
              {section.heading}
            </motion.h3>
            <motion.p
              className="text-justify text-sm sm:text-base text-gray-800"
              variants={fadeUp}
            >
              {section.paragraph}
            </motion.p>

            {section.listType === "ordered" ? (
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
            )}

            <motion.p
              className="text-justify text-sm sm:text-base text-gray-800"
              variants={fadeUp}
            >
              {section.afterListParagraph}
            </motion.p>
          </motion.section>
        ))}

        {/* ===== Contact Info ===== */}
        <motion.div
          className="bg-gray-100 p-4 sm:p-5 rounded-md shadow-sm mt-6 space-y-2 sm:space-y-3"
          variants={fadeUp} 
        >
          <p className="text-sm sm:text-base text-gray-800">
            For submission-related queries, contact:
          </p>
          <p className="font-medium flex items-center gap-2 text-sm sm:text-base">
            <MdEmail className="text-black text-lg" />{" "}
            scholintpublishers@gmail.com |
            <AiOutlineGlobal className="text-black text-lg" />{" "}
            www.scholintpublishers.com
          </p>
        </motion.div>

        {/* ===== Additional Sections ===== */}
        {sections2.map((item, index) => (
          <motion.section
            key={index}
            className="space-y-2 sm:space-y-3 md:space-y-4"
            variants={fadeUp}
          >
            <motion.h3
              className="text-lg sm:text-xl font-semibold text-gray-900"
              variants={fadeUp}
            >
              {item.heading}
            </motion.h3>
            <motion.p
              className="text-justify text-sm sm:text-base text-gray-800"
              variants={fadeUp}
            >
              {item.paragraph}
            </motion.p>
          </motion.section>
        ))}

        {sections3.map((section, index) => (
          <motion.section
            key={index}
            className="space-y-3 sm:space-y-4 md:space-y-5"
            variants={fadeUp}
          >
            <motion.h3
              className="text-lg sm:text-xl font-semibold text-gray-900"
              variants={fadeUp}
            >
              {section.heading}
            </motion.h3>

            <motion.p
              className="text-justify text-sm sm:text-base text-gray-800"
              variants={fadeUp}
            >
              {section.paragraph}
            </motion.p>

            {section.listType === "ordered" ? (
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
            )}

            <motion.p
              className="text-justify text-sm sm:text-base text-gray-800"
              variants={fadeUp}
            >
              {section.afterListParagraph}
            </motion.p>
          </motion.section>
        ))}

        {/* ===== CTA Button ===== */}
        <motion.a
          href="https://ijpaf.com/submit.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2.5 rounded-md bg-[#0c58ca] text-white text-sm sm:text-base font-semibold shadow hover:bg-[#0947a8] transition-all"
          whileHover={{ scale: 1.01 }}
        >
          Submit Manuscript
        </motion.a>
      </main>
    </motion.div>
  );
}
