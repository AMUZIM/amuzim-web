import { NetworkProfile } from "@/types/network";
import { getUserSignals, computeScore } from "@/lib/network/signals";

// 🔹 base mock (temporal)
const profiles: NetworkProfile[] = [];

// 🔹 discover base (ranking por signals)
export function getDiscoverProfiles(
  userId: string
): NetworkProfile[] {
  const signals = getUserSignals(userId);
  const scores = computeScore(signals);

  const scoreMap = new Map<string, number>();
  scores.forEach((s) => scoreMap.set(s.userId, s.score));

  return profiles
    .filter((p) => p.userId !== userId)
    .sort((a, b) => {
      const scoreA = scoreMap.get(a.userId) || 0;
      const scoreB = scoreMap.get(b.userId) || 0;
      return scoreB - scoreA;
    });
}

// 🔹 search seguro (sin asumir fields inexistentes)
export function searchDiscoverProfiles(
  query: string
): NetworkProfile[] {
  const q = query.toLowerCase();

  return profiles.filter((p) =>
    JSON.stringify(p).toLowerCase().includes(q)
  );
}

// 🔹 helper
export function setDiscoverProfiles(data: NetworkProfile[]) {
  profiles.length = 0;
  profiles.push(...data);
}
