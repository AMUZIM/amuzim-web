export function isValidProfileSlug(
  slug: string
) {
  return /^[a-z0-9-]+$/.test(slug);
}
