import { generateProfileSlug } from "./generate-profile-slug";

export function getPublicProfileRoute(
  displayName: string
) {
  const slug = generateProfileSlug(displayName);

  return `/creators/${slug}`;
}
