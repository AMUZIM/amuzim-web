import { NetworkProfile } from "@/types/network";
import { getUserSignals, computeScore } from "@/lib/network/signals";

// 🔹 base mock (temporal hasta DB real)
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

// 🔹 search simple
export function searchDiscoverProfiles(
  query: string
): NetworkProfile[] {
  return profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.username.toLowerCase().includes(query.toLowerCase())
  );
}

// 🔹 helper para futuro (no romper)
export function setDiscoverProfiles(data: NetworkProfile[]) {
  profiles.length = 0;
  profiles.push(...data);
}
