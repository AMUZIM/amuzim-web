import { slugifyDisplayName } from "./slugify-display-name";

export function generateProfileSlug(
  displayName: string
) {
  return slugifyDisplayName(displayName);
}
