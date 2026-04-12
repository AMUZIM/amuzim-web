export default function AIArticle() {
  return (
    <main>

      {/* Hero Image */}

      <section className="relative h-[75vh]">

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI Music"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold text-center px-6">
            Can AI Music Be Registered?
          </h1>
        </div>

      </section>


      {/* Content */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <p className="text-xl text-gray-600 mb-12">
          The Legal Question That May Redefine Music Ownership
        </p>

        <article className="prose prose-lg max-w-none">

          <p>
          Music is entering a new era. Artificial intelligence is no longer assisting creativity — it is creating music itself.
          </p>

          <p>
          AI can now compose full tracks, generate melodies, create lyrics, clone voices, and produce complete songs.
          </p>

          <h2>The Core Legal Principle</h2>

          <p>
          Copyright law has always been built on one fundamental idea: Creativity belongs to humans.
          </p>

          <h2>The AMUZIM Perspective</h2>

          <p>
          AI-generated music is not just a legal issue. It represents a shift in creative ownership and a new music economy.
          </p>

        </article>

      </section>

    </main>
  )
}
