export default function NetworkPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-center">

      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Network
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        Creators, industry and music community
      </p>

      <div className="border rounded-lg p-10">
        <h2 className="text-2xl font-medium mb-4">
          Coming Soon
        </h2>

        <p className="text-gray-600 mb-8">
          We are building a global network for creators, 
          industry professionals and music communities.
        </p>

        <a 
          href="/explore"
          className="inline-block border px-6 py-3"
        >
          Back to Explore
        </a>
      </div>

    </main>
  )
}
