export default function SpanishUrbanMovement() {
  return (
    <main>

      {/* Hero Image */}

      <section className="relative h-[75vh]">

        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
          alt="Spanish Urban Movement"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold text-center px-6">
            Spanish Urban Movement
          </h1>
        </div>

      </section>


      {/* Content */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <p className="text-xl text-gray-600 mb-12">
          How Spanish-Language Urban Sound Is Reshaping Global Culture
        </p>

        <article className="prose prose-lg max-w-none">

          <p>
          Spanish urban music is no longer regional. It is becoming global.
          </p>

          <p>
          Artists across Spain and Latin culture are shaping a new hybrid sound influenced by reggaeton, trap, and electronic music.
          </p>

          <h2>New Generation</h2>

          <p>
          A new generation of creators is redefining Spanish-language music identity.
          </p>

          <h2>Independent Culture</h2>

          <p>
          Independent artists are leading innovation through digital platforms and global collaboration.
          </p>

          <h2>Global Expansion</h2>

          <p>
          Spanish urban music is expanding rapidly across Europe, Latin America, and global streaming platforms.
          </p>

        </article>

      </section>

    </main>
  )
}
