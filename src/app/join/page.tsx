export default function JoinPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Join AMUZIM
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Connect creators, fans and industry in the next generation music platform
          </p>

        </div>
      </section>

      {/* User Types */}

      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            What best describes you
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Music Lover */}

            <div className="border p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Music Lover
              </h3>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Discover creators</li>
                <li>Follow artists</li>
                <li>Join discussions</li>
              </ul>

              <a
                href="/network"
                className="inline-block border px-5 py-2"
              >
                Continue
              </a>
            </div>

            {/* Creator */}

            <div className="border p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Creator / Professional
              </h3>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Share projects</li>
                <li>Connect with industry</li>
                <li>Find opportunities</li>
              </ul>

              <a
                href="/creators"
                className="inline-block border px-5 py-2"
              >
                Continue
              </a>
            </div>

            {/* Company */}

            <div className="border p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Company / Organization
              </h3>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Discover creators</li>
                <li>Build relationships</li>
                <li>Manage collaborations</li>
              </ul>

              <a
                href="/creators"
                className="inline-block border px-5 py-2"
              >
                Continue
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Early Access
          </h2>

          <p className="text-gray-600 mb-8">
            We are inviting creators, fans and industry to join early
          </p>

          <a
            href="/explore"
            className="px-6 py-3 border"
          >
            Learn More
          </a>

        </div>
      </section>

    </main>
  )
}
