import { getUserRole } from "./get-user-role";

export function isEditor() {
  return getUserRole() === "editor";
}
