export default function NetworkPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            AMUZIM Network
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Connect creators, industry and music culture
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/join"
              className="px-6 py-3 bg-black text-white"
            >
              Join Network
            </a>

            <a
              href="/explore"
              className="px-6 py-3 border border-black"
            >
              Explore Platform
            </a>
          </div>

        </div>
      </section>

      {/* User Types */}

      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Who is AMUZIM for
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Music Lovers
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>Discover creators</li>
                <li>Follow artists</li>
                <li>Join discussions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Creators & Professionals
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>Connect with industry</li>
                <li>Share projects</li>
                <li>Find opportunities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Companies & Organizations
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>Discover creators</li>
                <li>Build relationships</li>
                <li>Manage collaborations</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Inside the Network
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>Discussions</div>
            <div>Creator Profiles</div>
            <div>Industry Connections</div>
            <div>Opportunities</div>
            <div>Collaboration</div>
            <div>Community</div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Join AMUZIM Network
          </h2>

          <p className="text-gray-600 mb-8">
            Connect creators, fans and industry
          </p>

          <a
            href="/join"
            className="px-6 py-3 bg-black text-white"
          >
            Join AMUZIM
          </a>

        </div>
      </section>

    </main>
  )
}
