

"use client";

import { motion } from "framer-motion";

const heroImage = "/images/book.jpg";

export default function HomePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <main className="pt-34 bg-[#F4F4F7]  min-h-screen">
      <div className="max-w-[99vw] mx-auto px-4 pb-7">
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="bg-white border border-[#e5d8ff] rounded-sm h-56 md:h-84 flex items-center justify-center overflow-hidden"
        >
          <img
            src={heroImage}
            alt="hero"
            className="opacity-30 object-contain max-h-full"
            style={{ maxWidth: "100%" }}
          />
        </motion.div>

        {/* Combined Content Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 bg-[#dff1ff] border-[0.2px] rounded-sm p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Content */}
            <article className="lg:col-span-9">
              <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
                About Scholint Publishers
              </h2>
              <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>

              <p className="text-sm text-gray-700 leading-6 mb-3">
                Scholint Publishers is an independent, open-access publishing
                organization devoted to advancing academic scholarship and
                promoting the global dissemination of knowledge. Established
                with a commitment to research integrity and educational
                excellence, Scholint Publishers provides a credible platform for
                authors, educators, and researchers to publish and share their
                work with the wider academic community.
              </p>

              <p className="text-sm text-gray-700 leading-6 mb-3">
                We recognize that the foundation of academic progress lies in
                the free exchange of ideas. Through our publishing initiatives,
                we aim to bridge the gap between researchers and readers by
                ensuring that high-quality, peer-reviewed research remains
                accessible to everyone—irrespective of geographical or
                institutional limitations.
              </p>

              <p className="text-sm text-gray-700 leading-6 mb-3">
                At Scholint Publishers, we believe that scholarly publishing is
                not merely a process of dissemination but a vital part of
                education and innovation. Our mission is to nurture an
                environment that values ethical publishing, editorial
                transparency, and academic rigor.
              </p>

              <p className="text-sm text-gray-700 leading-6 mb-3">
                Scholint Publishers supports the vision of a knowledge-based
                society where information flows freely to inspire innovation,
                critical thinking, and informed decision-making.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Publications
              </h3>
              <p className="text-sm text-gray-700 leading-6 mt-2 mb-2">
                Scholint Publishers currently publishes the International
                Journal of Pharmacy and Allied Fields (IJPAF) — an open-access,
                peer-reviewed journal...
              </p>

              <div className="mt-6">
                <h3 className="mt-6 mb-2 text-lg font-medium text-gray-800">
                Journals
              </h3>
                <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-2">
                  <li>
                    Explore peer-reviewed journals across multiple disciplines.
                  </li>
                  <li>Submit your research work for publication.</li>
                  <li>Access open-source academic papers and archives.</li>
                  <li>
                    Track upcoming journal release dates and announcements.
                  </li>
                  <li>Collaborate with international authors and reviewers.</li>
                </ol>
              </div>
              <div className="mt-6">
                <h3 className="mt-6 mb-2 text-lg font-medium text-gray-800">
                Books
              </h3>
                <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-2">
                  <li>
                    Explore peer-reviewed journals across multiple disciplines.
                  </li>
                  <li>Submit your research work for publication.</li>
                  <li>Access open-source academic papers and archives.</li>
                  <li>
                    Track upcoming journal release dates and announcements.
                  </li>
                  <li>Collaborate with international authors and reviewers.</li>
                </ol>
              </div>
            </article>

            {/* Right Sidebar merged inside */}
            <aside className="lg:col-span-3">
              <div className="bg-[#dff1ff] border border-[#c3d9eb] rounded-sm p-4">
                {/* top horizontal line */}
                <div className="border-t-4 border-[#d0e3f4] w-full mb-4"></div>

                <ul className="space-y-5 text-sm text-gray-800">
                  {/* Editorial Board */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">👥</span>
                    <div>
                      <div className="font-semibold">Editorial Board</div>
                      <div className="text-xs text-gray-600">Membership</div>
                    </div>
                  </li>

                  {/* Advertisement */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">📢</span>
                    <div className="font-semibold">Advertisement</div>
                  </li>

                  {/* Author Registration */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">✍️</span>
                    <div className="font-semibold">Author Registration</div>
                  </li>

                  {/* Manuscript Submission */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">📂</span>
                    <div className="font-semibold">Manuscript Submission</div>
                  </li>

                  {/* Registered User Login */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">🔐</span>
                    <div className="font-semibold">Registered User Login</div>
                  </li>

                  {/* Publish Your Journal */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">📚</span>
                    <div className="font-semibold">Publish Your Journal</div>
                  </li>

                  {/* Current Issue */}
                  <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">📄</span>
                    <div className="font-semibold">Access Current Issue</div>
                  </li>

                  {/*  Open Access Statement */}
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">⚖️</span>
                    <div className="font-semibold"> Open Access Statement</div>
                  </li>
                   {/* Publication Ethics */}
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#007f7a] text-lg">⚖️</span>
                    <div className="font-semibold">Publication ethics</div>
                  </li>

                 
                </ul>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
