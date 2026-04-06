
import ArticleCard from "./ArticleCard"

export default function ArticlesList({ articles }) {
  return (
    <section>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </section>
  )
}
