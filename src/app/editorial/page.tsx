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


      {/* Featured */}

      <section className="mb-24">

        <h2 className="text-2xl font-semibold mb-10">
          Featured Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Main Featured */}

          <a 
            href="/editorial/ai-music-rights"
            className="md:col-span-2 group"
          >

            <div className="relative h-[420px] rounded-xl overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative h-full flex items-end p-8">
                <div>
                  <h3 className="text-3xl text-white font-semibold mb-2">
                    Can AI Music Be Registered?
                  </h3>

                  <p className="text-gray-200">
                    The legal question redefining ownership in AI music
                  </p>
                </div>
              </div>

            </div>

          </a>


          {/* Secondary */}

          <div className="flex flex-col gap-8">

            <a 
              href="/editorial/music-dopamine"
              className="group"
            >

              <div className="relative h-[200px] rounded-xl overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative h-full flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    Music & Dopamine
                  </h3>
                </div>

              </div>

            </a>


            <a 
              href="/editorial/spanish-urban-movement"
              className="group"
            >

              <div className="relative h-[200px] rounded-xl overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative h-full flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    Spanish Urban Movement
                  </h3>
                </div>

              </div>

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
