export default function EditorialPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}

      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Editorial
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Music intelligence, culture and future-focused insights shaping the next generation of discovery.
        </p>
      </section>


      {/* Featured Articles */}

      <section className="mb-24">

        <h2 className="text-2xl font-semibold mb-10">
          Featured Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Main Featured */}

          <a 
            href="/editorial/ai-music-rights"
            className="md:col-span-2 border rounded-xl p-10 hover:shadow-md transition"
          >
            <h3 className="text-3xl font-semibold mb-4">
              Can AI Music Be Registered?
            </h3>

            <p className="text-gray-600 text-lg">
              The legal question redefining ownership in the era of AI-generated music.
            </p>

          </a>


          {/* Secondary */}

          <div className="grid md:grid-cols-2 gap-8 md:col-span-2">

            <a 
              href="/editorial/music-dopamine"
              className="border rounded-xl p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Music & Dopamine
              </h3>

              <p className="text-gray-600">
                How music shapes the brain, behavior and global culture.
              </p>
            </a>


            <a 
              href="/editorial/spanish-urban-movement"
              className="border rounded-xl p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Spanish Urban Music Movement
              </h3>

              <p className="text-gray-600">
                How Spanish-language urban sound is reshaping global culture.
              </p>
            </a>

          </div>

        </div>

      </section>


      {/* Categories */}

      <section className="grid md:grid-cols-2 gap-10">

        <Category 
          title="Intelligence"
          description="AI, music science, behavior and the evolving music ecosystem."
        />

        <Category 
          title="Culture"
          description="Global movements, emerging scenes and creative communities."
        />

        <Category 
          title="Industry"
          description="Independent labels, new distribution and creator economy."
        />

        <Category 
          title="Future"
          description="AI artists, virtual creators and the future of music discovery."
        />

        <Category 
          title="Creative"
          description="Remix culture, sampling and digital creativity."
        />

      </section>

    </main>
  )
}


function Category({ title, description }) {
  return (
    <div className="border rounded-lg p-8 hover:shadow-sm transition">

      <h2 className="text-2xl font-medium mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  )
}
