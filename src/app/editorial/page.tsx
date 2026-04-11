export default function EditorialPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}

      <section className="mb-20">
        <h1 className="text-5xl font-semibold mb-6">
          Editorial
        </h1>

        <p className="text-xl text-gray-600">
          Music, culture and industry intelligence
        </p>
      </section>

      {/* Categories */}

      <section className="mb-20">
        <div className="flex gap-6 flex-wrap text-sm uppercase tracking-wide text-gray-600">
          <span>Artists</span>
          <span>Culture</span>
          <span>AI & Music</span>
          <span>Industry</span>
          <span>Market</span>
          <span>Technology</span>
          <span>Education</span>
          <span>Neuroscience</span>
        </div>
      </section>

      {/* Featured */}

      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">
          Featured
        </h2>

        <div className="bg-gray-100 rounded-xl p-10">
          <h3 className="text-2xl font-medium mb-4">
            AI and the future of music collaboration
          </h3>

          <p className="text-gray-600">
            Exploring how artificial intelligence is transforming creative collaboration in music.
          </p>
        </div>
      </section>

      {/* Latest */}

      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            Artist Interview
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Industry Analysis
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Cultural Discovery
          </div>
        </div>
      </section>

      {/* Trending */}

      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">
          Trending
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            Most Read
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Most Discussed
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Most Shared
          </div>
        </div>
      </section>

      {/* Long Form */}

      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">
          Long Form
        </h2>

        <div className="bg-gray-100 rounded-xl p-10">
          Industry analysis, culture essays and future of music.
        </div>
      </section>

      {/* Contributors */}

      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">
          Contributors
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            Artists
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Industry
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Educators
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            Researchers
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="text-center py-20">
        <h2 className="text-4xl font-semibold mb-6">
          Join AMUZIM Editorial
        </h2>

        <p className="text-gray-600 mb-8">
          Music intelligence, culture and creator knowledge
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3">
            Join AMUZIM
          </button>

          <button className="border px-6 py-3">
            Explore Platform
          </button>
        </div>
      </section>

    </main>
  )
}
