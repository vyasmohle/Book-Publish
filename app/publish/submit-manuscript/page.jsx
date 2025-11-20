"use client";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  // Page fade
  const pageFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const sections1 = [
    {
      heading: "Step 1: Prepare Your Paper",
      paragraph:
        "Before submission, authors must ensure that their manuscripts strictly follow the IJPAF Author Guidelines, which are available on the journal’s website. A well-prepared manuscript accelerates the review and publication process. Authors should:",
      list: [
        "Format the manuscript according to the journal’s prescribed structure (Title Page, Abstract, Keywords, Introduction, Materials & Methods, Results, Discussion, Conclusion, and References).",
        "Ensure that references are cited correctly using the preferred referencing style mentioned in the guidelines.",
        "Include all relevant tables, figures, and graphs with appropriate captions.",
        "Verify that the work is original, free from plagiarism, and has not been published or submitted elsewhere.",
        "Prepare supplementary files such as a cover letter, conflict of interest statement, and ethical approval certificates (if applicable).",
        "Confirm that all co-authors have reviewed and approved the final version of the manuscript before submission.",
      ],
      afterListParagraph:
        "Taking the time to prepare your paper carefully ensures smooth processing and demonstrates professional research integrity.",
    },

    {
      heading: "Step 2: Login / Register",
      paragraph:
        "Authors must visit the IJPAF Submission Portal to initiate the submission process. If you are a new author, you will need to create an account by providing your name, institutional affiliation, email address, and contact details. Registered users can simply log in using their existing credentials. Once logged in, authors can:",
      list: [
        "Submit new manuscripts",
        "Track the review status of submitted articles",
        "Communicate with the editorial team",
        "Upload revised versions after peer-review feedback",
      ],
      afterListParagraph:
        "The submission portal is designed to be intuitive, allowing authors to manage their submissions efficiently at every stage.",
    },

    {
      heading: "Step 3: Upload Your Files",
      paragraph:
        "After logging in, select “Submit New Manuscript” and follow the on-screen instructions to upload your files. The following documents are typically required:",
      list: [
        "Main Manuscript File (in Word format)",
        "Cover Letter briefly describing the significance and originality of the work",
        "Figures and Tables in high-resolution formats (JPEG/TIFF)",
        "Declaration Statements (Author contribution, conflict of interest, funding support, and ethical approval if applicable)",
      ],
      listType: "ordered", // <-- ordered list requirement
      afterListParagraph:
        "Please review all uploaded files carefully before final submission. The system will confirm once your manuscript has been successfully received by the editorial office.",
    },

    {
      heading: "Step 4: Peer Review",
      paragraph:
        "Upon submission, your manuscript undergoes an initial screening by the editorial board to ensure it meets the basic quality and formatting standards. Once cleared, it is assigned to expert reviewers in the relevant field for double-blind peer review. During the review process:",
      list: [
        "Reviewers evaluate the manuscript for originality, methodology, clarity, ethical compliance, and overall contribution to the field.",
        "Authors may receive reviewer comments or recommendations for revision.",
        "Revised manuscripts must be resubmitted through the same online system, with a detailed response to reviewer feedback.",
      ],
      afterListParagraph:
        "This stage ensures that all accepted manuscripts maintain high academic and scientific standards.",
    },

    {
      heading: "Step 5: Decision & Publication",
      paragraph:
        "After the peer-review process is complete, the editorial board makes a final decision — acceptance, revision, or rejection — based on reviewer feedback and editorial evaluation. For accepted manuscripts:",
      list: [
        "The paper undergoes final formatting, proofreading, and quality checks to meet publication standards.",
        "Authors are notified of the acceptance and provided with the publication schedule.",
        "Once finalized, the article is published online in the next scheduled issue of IJPAF and becomes immediately available to readers worldwide under the open-access model.",
      ],
      afterListParagraph:
        "Each published paper receives a DOI and is indexed in relevant scholarly databases to enhance visibility and citation.",
    },
  ];

  const sections2 = [
    {
      heading: "Article Processing Charges (APC)",
      paragraph:
        "As an open-access publisher, a nominal Article Processing Charge (APC) is applicable for accepted manuscripts to cover the costs of online hosting, indexing, and long-term accessibility. Details about APCs are available on the IJPAF Journal Website.",
    },
    {
      heading: "Publication Ethics",
      paragraph:
        "Maintaining ethical standards is essential in academic publishing. All parties involved in the publication process — authors, reviewers, and editors — are expected to follow honest and transparent practices. The goal is to ensure that every published paper reflects genuine, original, and responsible research.",
    },
  ];

  const sections3 = [
    {
      heading: "1. Responsibilities of Authors",
      paragraph:
        "Authors are responsible for the accuracy, originality, and integrity of the content they submit. Before submitting a manuscript, authors should ensure the following:",
      list: [
        "The work is original and has not been published or submitted elsewhere.",
        "All data, results, and figures are genuine and not fabricated or altered.",
        "The manuscript properly cites all references, sources, and previous research used.",
        "Any financial support or sponsorship is clearly disclosed.",
        "The study has received all required ethical approvals, especially for research involving humans or animals.",
        "All authors listed have contributed significantly to the research and approved the final manuscript.",
        "No one who did not contribute intellectually should be added as an author.",
      ],
      afterListParagraph:
        "Submitting the same work to multiple journals or manipulating results to gain publication is considered unethical and will lead to rejection or blacklisting.",
    },

    {
      heading: "2. Plagiarism Policy",
      paragraph:
        "All submissions are checked for plagiarism using standard plagiarism detection software. Plagiarism includes:",
      list: [
        "Copying text, data, or ideas without proper citation.",
        "Reusing portions of previously published work without permission (self-plagiarism).",
        "Presenting others’ work as one’s own.",
        "If plagiarism or unethical similarity is found during review, the paper will be rejected immediately.",
      ],
      afterListParagraph:
        "If discovered after publication, the article may be retracted and an official note of retraction will be issued.",
    },

    {
      heading: "3. Data and Image Integrity",
      paragraph:
        "Authors must ensure that the data presented in the manuscript are accurate and honestly obtained. Any modification of images, graphs, or figures must not alter the interpretation of results.",
      list: [
        "Keep all raw data and original images safely for verification if required.",
        "Avoid using images taken from other sources without permission or citation.",
        "Clearly label all figures, tables, and results.",
      ],
      afterListParagraph:
        "Falsification or manipulation of data will be treated as serious scientific misconduct.",
    },

    {
      heading: "4. Authorship Criteria",
      paragraph:
        "Authorship should reflect actual intellectual contribution. To qualify as an author, a person must have participated in:",
      list: [
        "The design or concept of the study,",
        "Data collection or analysis, and",
        "Writing or revising the manuscript.",
      ],
      afterListParagraph:
        "Individuals who provided technical help or financial assistance should be acknowledged but not listed as authors. Any changes in authorship must be approved by all authors before acceptance.",
    },

    {
      heading: "5. Reviewer Responsibilities",
      paragraph:
        "Peer reviewers play a key role in maintaining the quality of published papers. Reviewers are expected to:",
      list: [
        "Provide fair, constructive, and timely feedback.",
        "Evaluate manuscripts only in their area of expertise.",
        "Maintain confidentiality of all manuscripts.",
        "Not use any part of the reviewed content for personal benefit.",
        "Inform the editor if they detect plagiarism or data falsification.",
      ],
      afterListParagraph:
        "Reviewers should decline to review if they have personal or professional conflicts of interest.",
    },

    {
      heading: "6. Editorial Responsibilities",
      paragraph:
        "Editors are responsible for ensuring a fair and transparent review process. They must:",
      list: [
        "Make decisions based solely on the quality and originality of the manuscript.",
        "Maintain confidentiality throughout the process.",
        "Ensure that the peer review is unbiased and ethical.",
        "Take action on ethical concerns raised by reviewers or readers.",
        "Publish corrections or retractions when necessary.",
      ],
      afterListParagraph:
        "Editorial decisions are not influenced by personal, political, or commercial factors.",
    },

    {
      heading: "7. Handling Misconduct",
      paragraph:
        "If unethical behavior or misconduct is suspected, the editorial office will investigate carefully. The steps may include:",
      list: [
        "Notifying the author(s) and requesting an explanation.",
        "Examining all available evidence related to the issue.",
        "Taking appropriate action, including rejection or retraction.",
      ],
      afterListParagraph:
        "All investigations are conducted confidentially and fairly.",
      ordered: true, // ➝ IMPORTANT: this marks this step list as ordered (1,2,3)
    },

    {
      heading: "8. Retraction and Correction Policy",
      paragraph:
        "If a published paper is found to have ethical issues, a retraction notice will be issued. If errors do not affect the main findings, a correction will be published.",
      list: [
        "Retraction notices are issued for severe ethical violations.",
        "Minor errors result in corrections or errata.",
        "All notices remain part of the permanent record for transparency.",
      ],
      afterListParagraph: "",
    },

    {
      heading: "9. Declaration of Ethical Compliance",
      paragraph: "By submitting a manuscript, authors confirm the following:",
      list: [
        "The work follows international research ethics.",
        "All data and results are presented truthfully.",
        "All authors agree to the submission and its content.",
      ],
      afterListParagraph:
        "This declaration is a mandatory part of the submission process.",
    },
  ];

  return (
    //     <main className="max-w-7xl mx-auto px-4 py-8 space-y-7 mt-10">
    //       <h1 className="text-3xl font-bold mb-4 text-center">
    //         MANUSCRIPT SUBMISSION
    //       </h1>
    //       Manuscript Submission Process
    //       <section>
    //         {/* <h1 className="text-lg font-semibold mb-2">
    //           About Scholint Publishers
    //         </h1> */}
    //         <p className="text-justify leading-5.5 mb-4">
    //           Scholint Publishers welcomes the submission of original and
    //           high-quality research manuscripts that contribute to the advancement
    //           of scientific and educational knowledge. We are committed to providing
    //           a transparent, efficient, and ethical publication process that ensures
    //           the rapid and responsible dissemination of scholarly work. <br />
    //           Currently, we invite submissions for our open-access journal, the
    //           International Journal of Pharmacy and Allied Fields (IJPAF), which
    //           publishes original research articles, reviews, and case studies in all
    //           areas of pharmaceutical and allied sciences.
    //         </p>
    //       </section>
    //       <section className="space-y-4">
    //         <h1 className="text-lg font-semibold mb-2">Why Publish with Us</h1>
    //         <p className=" text-justify">
    //           At Scholint Publishers, we value the efforts of researchers and strive
    //           to provide:
    //         </p>

    //         <ul className="list-disc list-inside ">
    //           <li>
    //             Peer-Reviewed Quality: Every submission undergoes a thorough
    //             double-blind peer-review by experts in the relevant field.
    //           </li>
    //           <li>
    //             Open Access Visibility: Published articles are freely available
    //             worldwide, ensuring maximum visibility and citation potential.
    //           </li>
    //           <li>
    //             Fast and Transparent Processing: Our editorial team ensures timely
    //             communication and efficient review timelines.
    //           </li>
    //           <li>
    //             Author Support: From submission to publication, authors receive
    //             continuous support from our editorial and technical teams.
    //           </li>
    //           <li>
    //             Ethical Publishing Practices: We adhere to COPE and international
    //             publishing standards to ensure fairness and credibility.
    //           </li>
    //         </ul>
    //       </section>
    //       <h1 className="text-3xl font-bold mb-4 text-center">
    //         MANUSCRIPT SUBMISSION PROCESS
    //       </h1>
    //       {sections1.map((section, index) => (
    //         <section key={index} className="space-y-2">
    //           <h2 className="text-lg font-semibold">{section.heading}</h2>

    //           <p className="text-justify">{section.paragraph}</p>

    //           {section.listType === "ordered" ? (
    //             <ol className="list-decimal list-inside">
    //               {section.list.map((item, i) => (
    //                 <li key={i}>{item}</li>
    //               ))}
    //             </ol>
    //           ) : (
    //             <ul className="list-disc list-inside">
    //               {section.list.map((item, i) => (
    //                 <li key={i}>{item}</li>
    //               ))}
    //             </ul>
    //           )}

    //           <p className="text-justify">{section.afterListParagraph}</p>
    //         </section>
    //       ))}
    //       <div className="space-y-1">
    //         <p>📧 For submission-related queries, authors may contact:</p>
    //         <p>editor@ijpaf.com | 🌐 www.ijpaf.com</p>
    //       </div>

    //       {sections2.map((item, index) => (
    //         <div key={index} className="space-y-2 mb-2">
    //           <h3 className="text-lg font-semibold">{item.heading}</h3>
    //           <p className="text-justify">{item.paragraph}</p>
    //         </div>
    //       ))}

    //       {sections3.map((section, index) => (
    //   <section key={index} className="space-y-2">
    //     <h2 className="text-lg font-semibold">{section.heading}</h2>

    //     <p className="text-justify">{section.paragraph}</p>

    //     {/* Ordered list if ordered: true, else unordered */}
    //     {section.ordered ? (
    //       <ol className="list-decimal list-inside">
    //         {section.list.map((item, i) => (
    //           <li key={i}>{item}</li>
    //         ))}
    //       </ol>
    //     ) : (
    //       <ul className="list-disc list-inside">
    //         {section.list.map((item, i) => (
    //           <li key={i}>{item}</li>
    //         ))}
    //       </ul>
    //     )}

    //     <p className="text-justify">{section.afterListParagraph}</p>
    //   </section>
    // ))}

    //     </main>
    <motion.div
      className="bg-[#F4F4F7] min-h-screen"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-7 mt-27">
        {/* Main Heading */}
         <motion.div variants={fadeUp}>
                    <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
                     Manuscript Submission
                    </h2>
                    <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
                  </motion.div>
        

        {/* Sub Text */}
         <motion.h1 className="mt-6 mb-2 text-lg font-semibold text-gray-800" variants={fadeUp}>
           Manuscript Submission Process
          </motion.h1>
        {/* First Section */}
        <motion.section className="space-y-4" variants={fadeUp}>
          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Scholint Publishers welcomes the submission of original and
            high-quality research manuscripts that contribute to the advancement
            of scientific and educational knowledge. We are committed to
            providing a transparent, efficient, and ethical publication process
            that ensures the rapid and responsible dissemination of scholarly
            work.
            <br />
            Currently, we invite submissions for our open-access journal, the
            International Journal of Pharmacy and Allied Fields (IJPAF), which
            publishes research articles, reviews, and case studies in all areas
            of pharmaceutical and allied sciences.
          </motion.p>
        </motion.section>

        {/* Why Publish With Us */}
        <motion.section className="space-y-4" variants={fadeUp}>
          <motion.h1 className="mt-6 mb-2 text-lg font-semibold text-gray-800" variants={fadeUp}>
            Why Publish with Us
          </motion.h1>

          <motion.p className="text-justify" variants={fadeUp}>
            At Scholint Publishers, we value the efforts of researchers and
            strive to provide:
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-1"
            variants={fadeUp}
          >
            {[
              "Peer-Reviewed Quality: Every submission undergoes a thorough double-blind review.",
              "Open Access Visibility: Articles are freely available worldwide.",
              "Fast & Transparent Processing: Timely editorial communication.",
              "Author Support: Dedicated editorial and technical help.",
              "Ethical Publishing Practices: Following COPE and international standards.",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="hover:text-[#1f6f6b] transition"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Heading */}
         <motion.div variants={fadeUp}>
                    <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
                     Manuscript Submission Process
                    </h2>
                    <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
                  </motion.div>

        {/* sections1 */}
        {sections1.map((section, index) => (
          <motion.section key={index} className="space-y-2" variants={fadeUp}>
            <motion.h2 className="text-lg font-semibold" variants={fadeUp}>
              {section.heading}
            </motion.h2>

            <motion.p className="text-justify" variants={fadeUp}>
              {section.paragraph}
            </motion.p>

            {section.listType === "ordered" ? (
              <motion.ol
                className="list-decimal list-inside space-y-1"
                variants={fadeUp}
              >
                {section.list.map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 6 }}>
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
                  <motion.li key={i} whileHover={{ x: 6 }}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.p className="text-justify" variants={fadeUp}>
              {section.afterListParagraph}
            </motion.p>
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.div className="space-y-1" variants={fadeUp}>
          <p>📧 For submission-related queries, authors may contact:</p>
          <p className="font-semibold">editor@ijpaf.com | 🌐 www.ijpaf.com</p>
        </motion.div>

        {/* sections2 */}
        {sections2.map((item, index) => (
          <motion.div key={index} className="space-y-2 mb-2" variants={fadeUp}>
            <motion.h3 className="text-lg font-semibold" variants={fadeUp}>
              {item.heading}
            </motion.h3>
            <motion.p className="text-justify" variants={fadeUp}>
              {item.paragraph}
            </motion.p>
          </motion.div>
        ))}

        {/* sections3 */}
        {sections3.map((section, index) => (
          <motion.section key={index} className="space-y-2" variants={fadeUp}>
            <motion.h2 className="text-lg font-semibold" variants={fadeUp}>
              {section.heading}
            </motion.h2>

            <motion.p className="text-justify" variants={fadeUp}>
              {section.paragraph}
            </motion.p>

            {section.ordered ? (
              <motion.ol
                className="list-decimal list-inside space-y-1"
                variants={fadeUp}
              >
                {section.list.map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 6 }}>
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
                  <motion.li key={i} whileHover={{ x: 6 }}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.p className="text-justify" variants={fadeUp}>
              {section.afterListParagraph}
            </motion.p>
          </motion.section>
        ))}
      </main>
    </motion.div>
  );
}
