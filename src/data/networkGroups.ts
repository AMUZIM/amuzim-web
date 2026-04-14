import { Group } from "@/types/group"

export const networkGroups: Group[] = [
  {
    id: "1",
    name: "Future Sounds",
    description: "Emerging global sounds",
    slug: "future-sounds",
    category: "movement",
    members: 128,
    createdAt: new Date().toISOString()
  },

  {
    id: "2",
    name: "Emerging Creators",
    description: "New generation creators",
    slug: "emerging-creators",
    category: "industry",
    members: 89,
    createdAt: new Date().toISOString()
  },

  {
    id: "3",
    name: "Berlin Electronic",
    description: "Berlin electronic scene",
    slug: "berlin-electronic",
    category: "city",
    members: 54,
    createdAt: new Date().toISOString()
  }
]
