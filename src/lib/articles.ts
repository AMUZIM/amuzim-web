import fs from "fs"
import path from "path"
import matter from "gray-matter"

const articlesDirectory = path.join(process.cwd(), "content/articles")

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "")

    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    }
  })

  return articles.sort((a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime()
  )
}
