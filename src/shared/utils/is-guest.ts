import { getUserRole } from "./get-user-role";

export function isGuest() {
  return getUserRole() === "guest";
}
