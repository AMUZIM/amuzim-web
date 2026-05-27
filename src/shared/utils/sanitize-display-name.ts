export function sanitizeDisplayName(
  displayName: string
) {
  return displayName.trim().replace(/\s+/g, " ");
}
