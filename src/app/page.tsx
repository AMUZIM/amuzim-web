import Image from "next/image"

export default function HomePage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Logo Vertical */}

          <Image
            src="/logo/logo-vertical.png"
            alt="AMUZIM"
            width={220}
            height={120}
            className="mb-6"
            priority
          />

          <p className="text-xl text-gray-600 mb-6 max-w-2xl">
            Music Intelligence Platform
          </p>

          <p className="text-gray-500 max-w-2xl mb-10">
            Discover, connect and shape the future of music.
          </p>

          <div className="flex gap-4">
            <a
              href="/explore"
              className="px-6 py-3 bg-black text-white"
            >
              Explore
            </a>

            <a
              href="/join"
              className="px-6 py-3 border"
            >
              Join
            </a>
          </div>

        </div>
      </section>


      {/* Explore */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Explore
          </h2>

          <p className="text-gray-600 max-w-2xl mb-8">
            Discover curated music, creators and cultural movements.
          </p>

          <a href="/explore" className="text-sm underline">
            Explore →
          </a>

        </div>
      </section>


      {/* Creators */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Creators
          </h2>

          <p className="text-gray-600 max-w-2xl mb-8">
            A new infrastructure for creators, discovery and opportunities.
          </p>

          <a href="/creators" className="text-sm underline">
            For Creators →
          </a>

        </div>
      </section>


      {/* Network */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Network
          </h2>

          <p className="text-gray-600 max-w-2xl mb-8">
            Connect fans, creators and industry in one music ecosystem.
          </p>

          <a href="/network" className="text-sm underline">
            Join Network →
          </a>

        </div>
      </section>


      {/* Editorial */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Editorial
          </h2>

          <p className="text-gray-600 max-w-2xl mb-8">
            Music intelligence, ideas and cultural discovery.
          </p>

          <a href="/editorial" className="text-sm underline">
            Read Editorial →
          </a>

        </div>
      </section>


      {/* Future */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Future
          </h2>

          <p className="text-gray-600 max-w-2xl mb-8">
            Streaming, creative AI and the next generation music platform.
          </p>

          <a href="/future" className="text-sm underline">
            Discover Future →
          </a>

        </div>
      </section>


      {/* Join CTA */}

      <section className="py-32 px-6 border-t text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Join AMUZIM
          </h2>

          <p className="text-gray-600 mb-8">
            Be part of the next generation music ecosystem.
          </p>

          <a
            href="/join"
            className="px-6 py-3 bg-black text-white"
          >
            Join Early
          </a>

        </div>
      </section>

    </main>
  )
}
