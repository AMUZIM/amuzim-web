import { NetworkProfile } from "@/types/network";
import { getRecommendedProfiles } from "@/lib/network/recommendation";

// 🔹 base mock
const profiles: NetworkProfile[] = [];

// 🔹 discover usando motor real
export function getDiscoverProfiles(
  userId: string
): NetworkProfile[] {
  return getRecommendedProfiles(userId, profiles, 50);
}

// 🔹 compat UI
export function getDiscoveryProfiles(): NetworkProfile[] {
  return profiles;
}

export function searchDiscoverProfiles(
  query: string
): NetworkProfile[] {
  const q = query.toLowerCase();

  return profiles.filter((p) =>
    JSON.stringify(p).toLowerCase().includes(q)
  );
}

export function searchProfiles(
  query: string
): NetworkProfile[] {
  return searchDiscoverProfiles(query);
}

export function setDiscoverProfiles(data: NetworkProfile[]) {
  profiles.length = 0;
  profiles.push(...data);
}
