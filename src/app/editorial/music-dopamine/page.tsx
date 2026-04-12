export default function MusicDopamine() {
  return (
    <main>

      {/* Hero Image */}

      <section className="relative h-[75vh]">

        <img
          src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad"
          alt="Music Dopamine Brain"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold text-center px-6">
            Music & Dopamine
          </h1>
        </div>

      </section>


      {/* Content */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <p className="text-xl text-gray-600 mb-12">
          How Music Shapes the Brain, Behavior, and Global Culture
        </p>

        <article className="prose prose-lg max-w-none">

          <p>
          Music is not only sound. It is biology, psychology, and behavior.
          </p>

          <p>
          When humans listen to music, dopamine is released. This neurochemical is linked to pleasure, motivation, and learning.
          </p>

          <h2>Music Activates the Brain</h2>

          <p>
          Neuroscience research shows that music activates reward systems in the brain similar to food and social bonding.
          </p>

          <h2>Dopamine Before the Drop</h2>

          <p>
          The brain releases dopamine before musical peaks. This anticipation creates emotional engagement.
          </p>

          <h2>Cultural Impact</h2>

          <p>
          Music shapes identity, culture, and social bonding across global communities.
          </p>

        </article>

      </section>

    </main>
  )
}
