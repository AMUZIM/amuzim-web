import { getUserRole } from "./get-user-role";

export function isCreator() {
  return getUserRole() === "creator";
}
