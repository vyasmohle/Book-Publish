import React from "react";

export default function page() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-10 mt-10">
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Get in Touch</h2>

        <div className="space-y-4">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold">📍 Address:</h3>
            <p className="text-justify">
              Scholint Publishers
              <br />
              [Your Office Address Here]
              <br />
              (You can update this with your actual office or correspondence
              address later.)
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold">📧 Email:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>General Enquiries:</strong> info@scholintpublishers.com
              </li>
              <li>
                <strong>Journal Submissions:</strong> editor@ijpaf.com
              </li>
              <li>
                <strong>Book Proposals:</strong> books@scholintpublishers.com
              </li>
              <li>
                <strong>Advertisements:</strong> ads@scholintpublishers.com
              </li>
            </ul>
          </div>

          {/* Website */}
          <div>
            <h3 className="text-lg font-semibold">🌐 Website:</h3>
            <p>www.scholintpublishers.com</p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold">📞 Phone (optional):</h3>
            <p>+91-XXXXXXXXXX</p>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Monday to Saturday: 10:00 AM – 6:00 PM (IST)</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
