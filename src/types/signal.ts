import { UserRole } from "./user"

export type SignalType =
  | "discovery"
  | "trend"
  | "collaboration"
  | "industry_interest"

export interface Signal {
  id: string

  title: string
  description: string

  type: SignalType

  role: UserRole

  createdAt: string
}
