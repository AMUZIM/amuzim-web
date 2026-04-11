export default function Learning() {
  return (
    <section className="py-24 px-6 border-t">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Music Intelligence
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Discover music through context, culture and creator knowledge.
        </p>

        <p className="text-gray-600 mb-10">
          AMUZIM explores a deeper understanding of music, connecting 
          creators, scenes and cultural movements.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Cultural Discovery
            </h3>
            <p className="text-gray-600">
              Explore music through scenes, genres and cultural movements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Creator Context
            </h3>
            <p className="text-gray-600">
              Discover the creators shaping music and cultural evolution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Genre Exploration
            </h3>
            <p className="text-gray-600">
              Understand genres, subgenres and emerging music scenes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Industry Insight
            </h3>
            <p className="text-gray-600">
              Learn about the evolving music ecosystem and creator economy.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a 
            href="/editorial"
            className="inline-block underline"
          >
            Explore Editorial →
          </a>
        </div>

      </div>
    </section>
  )
}
