// "use client";

// import { motion } from "framer-motion";
// import { IoPeopleSharp } from "react-icons/io5";
// import { RiAdvertisementFill, RiLoginBoxFill } from "react-icons/ri";
// import { MdAppRegistration } from "react-icons/md";
// import { SiGoogledocs, SiOpenaccess } from "react-icons/si";
// import { FaBookOpen, FaBalanceScale } from "react-icons/fa";
// import { SlBookOpen } from "react-icons/sl";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// const heroImage = "/images/banner.jpg";
// const Journals = "/images/journals.jpg";

// export default function HomePage() {
//   const [showMore, setShowMore] = useState(false);
//   const router = useRouter();

//   const fadeUp = {
//     hidden: { opacity: 0, y: 18 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
//   };
//   //
//   return (
//     <main className="pt-32 min-h-screen bg-[#F4F4F7]  ">
//       <div className="max-w-full ">
//         {/* Hero Section */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className="h-56 md:h-84 w-full flex items-center justify-center overflow-hidden"
//         >
//           <img
//             src={heroImage}
//             alt="hero"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Combined Content Box */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className=" bg-[#dff1ff]  rounded-sm p-6"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//             {/* Left Content */}
//             <article id="about" className="lg:col-span-9 scroll-mt-40">
//               <h2 className="text-4xl font-medium text-black mb-3">
//                 About Scholint Publishers
//               </h2>
//               <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>

//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 Scholint Publishers is an independent, open-access publishing
//                 organization devoted to advancing academic scholarship and
//                 promoting the global dissemination of knowledge. Established
//                 with a commitment to research integrity and educational
//                 excellence, Scholint Publishers provides a credible platform for
//                 authors, educators, and researchers to publish and share their
//                 work with the wider academic community.
//               </p>

//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 We recognize that the foundation of academic progress lies in
//                 the free exchange of ideas. Through our publishing initiatives,
//                 we aim to bridge the gap between researchers and readers by
//                 ensuring that high-quality, peer-reviewed research remains
//                 accessible to everyone—irrespective of geographical or
//                 institutional limitations.
//               </p>

//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 At Scholint Publishers, we believe that scholarly publishing is
//                 not merely a process of dissemination but a vital part of
//                 education and innovation. Our mission is to nurture an
//                 environment that values ethical publishing, editorial
//                 transparency, and academic rigor.
//               </p>

//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 Scholint Publishers supports the vision of a knowledge-based
//                 society where information flows freely to inspire innovation,
//                 critical thinking, and informed decision-making.
//               </p>

//               <h3 className="mt-6 text-lg font-medium text-black">
//                 Publications
//               </h3>
//               <p className="text-sm text-gray-900 leading-6 mt-2 mb-2 text-justify">
//                 Scholint Publishers currently publishes the International
//                 Journal of Pharmacy and Allied Fields (IJPAF) — an open-access,
//                 peer-reviewed journal that provides an international forum for
//                 the dissemination of research in pharmaceutical and allied
//                 sciences. IJPAF encourages submissions of original research
//                 articles, systematic reviews, and case studies that contribute
//                 to the scientific understanding and advancement of
//                 health-related fields.
//               </p>
//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 As our featured journal, IJPAF reflects Scholint Publishers’
//                 dedication to academic integrity and global research visibility.
//                 In the coming years, we plan to expand our publishing portfolio
//                 to include additional academic journals and books in various
//                 domains of science, technology, and healthcare education.
//               </p>

//               <h3 className="mt-6 text-lg font-medium text-black">
//                 Open Access Statement
//               </h3>
//               <p className="text-sm text-gray-900 leading-6 mt-2 mb-2 text-justify">
//                 Scholint Publishers adheres to the principles of open access,
//                 ensuring that all published materials are freely available for
//                 reading and citation without subscription barriers. We believe
//                 open access accelerates academic growth, promotes
//                 cross-disciplinary collaboration, and enhances the reach and
//                 relevance of research outcomes.
//               </p>
//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 All our publications are licensed under recognized Creative
//                 Commons licenses, allowing authors to retain ownership of their
//                 work while enabling broader dissemination and reuse for
//                 educational and research purposes. This model not only supports
//                 authors’ academic visibility but also ensures equitable access
//                 to scientific knowledge.
//               </p>

//               <h3 className="mt-6 text-lg font-medium text-black">
//                 Editorial and Ethical Standards
//               </h3>
//               <p className="text-sm text-gray-900 leading-6 mt-2 mb-2 text-justify">
//                 Each submission to our journals undergoes a rigorous peer-review
//                 process conducted by qualified reviewers and supervised by our
//                 editorial board. We follow recognized international guidelines
//                 and uphold ethical publishing standards to ensure the
//                 authenticity, reliability, and quality of every publication.
//               </p>
//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 Our editors and reviewers are committed to fair evaluation,
//                 timely feedback, and constructive guidance to help authors
//                 refine their manuscripts. By maintaining editorial transparency
//                 and academic objectivity, we aim to build long-term trust within
//                 the research community.
//               </p>
//               <p className="text-sm text-gray-900 leading-6 mb-3 text-justify">
//                 In addition, we plan to collaborate with universities, research
//                 bodies, and industry partners to promote conferences, workshops,
//                 and knowledge-sharing events that encourage dialogue between
//                 theory and practice.
//               </p>

//               <button
//                 className="text-white bg-[#0c58ca] rounded px-3 py-2 cursor-pointer font-medium mt-4"
//                 onClick={() => router.push("/journals")}
//               >
//                 Explore our Journals
//               </button>
//             </article>

//             {/* Right Sidebar merged inside */}

//             <aside className="lg:col-span-3 ">
//               <div className="bg-[#dff1ff] rounded-sm p-4 ml-28">
//                 {/* Top Line */}
//                 <div className="border-t-4 border-[#d0e3f4] w-full mb-4"></div>

//                 <ul className="space-y-5 text-sm text-gray-800">
//                   {/* Editorial Board */}
//                   <Link href="/">
//                     <li className="flex items-start gap-3 pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <IoPeopleSharp className="text-black" />
//                       </span>
//                       <div>
//                         <div className="font-semibold">Editorial Board</div>
//                         <div className="text-xs text-gray-600">Membership</div>
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Advertisement */}
//                   <Link href="/advertisement">
//                     <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <RiAdvertisementFill className="text-black" />
//                       </span>
//                       <div className="font-semibold">Advertisement</div>
//                     </li>
//                   </Link>

//                   {/* Author Registration */}
//                   <Link href="https://ijpaf.com/register.html" target="_blank">
//                     <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <MdAppRegistration className="text-black" />
//                       </span>
//                       <div className="font-semibold">
//                         Author <br /> Registration
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Manuscript Submission */}
//                   <Link href="publish/submit-manuscript">
//                     <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <SiGoogledocs className="text-black" />
//                       </span>
//                       <div className="font-semibold">
//                         Manuscript <br /> Submission
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Registered User Login */}
//                   <Link href="https://ijpaf.com/login.html" target="_blank">
//                     <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <RiLoginBoxFill className="text-black" />
//                       </span>
//                       <div className="font-semibold">
//                         Registered User <br /> Login
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Publish Your Journal */}
//                   <Link href="/">
//                     <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <FaBookOpen className="text-black" />
//                       </span>
//                       <div className="font-semibold">
//                         Publish Your <br /> Journal
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Current Issue */}
//                   <Link href="https://ijpaf.com/pastissue.html" target="_blank">
//                     <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <SlBookOpen className="text-black" />
//                       </span>
//                       <div className="font-semibold">
//                         Access Current <br /> Issue
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Open Access Statement */}
//                   <Link href="/open-access">
//                     <li className="flex items-start gap-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <SiOpenaccess className="text-black" />
//                       </span>
//                       <div className="font-semibold">
//                         Open Access <br /> Statement
//                       </div>
//                     </li>
//                   </Link>

//                   {/* Publication Ethics */}
//                   <Link href="/publication-ethics">
//                     <li className="flex items-start gap-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
//                       <span className="mt-0.5 text-lg text-[#007f7a]">
//                         <FaBalanceScale className="text-black" />
//                       </span>
//                       <div className="font-semibold">Publication Ethics</div>
//                     </li>
//                   </Link>
//                 </ul>
//               </div>
//               <div className="mt-7 relative ml-7">
//                 <h3 className="text-center font-bold">
//                   Space available for advertisement
//                 </h3>
//                 <div className="w-80 h-90 bg-white border rounded border-gray-300 relative mt-1"></div>
//               </div>
//             </aside>
//           </div>
//         </motion.div>

//         <div className="pl-10 bg-white pb-32 mt-[-38]">
//           <div className="mt-10">
//             {/* Heading + Line like the image */}
//             <h3 className="text-4xl font-medium text-gray-900 pt-7">
//               Our Featured Journals
//             </h3>

//             {/* Thin horizontal line – long, subtle, same color */}
//             <div className="h-[2px] w-[70%] bg-[#e4b199] mt-3 mb-8"></div>

//             {/* Journals Section (Your card stays exactly as it is) */}
//             <div className="flex  my-8">
//               <div className="grid md:grid-cols-3 w-[60%] gap-6">
//                 {/* Single Journal Card */}
//                 <a
//                   href="https://ijpaf.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white transition-transform duration-300 hover:scale-101 hover:shadow-xl"
//                 >
//                   <img
//                     src={Journals.src || Journals}
//                     alt="Journal Thumbnail"
//                     className="w-full h-100 object-contain"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10  ">
//             {/* Heading + Line like the image */}
//             <h3 className="text-4xl font-medium text-gray-900">
//               Our Published Books
//             </h3>

//             {/* Thin horizontal line – long, subtle, same color */}
//             <div className="h-[2px] w-[70%] bg-[#e4b199] mt-3 mb-8"></div>

//             <button
//               className=" text-white bg-[#0c58ca] rounded px-3 py-2 cursor-pointer font-medium"
//               onClick={() => router.push("/journals")}
//             >
//               Publish a Book With Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { IoPeopleSharp } from "react-icons/io5";
import { RiAdvertisementFill, RiLoginBoxFill } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { SiGoogledocs, SiOpenaccess } from "react-icons/si";
import { FaBookOpen, FaBalanceScale } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const heroImage = "/images/banner.jpg";
const Journals = "/images/journals.jpg";

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <main className="pt-32 min-h-screen bg-[#F4F4F7]">
      <div className="max-w-full">
        {/* ===== Hero Section ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="h-56  md:h-98 w-full flex items-center justify-center overflow-hidden"
        >
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ===== Combined Content Box ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#dff1ff] rounded-sm p-6 sm:p-6 md:p-8 lg:p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:pt-5">
            {/* ===== Left Content ===== */}
            <article id="about" className="lg:col-span-9 scroll-mt-40">
              <h2 className="text-3xl sm:text-4xl font-medium text-black mb-3">
                About Scholint Publishers
              </h2>
              <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>

              {/* About Paragraphs */}
              {[
                "Scholint Publishers is an independent, open-access publishing organization devoted to advancing academic scholarship and promoting the global dissemination of knowledge. Established with a commitment to research integrity and educational excellence, Scholint Publishers provides a credible platform for authors, educators, and researchers to publish and share their work with the wider academic community.",
                "We recognize that the foundation of academic progress lies in the free exchange of ideas. Through our publishing initiatives, we aim to bridge the gap between researchers and readers by ensuring that high-quality, peer-reviewed research remains accessible to everyone—irrespective of geographical or institutional limitations.",
                "At Scholint Publishers, we believe that scholarly publishing is not merely a process of dissemination but a vital part of education and innovation. Our mission is to nurture an environment that values ethical publishing, editorial transparency, and academic rigor.",
                "Scholint Publishers supports the vision of a knowledge-based society where information flows freely to inspire innovation, critical thinking, and informed decision-making.",
              ].map((text, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-gray-900 leading-6 mb-3 text-justify"
                >
                  {text}
                </p>
              ))}

              {/* Publications */}
              <h3 className=" text-lg md:text-xl font-medium text-black">
                Publications
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-6 mt-2 mb-2 text-justify">
                Scholint Publishers currently publishes the International
                Journal of Pharmacy and Allied Fields (IJPAF) — an open-access,
                peer-reviewed journal that provides an international forum for
                the dissemination of research in pharmaceutical and allied
                sciences. IJPAF encourages submissions of original research
                articles, systematic reviews, and case studies that contribute
                to the scientific understanding and advancement of
                health-related fields.
              </p>
              <p className="text-sm md:text-base text-gray-900 leading-6 mb-3 text-justify">
                As our featured journal, IJPAF reflects Scholint Publishers’
                dedication to academic integrity and global research visibility.
                In the coming years, we plan to expand our publishing portfolio
                to include additional academic journals and books in various
                domains of science, technology, and healthcare education.
              </p>

              {/* Open Access */}
              <h3 className="mt-6 text-lg md:text-xl font-medium text-black">
                Open Access Statement
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-6 mt-2 mb-2 text-justify">
                Scholint Publishers adheres to the principles of open access,
                ensuring that all published materials are freely available for
                reading and citation without subscription barriers. We believe
                open access accelerates academic growth, promotes
                cross-disciplinary collaboration, and enhances the reach and
                relevance of research outcomes.
              </p>
              <p className="text-sm md:text-base text-gray-900 leading-6 mb-3 text-justify">
                All our publications are licensed under recognized Creative
                Commons licenses, allowing authors to retain ownership of their
                work while enabling broader dissemination and reuse for
                educational and research purposes. This model not only supports
                authors’ academic visibility but also ensures equitable access
                to scientific knowledge.
              </p>

              {/* Ethics */}
              <h3 className="mt-6 text-lg md:text-xl font-medium text-black">
                Editorial and Ethical Standards
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-6 mt-2 mb-2 text-justify">
                Each submission to our journals undergoes a rigorous peer-review
                process conducted by qualified reviewers and supervised by our
                editorial board. We follow recognized international guidelines
                and uphold ethical publishing standards to ensure the
                authenticity, reliability, and quality of every publication.
              </p>
              <p className="text-sm md:text-base text-gray-900 leading-6 mb-3 text-justify">
                Our editors and reviewers are committed to fair evaluation,
                timely feedback, and constructive guidance to help authors
                refine their manuscripts. By maintaining editorial transparency
                and academic objectivity, we aim to build long-term trust within
                the research community.
              </p>
              <p className="text-sm md:text-base text-gray-900 leading-6 mb-3 text-justify">
                In addition, we plan to collaborate with universities, research
                bodies, and industry partners to promote conferences, workshops,
                and knowledge-sharing events that encourage dialogue between
                theory and practice.
              </p>

              <button
                className="text-white bg-[#0c58ca] rounded px-4 py-2 cursor-pointer font-medium mt-4 hover:bg-[#0947a8] transition"
                onClick={() => router.push("/journals")}
              >
                Explore our Journals
              </button>
            </article>

            {/* ===== Sidebar ===== */}
            <aside className="lg:col-span-3 mt-10 lg:mt-0">
              <div className="bg-[#dff1ff] rounded-sm p-4 sm:p-4 md:p-5 lg:p-4 ml-0 sm:ml-0 md:ml-10 lg:ml-28">
                <div className="border-t-4 border-[#d0e3f4] w-full mb-4"></div>

                <ul className="space-y-5 text-sm md:text-base text-gray-800">
                  {/* Sidebar Links */}
                  {[
                    { href: "/", icon: <IoPeopleSharp className="text-black"/>, title: "Editorial Board", sub: "Membership" },
                    { href: "/advertisement", icon: <RiAdvertisementFill className="text-black"/>, title: "Advertisement" },
                    { href: "https://ijpaf.com/register.html", icon: <MdAppRegistration className="text-black"/>, title: "Author Registration", external: true },
                    { href: "publish/submit-manuscript", icon: <SiGoogledocs className="text-black"/>, title: "Manuscript Submission" },
                    { href: "https://ijpaf.com/login.html", icon: <RiLoginBoxFill className="text-black"/>, title: "Registered User Login", external: true },
                    { href: "/", icon: <FaBookOpen className="text-black"/>, title: "Publish Your Journal" },
                    { href: "https://ijpaf.com/pastissue.html", icon: <SlBookOpen className="text-black"/>, title: "Access Current Issue", external: true },
                    { href: "/open-access", icon: <SiOpenaccess className="text-black"/>, title: "Open Access Statement" },
                    { href: "/publication-ethics", icon: <FaBalanceScale className="text-black"/>, title: "Publication Ethics" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                    >
                      <li className="flex items-start gap-3 pb-3 border-b border-[#c3d9eb] cursor-pointer hover:bg-[#eaf6ff] p-2 rounded transition">
                        <span className="mt-0.5 text-lg text-[#007f7a]">{item.icon}</span>
                        <div>
                          <div className="font-semibold leading-snug">{item.title}</div>
                          {item.sub && (
                            <div className="text-xs text-gray-600">{item.sub}</div>
                          )}
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* Ad Box */}
              <div className="mt-7 relative ml-0 sm:ml-0 md:ml-5 lg:ml-7">
                <h3 className="text-center font-bold text-sm md:text-base">
                  Space available for advertisement
                </h3>
                <div className="w-full sm:w-72 md:w-80 h-52 sm:h-64 md:h-98 bg-white border rounded border-gray-300 relative mt-2"></div>
              </div>
            </aside>
          </div>
        </motion.div>

        {/* ===== Featured Journals Section ===== */}
        <div className="pl-0 sm:pl-6 md:pl-10 bg-white pb-20 pt-5">
          <div className="">
            <h3 className="text-3xl sm:text-4xl font-medium text-gray-900 pt-7">
              Our Featured Journals
            </h3>
            <div className="h-[2px] w-[70%] bg-[#e4b199] mt-3 mb-8"></div>

            <div className="flex justify-center md:justify-start my-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[60%] gap-6">
                <a
                  href="https://ijpaf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={Journals.src || Journals}
                    alt="Journal Thumbnail"
                    className="w-full h-60 sm:h-80 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ===== Books Section ===== */}
          <div className="mt-10 msd:mb-5">
            <h3 className="text-3xl sm:text-4xl font-medium text-gray-900">
              Our Published Books
            </h3>
            <div className="h-[2px] w-[70%] bg-[#e4b199] mt-3 mb-8"></div>

            <button
              className="text-white bg-[#0c58ca] rounded px-4 py-2 cursor-pointer font-medium hover:bg-[#0947a8] transition"
              onClick={() => router.push("/journals")}
            >
              Publish a Book With Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
