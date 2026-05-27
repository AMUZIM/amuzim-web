import { getUserInitials } from "./get-user-initials";

export function getUserAvatarFallback(
  displayName: string
) {
  return getUserInitials(displayName);
}
