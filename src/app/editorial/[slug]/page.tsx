import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function ArticlePage({ params }) {
  const { slug } = params

  const filePath = path.join(
    process.cwd(),
    "content/articles",
    `${slug}.mdx`
  )

  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <div>{content}</div>
    </article>
  )
}
