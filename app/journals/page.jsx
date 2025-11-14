import React from "react";

function page() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="space-y-4 mt-10">
        <h2 className="text-lg font-semibold">Our Journals</h2>

        <p className="text-justify italic">
          All our journals are open access, allowing unrestricted online access
          to published research for readers and institutions worldwide.
        </p>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">Current Journal</h3>

          <p className="font-medium">
            International Journal of Pharmacy and Allied Fields (IJPAF)
          </p>

          <div className="bg-gray-100 p-3 rounded-md space-y-1">
            <p>
              ISSN (Online):{" "}
              <span className="font-semibold">[To be updated]</span>
            </p>
            <p>
              Frequency: <span className="font-semibold">Monthly</span>
            </p>
            <p>
              Access Type: <span className="font-semibold">Open Access</span>
            </p>
            <p>
              Website: <span className="font-semibold">www.ijpaf.com</span>
            </p>
          </div>

          <p className="text-justify">
            The International Journal of Pharmacy and Allied Fields (IJPAF) is a
            peer-reviewed open-access journal dedicated to publishing
            high-quality research papers, reviews, and short communications in
            the areas of pharmaceutical sciences, medical sciences,
            biotechnology, and allied fields.
          </p>

          <p className="text-justify">
            IJPAF aims to create a platform for researchers, academicians, and
            professionals to share their latest findings and innovations that
            contribute to the advancement of healthcare and life sciences. The
            journal follows a double-blind peer-review process, ensuring that
            only original and ethically conducted research is published.
          </p>

          <h3 className="text-md font-semibold">Scope of the Journal</h3>

          <ul className="list-disc list-inside space-y-1">
            <li>Pharmaceutical Chemistry and Analysis</li>
            <li>Pharmacology and Toxicology</li>
            <li>Pharmaceutics and Drug Delivery Systems</li>
            <li>Pharmacognosy and Herbal Medicine</li>
            <li>Clinical and Hospital Pharmacy</li>
            <li>Biotechnology and Bioinformatics</li>
            <li>Biomedical and Health Sciences</li>
            <li>Regulatory Affairs and Pharmaceutical Management</li>
          </ul>

          <p className="text-justify">
            The journal also considers interdisciplinary studies that connect
            pharmacy with fields like public health, biotechnology, and life
            sciences.
          </p>
        </div>
      </section>
    </main>
  );
}

export default page;
