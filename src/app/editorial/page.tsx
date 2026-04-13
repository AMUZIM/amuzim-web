"use client"

import { useState } from "react"

const articles = [
  { title: "AI Music Rights", link: "/editorial/ai-music-rights", category: "AI" },
  { title: "Music & Dopamine", link: "/editorial/music-dopamine", category: "Science" },
  { title: "Spanish Urban Movement", link: "/editorial/spanish-urban-movement", category: "Culture" },
  { title: "AI Ownership Models", link: "/editorial/ai-ownership-models", category: "AI" },
  { title: "Future Music Discovery", link: "/editorial/future-music-discovery", category: "Future" },
  { title: "Rise Independent Labels", link: "/editorial/rise-independent-labels", category: "Industry" },
  { title: "Global Electronic Movement", link: "/editorial/global-electronic-movement", category: "Culture" },
  { title: "AI Artists", link: "/editorial/music-ai-artists", category: "AI" },
  { title: "Creator Economy", link: "/editorial/creator-economy-music", category: "Industry" },
  { title: "Future Music Economy", link: "/editorial/music-future-economy", category: "Future" },
]

export default function EditorialPage() {
  const [search, setSearch] = useState("")

  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Editorial
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Music intelligence, culture and future-focused insights shaping the next generation of discovery.
        </p>
      </section>


      {/* Search */}

      <section className="mb-16">

        <input
          type="text"
          placeholder="Search articles..."
          className="w-full border rounded-lg px-6 py-4 text-lg"
          onChange={(e) => setSearch(e.target.value)}
        />

      </section>


      {/* Articles */}

      <section className="grid md:grid-cols-2 gap-8">

        {filtered.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="border rounded-lg p-8 hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {article.title}
            </h3>

            <p className="text-gray-500">
              {article.category}
            </p>

          </a>
        ))}

      </section>

    </main>
  )
}
