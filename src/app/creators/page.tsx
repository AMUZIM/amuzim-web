import CreatorInfrastructure from "../../components/CreatorInfrastructure"
import Learning from "../../components/Learning"

export default function CreatorsPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            For Creators
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            A new infrastructure for music creators and professionals
          </p>

          <p className="text-gray-500">
            Discover, connect and create within a new music intelligence ecosystem.
          </p>

        </div>
      </section>


      {/* Why Creators Join */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Why Creators Join AMUZIM
          </h2>

          <p className="text-gray-600 mb-6">
            AMUZIM explores new ways for creators to discover opportunities and grow.
          </p>

          <p className="text-gray-600">
            From curated discovery to industry connections and future creative tools.
          </p>

        </div>
      </section>


      {/* Creator Infrastructure */}

      <CreatorInfrastructure />


      {/* Creative AI */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Creative AI for Creators
          </h2>

          <p className="text-gray-600 mb-6">
            The next generation of creativity will be powered by intelligence.
          </p>

          <p className="text-gray-600">
            AMUZIM explores creative tools and new discovery models
            designed for modern creators.
          </p>

        </div>
      </section>


      {/* Curated Catalog */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Be Part of Curated Catalogs
          </h2>

          <p className="text-gray-600 mb-6">
            Creator-driven catalogs, curated sets and cultural discovery.
          </p>

          <p className="text-gray-600">
            Join early and be part of a new discovery layer for music.
          </p>

        </div>
      </section>


      {/* Learning */}

      <Learning />


      {/* Future Opportunities */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Future Opportunities
          </h2>

          <p className="text-gray-600 mb-6">
            Streaming, collaborations, curated discovery and new creator models.
          </p>

          <p className="text-gray-600">
            AMUZIM is building a new ecosystem for creators.
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
            Join early and help shape the future of AMUZIM.
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
