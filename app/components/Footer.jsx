"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#A6A6A6] text-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/journals" className="hover:underline">
                Browse Journals
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:underline">
                Books
              </Link>
            </li>
            <li>
              <Link href="/advertisement" className="hover:underline">
                Advertisement
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Author Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Author Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/submit-manuscript" className="hover:underline">
                Submit Manuscript
              </Link>
            </li>
            <li>
              <Link href="/author-registration" className="hover:underline">
                Author Registration
              </Link>
            </li>
            <li>
              <Link href="/publication-ethics" className="hover:underline">
                Publication Ethics
              </Link>
            </li>
            <li>
              <Link href="/publish-your-journal" className="hover:underline">
                Publish Your Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Connect With Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
          <p className="text-sm mb-4">
            Stay updated with our latest publications and news.
          </p>
        
        </div>
      </div>

      {/* Bottom Center Copyright */}
      <div className="text-center  border-t border-gray-400 pt-2">
        <p className="text-sm">© 2023 Publisher Central. All rights reserved.</p>
      </div>
    </footer>
  );
}
