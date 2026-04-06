import { getAllArticles } from "@/lib/articles"
import ArticlesList from "@/components/editorial/ArticlesList"

export default function EditorialPage() {
  const articles = getAllArticles()

  return (
    <main>
      <h1>Editorial</h1>
      <p>AMUZIM Editorial — Music Intelligence & Culture</p>

      <ArticlesList articles={articles} />
    </main>
  )
}
