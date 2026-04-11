export default function CuratedMusic() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Curated Music Infrastructure
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Curated catalogs, genres, and cultural sound discovery
        </p>

        <ul className="space-y-2 mb-8">
          <li>Curated catalogs</li>
          <li>Genre-based discovery</li>
          <li>DJ sets</li>
          <li>Producer catalogs</li>
          <li>Cultural collections</li>
          <li>Editorial curation</li>
        </ul>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white">
            Explore Catalog
          </button>

          <button className="px-6 py-3 border border-black">
            Submit Your Music
          </button>
        </div>

      </div>
    </section>
  )
}
