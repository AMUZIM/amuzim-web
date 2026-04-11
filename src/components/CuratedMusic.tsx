export default function CuratedMusic() {
  return (
    <section className="py-24 px-6 border-t">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Hyper-Curated Music
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          AMUZIM explores a new approach to music discovery through 
          curated sets, cultural scenes and creator-driven selections.
        </p>

        <p className="text-gray-600 mb-10">
          Instead of endless catalogs, AMUZIM focuses on meaningful 
          discovery shaped by creators, communities and cultural context.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Curated Sets
            </h3>
            <p className="text-gray-600">
              Discover music through curated sets created by artists, 
              producers and cultural communities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Cultural Discovery
            </h3>
            <p className="text-gray-600">
              Explore genres, scenes and movements shaped by culture, 
              not only algorithms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Creator-Driven Catalogs
            </h3>
            <p className="text-gray-600">
              Music discovery guided by creators, labels and 
              industry professionals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Listening Experiences
            </h3>
            <p className="text-gray-600">
              A new way to explore music through context, 
              culture and curated journeys.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
