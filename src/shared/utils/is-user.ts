import { getUserRole } from "./get-user-role";

export function isUser() {
  return getUserRole() === "user";
}
