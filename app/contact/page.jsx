"use client";
import React from "react";

export default function Page() {
  return (
    <div className="bg-[#F4F4F7] min-h-screen flex justify-center items-start py-10 px-4 mt-24">
      <div className="bg-white  w-[80%] rounded-xl shadow-lg p-8 space-y-8">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-medium text-black mb-3">
            Get in Touch
          </h2>
          <div className="h-0.5 w-full bg-[#f3c1b0] mb-4"></div>
        </div>

        {/* Address Card */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Address:</h3>
          <p className="text-justify">
            Scholint Publishers
            <br />
            1651, IJPAF House Raipur, Chhattisgarh
           
          </p>
        </div>

        {/* Email Card */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Email:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
               scholintpublishers@gmail.com
            </li>
            <li>
               editor.ijpaf@gmail.com(Journal)
            </li>
           
          </ul>
        </div>

        {/* Website Card */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Website:</h3>
          <p>www.scholintpublishers.com</p>
        </div>

        {/* Phone Card */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Phone (optional):</h3>
          <p>+91 9617552159
</p>
        </div>

        {/* Office Hours Card */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Monday to Saturday: 10:00 AM – 6:00 PM (IST)</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}