export function slugifyDisplayName(
  displayName: string
) {
  return displayName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}
