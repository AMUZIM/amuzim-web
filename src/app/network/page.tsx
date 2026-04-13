import IndustryAccess from "../../components/IndustryAccess"
import LegalRights from "../../components/LegalRights"

export default function NetworkPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            AMUZIM Network
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Where music lovers, creators and industry connect
          </p>

          <p className="text-gray-500 mb-8">
            A global music network built around discovery, culture and collaboration.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/join"
              className="px-6 py-3 bg-black text-white"
            >
              Join Network
            </a>

            <a
              href="/explore"
              className="px-6 py-3 border border-black"
            >
              Explore Platform
            </a>
          </div>

        </div>
      </section>


      {/* Who is AMUZIM for */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Who is AMUZIM for
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Music Lovers
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>Discover new creators</li>
                <li>Explore curated culture</li>
                <li>Participate in music communities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Creators
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>Share projects</li>
                <li>Connect with fans</li>
                <li>Discover opportunities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Industry
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>Discover talent</li>
                <li>Build collaborations</li>
                <li>Connect with creators</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* Culture First */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Culture First Network
          </h2>

          <p className="text-gray-600 mb-6">
            AMUZIM connects people through music culture, not just profiles.
          </p>

          <p className="text-gray-600">
            Fans, creators and industry interact around discovery,
            creativity and shared musical interests.
          </p>

        </div>
      </section>


      {/* Network Features */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Inside the Network
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-600">

            <div>
              <h3 className="font-semibold mb-2">Music Communities</h3>
              <p>Discover scenes and cultural movements</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Creator Profiles</h3>
              <p>Professional creator identities</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Industry Connections</h3>
              <p>Connect with labels and professionals</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Opportunities</h3>
              <p>Collaborations and projects</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Discussions</h3>
              <p>Music and creative conversations</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Global Community</h3>
              <p>Music lovers worldwide</p>
            </div>

          </div>

        </div>
      </section>


      <IndustryAccess />

      <LegalRights />


      {/* CTA */}

      <section className="py-24 px-6 border-t">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Join AMUZIM Network
          </h2>

          <p className="text-gray-600 mb-8">
            Fans, creators and industry in one network
          </p>

          <a
            href="/join"
            className="px-6 py-3 bg-black text-white"
          >
            Join AMUZIM
          </a>

        </div>
      </section>

    </main>
  )
}
