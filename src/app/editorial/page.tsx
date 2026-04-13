"use client"

import { useState } from "react"

const articles = [
  { 
    title: "AI Music Rights", 
    link: "/editorial/ai-music-rights", 
    category: "AI",
    tags: ["AI","Copyright","Ownership"]
  },
  { 
    title: "Music & Dopamine", 
    link: "/editorial/music-dopamine", 
    category: "Science",
    tags: ["Brain","Psychology","Behavior"]
  },
  { 
    title: "Spanish Urban Movement", 
    link: "/editorial/spanish-urban-movement", 
    category: "Culture",
    tags: ["Urban","Global","Culture"]
  },
  { 
    title: "AI Ownership Models", 
    link: "/editorial/ai-ownership-models", 
    category: "AI",
    tags: ["AI","Ownership","Future"]
  },
  { 
    title: "Future Music Discovery", 
    link: "/editorial/future-music-discovery", 
    category: "Future",
    tags: ["Discovery","AI","Future"]
  },
  { 
    title: "Rise Independent Labels", 
    link: "/editorial/rise-independent-labels", 
    category: "Industry",
    tags: ["Labels","Industry","Independent"]
  },
  { 
    title: "Global Electronic Movement", 
    link: "/editorial/global-electronic-movement", 
    category: "Culture",
    tags: ["Electronic","Global","Culture"]
  },
  { 
    title: "AI Artists", 
    link: "/editorial/music-ai-artists", 
    category: "AI",
    tags: ["AI","Artists","Future"]
  },
  { 
    title: "Creator Economy", 
    link: "/editorial/creator-economy-music", 
    category: "Creators",
    tags: ["Creators","Economy","Industry"]
  },
  { 
    title: "Future Music Economy", 
    link: "/editorial/music-future-economy", 
    category: "Future",
    tags: ["Economy","Future","Music"]
  },
]

const categories = ["All","AI","Culture","Industry","Future","Science","Creators"]

export default function EditorialPage() {

  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeTag, setActiveTag] = useState("All")

  const allTags = [
    "All",
    ...Array.from(new Set(articles.flatMap(a => a.tags)))
  ]

  const filtered = articles.filter(article => {

    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory

    const matchesTag =
      activeTag === "All" || article.tags.includes(activeTag)

    return matchesSearch && matchesCategory && matchesTag
  })

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* Hero */}

      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Editorial
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Music intelligence, cultural analysis and future insights shaping the evolution of music.
        </p>
      </section>


      {/* Narrative Section */}

      <section className="mb-24 text-center">
        <p className="text-gray-600 max-w-3xl mx-auto">
          Editorial explores ideas, movements and technologies shaping the next generation of music discovery, creation and culture.
        </p>
      </section>


      {/* Featured */}

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Featured Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <a
            href="/editorial/ai-music-rights"
            className="md:col-span-2 border rounded-xl p-10 hover:shadow-md transition"
          >
            <h3 className="text-3xl font-semibold mb-4">
              Can AI Music Be Registered?
            </h3>

            <p className="text-gray-600">
              The legal question redefining ownership in AI music
            </p>
          </a>

          <div className="flex flex-col gap-8">

            <a
              href="/editorial/music-dopamine"
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">
                Music & Dopamine
              </h3>
            </a>

            <a
              href="/editorial/spanish-urban-movement"
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">
                Spanish Urban Movement
              </h3>
            </a>

          </div>

        </div>

      </section>


      {/* Latest */}

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {articles.slice(0,6).map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {article.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {article.category}
              </p>

            </a>
          ))}

        </div>

      </section>


      {/* Categories */}

      <section className="mb-10 flex flex-wrap gap-4">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === category
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}

      </section>


      {/* Tags */}

      <section className="mb-16 flex flex-wrap gap-3">

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              activeTag === tag
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}

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

            <p className="text-gray-500 mb-3">
              {article.category}
            </p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs border px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

          </a>
        ))}

      </section>

    </main>
  )
}
