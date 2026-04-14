import { Signal } from "@/types/signal"

export const networkSignals: Signal[] = [

  {
    id: "1",
    title: "Emerging Electronic Creators",
    description: "Growing activity in experimental electronic",
    type: "trend",
    role: "industry",
    createdAt: new Date().toISOString()
  },

  {
    id: "2",
    title: "Collaboration Requests Rising",
    description: "More creators looking for collaborations",
    type: "collaboration",
    role: "creator",
    createdAt: new Date().toISOString()
  },

  {
    id: "3",
    title: "Fans Discovering Underground",
    description: "Increase in underground discovery",
    type: "discovery",
    role: "fan",
    createdAt: new Date().toISOString()
  }

]
