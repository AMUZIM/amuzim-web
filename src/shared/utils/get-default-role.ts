import type { UserRole } from "@/shared/types/user-role";

export function getDefaultRole(): UserRole {
  return "user";
}
