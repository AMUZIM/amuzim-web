import { NetworkProfile } from "@/types/network";
import { getUserSignals } from "@/lib/network/signals";
import {
  computeUserAffinity,
  getTopAffinities,
} from "@/lib/network/signalsRanking";

// 🔹 motor de recomendación reutilizable
export function getRecommendedProfiles(
  userId: string,
  profiles: NetworkProfile[],
  limit: number = 10
): NetworkProfile[] {
  const signals = getUserSignals(userId);

  const affinities = computeUserAffinity(signals, userId);
  const top = getTopAffinities(affinities, limit * 2);

  const affinityMap = new Map<string, number>();
  top.forEach((a) => affinityMap.set(a.userId, a.affinity));

  return profiles
    .filter((p) => p.userId !== userId)
    .sort((a, b) => {
      const aScore = affinityMap.get(a.userId) || 0;
      const bScore = affinityMap.get(b.userId) || 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}
