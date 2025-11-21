// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function Page() {
//   // Fade-in for full page
//   const pageFade = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { duration: 0.8 } },
//   };

//   // Fade up for sections
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <motion.div
//       className="bg-[#F4F4F7] min-h-screen"
//       variants={pageFade}
//       initial="hidden"
//       animate="show"
//     >
//       <main className="max-w-7xl mx-auto px-4 py-8 mt-22">
//         <motion.section
//           className="space-y-4 mt-10"
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//         >
//           {/* Heading */}
//           <motion.div variants={fadeUp}>
//             <h2 className="text-3xl font-semibold text-[#1f6f6b] mb-3">
//               Our Journals
//             </h2>
//             <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
//           </motion.div>

//           {/* Intro Text */}
//           <motion.p
//             className="text-justify italic"
//             variants={fadeUp}
//           >
//             All our journals are open access, allowing unrestricted online access
//             to published research for readers and institutions worldwide.
//           </motion.p>

//           {/* Main Content */}
//           <motion.div
//             className="space-y-2"
//             variants={fadeUp}
//           >
//             <motion.h3
//               className="text-md font-semibold"
//               variants={fadeUp}
//             >
//               Current Journal
//             </motion.h3>

//             <motion.p
//               className="font-medium"
//               variants={fadeUp}
//             >
//               International Journal of Pharmacy and Allied Fields (IJPAF)
//             </motion.p>

//             {/* Journal Info Card */}
//             <motion.div
//               className="bg-gray-100 p-3 rounded-md space-y-1 shadow-sm hover:shadow-md transition-all cursor-pointer"
//               variants={fadeUp}
//               whileHover={{ scale: 1.02 }}
//             >
//               <p>
//                 ISSN (Online):{" "}
//                 <span className="font-semibold">[To be updated]</span>
//               </p>
//               <p>
//                 Frequency: <span className="font-semibold">Monthly</span>
//               </p>
//               <p>
//                 Access Type: <span className="font-semibold">Open Access</span>
//               </p>
//               <p>
//                 Website: <span className="font-semibold">www.ijpaf.com</span>
//               </p>
//             </motion.div>

//             {/* Paragraphs */}
//             <motion.p
//               className="text-justify"
//               variants={fadeUp}
//             >
//               The International Journal of Pharmacy and Allied Fields (IJPAF) is a
//               peer-reviewed open-access journal dedicated to publishing high-quality
//               research papers, reviews, and short communications in pharmaceutical
//               sciences, medical sciences, biotechnology, and allied fields.
//             </motion.p>

//             <motion.p
//               className="text-justify"
//               variants={fadeUp}
//             >
//               IJPAF aims to create a platform for researchers, academicians, and
//               professionals to share their latest findings and innovations that
//               contribute to the advancement of healthcare and life sciences.
//             </motion.p>

//             {/* Scope of Journal */}
//             <motion.h3
//               className="text-md font-semibold mt-4"
//               variants={fadeUp}
//             >
//               Scope of the Journal
//             </motion.h3>

//             <motion.ul
//               className="list-disc list-inside space-y-1"
//               variants={fadeUp}
//             >
//               {[
//                 "Pharmaceutical Chemistry and Analysis",
//                 "Pharmacology and Toxicology",
//                 "Pharmaceutics and Drug Delivery Systems",
//                 "Pharmacognosy and Herbal Medicine",
//                 "Clinical and Hospital Pharmacy",
//                 "Biotechnology and Bioinformatics",
//                 "Biomedical and Health Sciences",
//                 "Regulatory Affairs and Pharmaceutical Management",
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="hover:text-[#1f6f6b] transition"
//                   whileHover={{ x: 6 }}
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </motion.ul>

//             <motion.p
//               className="text-justify"
//               variants={fadeUp}
//             >
//               The journal also considers interdisciplinary studies that connect
//               pharmacy with fields like public health, biotechnology, and life
//               sciences.
//             </motion.p>
//           </motion.div>
//         </motion.section>
//       </main>
//     </motion.div>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";

export default function BrowseJournalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "All Disciplines",
    "Biological Sciences",
    "Physical Sciences",
    "Engineering & Technology",
    "Humanities & Arts",
    "Social Sciences",
    "Medical & Health",
    "Environmental Studies",
  ];

  const journals = [
    {
      id: 1,
      title: "International Journal of Pharmacy and Allied Fields (IJPAF)",
      category: "Medical & Health",
      tag: "Pharmacy",
      desc: "Our featured publication, the International Journal of Pharmacy and Allied Fields (IJPAF), publishes innovative research in pharmaceutical and allied sciences.",
      image: "/mnt/data/Screenshot 2025-11-21 225713.png",
    },
    {
      id: 2,
      title: "Journal of Advanced Engineering & Technology (JAET)",
      category: "Engineering & Technology",
      tag: "Engineering",
      desc: "Publishes peer-reviewed papers focusing on innovations in mechanical, electrical, and computer engineering.",
      image: "/mnt/data/Screenshot 2025-11-21 225713.png",
    },
    {
      id: 3,
      title: "International Journal of Environmental Studies (IJES)",
      category: "Environmental Studies",
      tag: "Environment",
      desc: "Focuses on sustainable development, environmental science, and green technology research.",
      image: "/mnt/data/Screenshot 2025-11-21 225713.png",
    },
    {
      id: 4,
      title: "Social Science Review (SSR)",
      category: "Social Sciences",
      tag: "Social",
      desc: "Publishes studies and analyses related to human behavior, social change, and development.",
      image: "/mnt/data/Screenshot 2025-11-21 225713.png",
    },
  ];

  const filteredJournals = journals.filter((journal) => {
    const matchesSearch = journal.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || selectedCategory === "All Disciplines"
        ? true
        : journal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className="flex bg-[#F4F4F7] min-h-screen relative mt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sticky Sidebar (stops before footer) */}
      <aside className="w-64 bg-white p-6 shadow-md sticky  top-[130px] self-start pb-48 h-fit">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 sticky top-0 bg-white py-2">
          Browse by Category
        </h2>
         <div className="h-[2px] w-[94%] bg-[#e4b199] mt-[-16]  mb-3"></div>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-2 py-1 rounded-md transition-all duration-200 hover:bg-[#1f6f6b] hover:text-white ${
                  selectedCategory === cat
                    ? "bg-[#1f6f6b] text-white"
                    : "text-gray-700"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            {/* Search Icon inside box (left side) */}
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <IoIosSearch className="h-4 w-4" />
            </span>

            {/* Input Box */}
            <input
              type="text"
              placeholder="Search journals, topics, authors..."
              className="w-full pl-10 pr-3 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f6f6b]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Journals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJournals.map((journal) => (
            <motion.div
              key={journal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-40 w-full bg-gray-200">
                <Image
                  src={journal.image}
                  alt={journal.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block text-sm bg-[#E0F2F1] text-[#1f6f6b] px-2 py-1 rounded-md mb-2">
                  {journal.tag}
                </span>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                  {journal.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{journal.desc}</p>
                <a
                  href="#"
                  className="text-[#1f6f6b] font-semibold text-sm hover:underline"
                >
                  View Journal
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredJournals.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No journals found for your search.
          </p>
        )}
      </main>
    </motion.div>
  );
}
