export default function HeroExplore() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          A New Way to Discover Music
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          AMUZIM explores a new discovery layer shaped by creators, 
          culture and hyper-curated music experiences.
        </p>

        <p className="text-lg text-gray-600 mb-10">
          Not more music. Better music.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/network"
            className="px-6 py-3 bg-black text-white"
          >
            Explore Network
          </a>

          <a
            href="/future"
            className="px-6 py-3 border border-black"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  )
}
