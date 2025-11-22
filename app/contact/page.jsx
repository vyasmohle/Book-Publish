"use client";
import React from "react";

export default function Page() {
  return (
    <div className="bg-[#F4F4F7] min-h-screen flex justify-center items-start py-10 sm:py-14 px-4 sm:px-6 md:px-8 mt-20">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 space-y-8">
        {/* ====== Heading ====== */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3">
            Get in Touch
          </h2>
          <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
        </div>

        {/* ====== Contact Info Section ====== */}
        <div className="space-y-6 sm:space-y-5 md:space-y-6 text-gray-800">
          {/* ===== Address ===== */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              Address:
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              Scholint Publishers
              <br />
              1651, IJPAF House
              <br />
              Raipur, Chhattisgarh
            </p>
          </div>

          {/* ===== Phone ===== */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1">Phone:</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              +91 9617552159
            </p>
          </div>

          {/* ===== Website ===== */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              Website:
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              www.scholintpublishers.com
            </p>
          </div>

          {/* ===== Email ===== */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1">Email:</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              scholintpublishers@gmail.com
              <br />
              editor.ijpaf@gmail.com (Journal)
            </p>
          </div>

          {/* ===== Office Hours ===== */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              Office Hours:
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Monday to Saturday: 10:00 AM – 6:00 PM (IST)
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
