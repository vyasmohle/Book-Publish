export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 overflow-y-auto scrollbar-hide">
      {/* ====== Home Content ====== */}
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          SCHOLINT PUBLICATIONS
        </h1> 
        <div>
          <h1 className="text-lg font-semibold mb-2">
             About Scholint Publishers

          </h1>
          <p className="text-justify leading-5.5 mb-4">
            Scholint Publishers is an independent, open-access publishing organization devoted to advancing academic scholarship and promoting the global dissemination of knowledge. Established with a commitment to research integrity and educational excellence, Scholint Publishers provides a credible platform for authors, educators, and researchers to publish and share their work with the wider academic community.
We recognize that the foundation of academic progress lies in the free exchange of ideas. Through our publishing initiatives, we aim to bridge the gap between researchers and readers by ensuring that high-quality, peer-reviewed research remains accessible to everyone—irrespective of geographical or institutional limitations. <br />
At Scholint Publishers, we believe that scholarly publishing is not merely a process of dissemination but a vital part of education and innovation. Our mission is to nurture an environment that values ethical publishing, editorial transparency, and academic rigor.
Scholint Publishers supports the vision of a knowledge-based society where information flows freely to inspire innovation, critical thinking, and informed decision-making.

          </p>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-2">
             Publications

          </h1>
          <p className="text-justify leading-5.5 mb-4">
            Scholint Publishers currently publishes the International Journal of Pharmacy and Allied Fields (IJPAF) — an open-access, peer-reviewed journal that provides an international forum for the dissemination of research in pharmaceutical and allied sciences. IJPAF encourages submissions of original research articles, systematic reviews, and case studies that contribute to the scientific understanding and advancement of health-related fields. <br />
As our featured journal, IJPAF reflects Scholint Publishers’ dedication to academic integrity and global research visibility. In the coming years, we plan to expand our publishing portfolio to include additional academic journals and books in various domains of science, technology, and healthcare education.

          </p>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-2">
              Open Access Statement


          </h1>
          <p className="text-justify leading-5.5 mb-4">
           Scholint Publishers adheres to the principles of the open-access , ensuring that all published materials are freely available for reading and citation without subscription barriers. We believe open access accelerates academic growth, promotes cross-disciplinary collaboration, and enhances the reach and relevance of research outcomes. <br />
All our publications are licensed under recognized Creative Commons licenses, allowing authors to retain ownership of their work while enabling broader dissemination and reuse for educational and research purposes. This model not only supports authors’ academic visibility but also ensures equitable access to scientific knowledge.


          </p>
        </div>

          <div>
          <h1 className="text-lg font-semibold mb-2">
 Editorial and Ethical Standards


          </h1>
          <p className="text-justify leading-5.5 mb-4">
          Each submission to our journals undergoes a rigorous peer-review process conducted by qualified reviewers and supervised by our editorial board. We follow recognized international guidelines and uphold ethical publishing standards to ensure the authenticity, reliability, and quality of every publication.
Our editors and reviewers are committed to fair evaluation, timely feedback, and constructive guidance to help authors refine their manuscripts. By maintaining editorial transparency and academic objectivity, we aim to build long-term trust within the research community.


          </p>
        </div>
        <p>

In addition, we plan to collaborate with universities, research bodies, and industry partners to promote conferences, workshops, and knowledge-sharing events that encourage dialogue between theory and practice
        </p>
      </section>

      {/* ====== Journals Section ====== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
          Journals
        </h2>
       <ol className="list-decimal list-inside space-y-2">
  <li>Explore peer-reviewed journals across multiple disciplines.</li>
  <li>Submit your research work for publication.</li>
  <li>Access open-source academic papers and archives.</li>
  <li>Track upcoming journal release dates and announcements.</li>
  <li>Collaborate with international authors and reviewers.</li>
</ol>

      </section>

      {/* ====== Books Section ====== */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-orange-400 inline-block">
          Books
        </h2>
        <p className="text-gray-700">
          Our books section is coming soon! Stay tuned for new releases,
          e-books, and educational materials that will be available shortly.
        </p>
      </section>
    </main>
  );
}
