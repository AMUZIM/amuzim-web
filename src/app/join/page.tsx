export default function JoinPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Join AMUZIM
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            A new music intelligence platform for creators, fans and industry
          </p>

          <p className="text-gray-500">
            Be part of the next generation music ecosystem.
          </p>

        </div>
      </section>


      {/* New Ecosystem Section */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            A New Music Ecosystem
          </h2>

          <p className="text-gray-600 mb-6">
            AMUZIM connects discovery, creation and collaboration.
          </p>

          <p className="text-gray-600">
            Fans, creators and industry shaping the future of music together.
          </p>

        </div>
      </section>


      {/* User Types */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            What best describes you
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Music Lover */}

            <div className="border p-8 rounded-lg hover:border-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Music Lover
              </h3>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Discover new creators</li>
                <li>Explore music culture</li>
                <li>Join communities</li>
              </ul>

              <a
                href="/network"
                className="inline-block border px-5 py-2 hover:bg-black hover:text-white transition"
              >
                Join as Fan
              </a>
            </div>


            {/* Creator */}

            <div className="border p-8 rounded-lg hover:border-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Creator / Professional
              </h3>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Share projects</li>
                <li>Connect with industry</li>
                <li>Discover opportunities</li>
              </ul>

              <a
                href="/creators"
                className="inline-block border px-5 py-2 hover:bg-black hover:text-white transition"
              >
                Join as Creator
              </a>
            </div>


            {/* Industry */}

            <div className="border p-8 rounded-lg hover:border-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Company / Organization
              </h3>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Discover creators</li>
                <li>Build collaborations</li>
                <li>Access talent</li>
              </ul>

              <a
                href="/network"
                className="inline-block border px-5 py-2 hover:bg-black hover:text-white transition"
              >
                Join as Industry
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* Early Access */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Early Access
          </h2>

          <p className="text-gray-600 mb-6">
            We are inviting early members to shape the future of AMUZIM.
          </p>

          <p className="text-gray-600">
            Fans, creators and industry building a new music ecosystem together.
          </p>

        </div>
      </section>


      {/* Final CTA */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            This is Just the Beginning
          </h2>

          <p className="text-gray-600 mb-8">
            Join early and be part of the evolution of music discovery.
          </p>

          <a
            href="/explore"
            className="px-6 py-3 border hover:bg-black hover:text-white transition"
          >
            Learn More
          </a>

        </div>
      </section>

    </main>
  )
}
