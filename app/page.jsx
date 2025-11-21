"use client";

import { motion } from "framer-motion";
const heroImage = "/images/book.jpg";
import { IoPeopleSharp } from "react-icons/io5";
import { RiAdvertisementFill, RiLoginBoxFill } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { SiGoogledocs, SiOpenaccess } from "react-icons/si";
import { FaBookOpen, FaBalanceScale } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <main className="pt-34  min-h-screen bg-[#F4F4F7] ">
      <div className="max-w-[99vw] mx-auto px-4 pb-7 ">
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className=" h-56 md:h-84 flex items-center justify-center overflow-hidden"
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
          className="mt-4 bg-[#dff1ff]  rounded-sm p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Content */}
            <article id="about" className="lg:col-span-9  scroll-mt-40">
              <h2 className="text-4xl font-medium text-black mb-3">
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

              <button
                className=" text-white bg-[#0c58ca] rounded px-3 py-2 cursor-pointer font-medium mt-14"
                onClick={() => router.push("/")}
              >
                Publish a Book With Us
              </button>
            </article>

            {/* Right Sidebar merged inside */}
            <aside className="lg:col-span-3">
              <div className="bg-[#dff1ff] rounded-sm p-4">
                {/* Top Line */}
                <div className="border-t-4 border-[#d0e3f4] w-full mb-4"></div>

                <ul className="space-y-5 text-sm text-gray-800">
                  {/* Editorial Board */}
                  <Link href="/">
                    <li className="flex items-start gap-3 pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <IoPeopleSharp className="text-black" />
                      </span>
                      <div>
                        <div className="font-semibold">Editorial Board</div>
                        <div className="text-xs text-gray-600">Membership</div>
                      </div>
                    </li>
                  </Link>

                  {/* Advertisement */}
                  <Link href="/advertisement">
                    <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <RiAdvertisementFill className="text-black" />
                      </span>
                      <div className="font-semibold">Advertisement</div>
                    </li>
                  </Link>

                  {/* Author Registration */}
                  <Link href="https://ijpaf.com/register.html" target="_blank">
                    <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <MdAppRegistration className="text-black" />
                      </span>
                      <div className="font-semibold">
                        Author <br /> Registration
                      </div>
                    </li>
                  </Link>

                  {/* Manuscript Submission */}
                  <Link href="publish/submit-manuscript">
                    <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <SiGoogledocs className="text-black" />
                      </span>
                      <div className="font-semibold">
                        Manuscript <br /> Submission
                      </div>
                    </li>
                  </Link>

                  {/* Registered User Login */}
                  <Link href="https://ijpaf.com/login.html" target="_blank">
                    <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <RiLoginBoxFill className="text-black" />
                      </span>
                      <div className="font-semibold">
                        Registered User <br /> Login
                      </div>
                    </li>
                  </Link>

                  {/* Publish Your Journal */}
                  <Link href="/">
                    <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <FaBookOpen className="text-black" />
                      </span>
                      <div className="font-semibold">
                        Publish Your <br /> Journal
                      </div>
                    </li>
                  </Link>

                  {/* Current Issue */}
                  <Link href="https://ijpaf.com/pastissue.html" target="_blank">
                    <li className="flex items-start gap-3 border-b border-[#c3d9eb] pb-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <SlBookOpen className="text-black" />
                      </span>
                      <div className="font-semibold">
                        Access Current <br /> Issue
                      </div>
                    </li>
                  </Link>

                  {/* Open Access Statement */}
                  <Link href="/open-access">
                    <li className="flex items-start gap-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <SiOpenaccess className="text-black" />
                      </span>
                      <div className="font-semibold">
                        Open Access <br /> Statement
                      </div>
                    </li>
                  </Link>

                  {/* Publication Ethics */}
                  <Link href="/publication-ethics">
                    <li className="flex items-start gap-3 cursor-pointer hover:bg-[#eaf6ff] p-2 rounded">
                      <span className="mt-0.5 text-lg text-[#007f7a]">
                        <FaBalanceScale className="text-black" />
                      </span>
                      <div className="font-semibold">Publication Ethics</div>
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="w-80 h-90 bg-white border rounded border-gray-300 relative mt-7" ></div>
            </aside>

            
          </div>
        </motion.div>

        <div className="pl-10 bg-white pb-32 mt-[-38]">
          <div className="mt-10">
            {/* Heading + Line like the image */}
            <h3 className="text-4xl font-medium text-gray-900 pt-7">
              Our Featured Journals
            </h3>

            {/* Thin horizontal line – long, subtle, same color */}
            <div className="h-[2px] w-[70%] bg-[#e4b199] mt-3 mb-8"></div>

            {/* Journals Section (Your card stays exactly as it is) */}
            <div className="grid md:grid-cols-3 w-[80%] gap-6">
              {/* Single Journal Card */}
              <div className="border border-gray-300 rounded-xs shadow-sm p-4">
                <img
                  src={heroImage}
                  alt="Journal Thumbnail"
                  className="w-full h-56 object-cover rounded"
                />

                <h4 className="mt-4 text-lg font-semibold">
                  Journal of Environmental Sustainability
                </h4>

                <p className="mt-2 text-sm w-[70%] text-gray-700">
                  Dedicated to solutions for climate change, biodiversity
                  conservation, sustainable resource management.
                </p>

                <button
                  className="mt-4 text-blue-600 cursor-pointer font-medium"
                  onClick={() => router.push("/journals")}
                >
                  Visit Journal
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10  ">
            {/* Heading + Line like the image */}
            <h3 className="text-4xl font-medium text-gray-900">
              Our Published Books
            </h3>

            {/* Thin horizontal line – long, subtle, same color */}
            <div className="h-[2px] w-[70%] bg-[#e4b199] mt-3 mb-8"></div>

            <button
              className=" text-white bg-[#0c58ca] rounded px-3 py-2 cursor-pointer font-medium"
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
