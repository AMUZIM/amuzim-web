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
