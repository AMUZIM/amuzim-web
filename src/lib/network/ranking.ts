import { NetworkActivity } from "@/lib/network/activity";

export interface RankedItem {
  id: string;
  score: number;
}

// 🔹 ranking genérico reutilizable
export function rankActivities(
  activities: NetworkActivity[],
  scoreMap: Map<string, number>
): NetworkActivity[] {
  return activities.sort((a, b) => {
    const scoreA = scoreMap.get(a.toUserId) || 0;
    const scoreB = scoreMap.get(b.toUserId) || 0;

    const rankA = scoreA * 0.7 + a.timestamp * 0.3;
    const rankB = scoreB * 0.7 + b.timestamp * 0.3;

    return rankB - rankA;
  });
}

// 🔹 helper futuro (extensible)
export function buildScoreMap(
  entries: { userId: string; score: number }[]
): Map<string, number> {
  const map = new Map<string, number>();
  entries.forEach((e) => map.set(e.userId, e.score));
  return map;
}
