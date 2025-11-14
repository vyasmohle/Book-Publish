import React from "react";

function page() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-10 mt-10">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">Book publish</h1> */}

      <section className="space-y-4">
  <h2 className="text-lg font-semibold">Advertise With Us</h2>

  <p className="text-justify">
    Promote your brand, institution, or product to a focused audience of researchers, 
    academicians, healthcare professionals, and students through Scholint Publishers.
  </p>

  <p className="text-justify">
    Our platform offers high visibility among readers and contributors from pharmacy, 
    medical, life sciences, and allied fields through our journals and publications.
  </p>

  <div className="bg-gray-100 p-3 rounded-md">
    <p className="font-medium">
      📧 For Advertisement Enquiries: <span className="font-semibold">ads@scholintpublishers.com</span>
    </p>
  </div>
</section>

    </main>
  );
}

export default page;
