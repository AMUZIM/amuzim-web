export default function ExploreCTA() {
  return (
    <main>

      {/* Future Narrative */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            A New Way to Experience Music
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            AMUZIM explores a different way to discover music.
          </p>

          <p className="text-gray-600 mb-8">
            Hyper-curated sets · Creator-driven discovery · Cultural listening experiences
          </p>

          <p className="text-xl font-medium mb-8">
            Not more music. Better music.
          </p>

          <a 
            href="/future"
            className="inline-block underline"
          >
            Learn more about the future of AMUZIM →
          </a>

        </div>
      </section>


      {/* Join Network CTA */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Join the AMUZIM Network
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Connect creators, fans and industry in a new music infrastructure
          </p>

          <div className="flex justify-center gap-4">

            <a
              href="/network"
              className="px-6 py-3 bg-black text-white"
            >
              Join Network
            </a>

            <a
              href="/join"
              className="px-6 py-3 border border-black"
            >
              Early Access
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}
