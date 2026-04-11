export default function CreatorsPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            For Creators
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Join a new infrastructure for music creators and professionals
          </p>

        </div>
      </section>


      {/* Why Join */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Why Creators Join AMUZIM
          </h2>

          <p className="text-gray-600 mb-6">
            AMUZIM explores new ways for creators to connect, discover and grow.
          </p>

          <p className="text-gray-600">
            From curated discovery to industry connections and future streaming opportunities.
          </p>

        </div>
      </section>


      {/* Creator Infrastructure */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Creator Infrastructure
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Curated Discovery
              </h3>
              <p className="text-gray-600">
                Be part of curated sets, catalogs and creator-driven discovery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Industry Connections
              </h3>
              <p className="text-gray-600">
                Connect with labels, professionals and creative communities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Creator Opportunities
              </h3>
              <p className="text-gray-600">
                Discover collaborations, licensing and future opportunities.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Curated Catalog */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Be Part of Curated Catalogs
          </h2>

          <p className="text-gray-600 mb-6">
            AMUZIM explores creator-driven catalogs, curated sets and cultural discovery.
          </p>

          <p className="text-gray-600">
            Join early and be part of a new discovery layer for music.
          </p>

        </div>
      </section>


      {/* Early Access */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Early Creator Access
          </h2>

          <p className="text-gray-600 mb-8">
            We are inviting creators to join early and shape the future of AMUZIM.
          </p>

          <a
            href="/join"
            className="px-6 py-3 bg-black text-white"
          >
            Join as Creator
          </a>

        </div>
      </section>

    </main>
  )
}
