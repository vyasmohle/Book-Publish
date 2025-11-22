"use client";
import React from "react";
import { motion } from "framer-motion";
import { pageFade, fadeUp } from "@/app/animations/framer";

export default function Page() {
 

 
  return (
    <motion.div
      className="bg-[#F4F4F7] min-h-screen"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-7 mt-27 pb-24">
        {/* Main Heading */}
        <motion.div variants={fadeUp}>
          <h2 className="text-4xl font-medium text-black mb-3">
            Publication Ethics
          </h2>
          <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
        </motion.div>

        {/* Content Section */}
        <motion.section className="space-y-4" variants={fadeUp}>
          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Scholint Publishers follows standard publication ethics to ensure
            accuracy and responsible handling of scholarly work. Manuscripts
            submitted for publication must be original, properly referenced, and
            prepared according to accepted academic standards. Authors are
            required to provide genuine findings without any form of fabrication,
            falsification, or data manipulation. Work that has been previously
            published or is under review in another journal should not be
            submitted. Any conflicts of interest, funding sources, or
            institutional approvals related to the research must be clearly
            stated. If human participants or animals are involved in the study,
            appropriate ethical permissions and informed consent must be
            documented. All individuals listed as authors should have made a
            significant contribution to the study and approved the final version
            of the manuscript. In case authors identify an error after
            publication, they should immediately notify the editorial office so
            that corrective action can be taken.
          </motion.p>

          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Peer reviewers are responsible for assessing the academic value and
            relevance of submitted manuscripts. The peer review process is
            confidential, and reviewers must not use any part of the manuscript
            for personal research. They should only evaluate work within their
            area of expertise and should decline review assignments where a
            conflict of interest exists. Reviewers should inform the editors if
            they observe any signs of research misconduct, plagiarism, duplicate
            submission, or inappropriate citations.
          </motion.p>

          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Editors are responsible for evaluating manuscripts based on academic
            quality and suitability for publication. Editorial decisions are made
            after considering the reviewer recommendations and the scope of the
            journal. Manuscripts and related information handled during the
            editorial process must remain confidential. Editors may request
            additional data, clarification, or revision when required to ensure
            clarity and accuracy of the published content. If research misconduct
            or ethical noncompliance is identified at any stage, editors will
            follow an established process, which may include rejection of the
            submission, retraction of a published article, or notification to
            relevant authorities or institutions.
          </motion.p>

          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Data reported in manuscripts should be accurate and supported by
            clear methodology. Authors may be asked to provide raw data during
            the review or after publication for verification purposes. Figures,
            images, and tables should present results without distortion or
            manipulation. Appropriate citation practices must be followed, and
            all sources of information must be acknowledged to avoid plagiarism.
            Plagiarism screening tools are used during manuscript processing to
            identify uncredited or copied content.
          </motion.p>

          <motion.p className="text-justify leading-6" variants={fadeUp}>
            Scholint Publishers maintains a structured approach to handling
            corrections, retractions, and concerns raised by readers, reviewers,
            or editorial members. Any updates required to maintain accuracy of
            the published record are managed through correction notices,
            retractions, or editorial notes. Ethical expectations apply to all
            participants in the publishing process, and compliance with these
            guidelines helps ensure that research contributions are properly
            evaluated, documented, and made available for academic use.
          </motion.p>
        </motion.section>
      </main>
    </motion.div>
  );
}
