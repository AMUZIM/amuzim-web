import { getUserRole } from "./get-user-role";

export function isAdmin() {
  return getUserRole() === "admin";
}
