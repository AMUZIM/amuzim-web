
export type UserRole =
  | "fan"
  | "creator"
  | "industry";


export interface UserProfile {
  id: string
  email: string

  role: UserRole

  username: string
  displayName: string
  bio?: string

  location?: string
  website?: string

  avatarUrl?: string
  coverUrl?: string

  interests?: string[]

  createdAt: string
  updatedAt?: string
}


export interface CreatorProfile extends UserProfile {
  role: "creator"

  genres?: string[]
  platforms?: {
    spotify?: string
    soundcloud?: string
    youtube?: string
  }
}


export interface IndustryProfile extends UserProfile {
  role: "industry"

  company?: string
  position?: string
  industryType?: string
}


export interface FanProfile extends UserProfile {
  role: "fan"

  favoriteGenres?: string[]
  favoriteArtists?: string[]
}
