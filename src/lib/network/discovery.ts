import { NetworkProfile } from "@/types/network";
import { getUserSignals } from "@/lib/network/signals";
import {
  computeUserAffinity,
  getTopAffinities,
} from "@/lib/network/signalsRanking";

// 🔹 base mock
const profiles: NetworkProfile[] = [];

// 🔹 discover con afinidad real
export function getDiscoverProfiles(
  userId: string
): NetworkProfile[] {
  const signals = getUserSignals(userId);

  const affinities = computeUserAffinity(signals, userId);
  const top = getTopAffinities(affinities, 50);

  const affinityMap = new Map<string, number>();
  top.forEach((a) => affinityMap.set(a.userId, a.affinity));

  return profiles
    .filter((p) => p.userId !== userId)
    .sort((a, b) => {
      const aScore = affinityMap.get(a.userId) || 0;
      const bScore = affinityMap.get(b.userId) || 0;
      return bScore - aScore;
    });
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
