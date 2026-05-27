export function getUserInitials(
  displayName: string
) {
  return displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
