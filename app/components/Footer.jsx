"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#A6A6A6] text-gray-800 pt-8 pb-4">
      {/* ===== Top Footer Grid ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        
        {/* ===== Column 1 - Quick Links ===== */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:underline hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:underline hover:text-black transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/journals" className="hover:underline hover:text-black transition">
                Browse Journals
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:underline hover:text-black transition">
                Books
              </Link>
            </li>
            <li>
              <Link href="/advertisement" className="hover:underline hover:text-black transition">
                Advertisement
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-black transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Column 2 - Author Services ===== */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-3">Author Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link
                href="https://ijpaf.com/submit.html"
                target="_blank"
                className="hover:underline hover:text-black transition"
              >
                Submit Manuscript
              </Link>
            </li>
            <li>
              <Link
                href="https://ijpaf.com/register.html"
                target="_blank"
                className="hover:underline hover:text-black transition"
              >
                Author Registration
              </Link>
            </li>
            <li>
              <Link
                href="/publication-ethics"
                className="hover:underline hover:text-black transition"
              >
                Publication Ethics
              </Link>
            </li>
            <li>
              <Link
                href="https://ijpaf.com/index.html"
                target="_blank"
                className="hover:underline hover:text-black transition"
              >
                Publish Your Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Column 3 - Connect With Us ===== */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl mb-3">Connect With Us</h3>
          <p className="text-sm sm:text-base mb-4 leading-relaxed">
            Stay updated with our latest publications and news.
          </p>
        </div>
      </div>

      {/* ===== Bottom Footer Bar ===== */}
      <div className="text-center border-t border-gray-400 mt-8 pt-3 px-4">
        <p className="text-xs sm:text-sm md:text-base">
          © 2025 Scholint Publishers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
