import fs from "fs"
import path from "path"

const articlesDirectory = path.join(process.cwd(), "content/articles")

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")

    return {
      slug,
    }
  })

  return articles
}
