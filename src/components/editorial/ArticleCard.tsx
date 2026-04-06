
import Link from "next/link"

export default function ArticleCard({ article }) {
  return (
    <article>
      <h2>
        <Link href={`/editorial/${article.slug}`}>
          {article.title}
        </Link>
      </h2>

      <p>{article.description}</p>

      <small>
        {article.category} — {article.publishedAt}
      </small>
    </article>
  )
}
