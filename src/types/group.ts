
export interface Group {
  id: string

  name: string
  description?: string

  slug: string

  category?:
    | "genre"
    | "city"
    | "industry"
    | "movement"

  coverImage?: string

  members?: number

  createdAt: string
}
