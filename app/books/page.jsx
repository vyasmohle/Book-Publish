export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* ====== Books ====== */}
      <section className="space-y-4 mt-10">
        <h2 className="text-lg font-semibold">Publish Your Book With Us</h2>

        <p className="text-justify">
          Are you an author, educator, or researcher looking to publish your
          work? We welcome book proposals from individuals and institutions
          across all fields of academic and applied sciences.
        </p>

        <div className="bg-gray-100 p-3 rounded-md">
          <p className="font-medium">
            📘 Submit Your Proposal:{" "}
            <span className="font-semibold">abc@gmail.com</span>
          </p>
        </div>

        <p className="text-justify">
          Our team will assist you with proposal evaluation, editorial support,
          design, and global publication.
        </p>
      </section>
    </main>
  );
}
