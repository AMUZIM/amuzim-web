
import { UserRole } from "./user"

export type PostType =
  | "discovery"
  | "creator"
  | "industry"
  | "discussion"
  | "announcement"


export interface Post {
  id: string

  authorId: string
  authorName: string
  authorRole: UserRole
  authorAvatar?: string

  content: string

  type: PostType

  tags?: string[]

  likes?: number
  comments?: number

  createdAt: string
}
