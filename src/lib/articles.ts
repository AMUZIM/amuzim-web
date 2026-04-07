export function getAllArticles() {
return []
}


  return articles.sort((a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime()
  )
}
