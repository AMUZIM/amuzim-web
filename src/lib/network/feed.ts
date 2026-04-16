import { getUserActivities } from "@/lib/network/activity";
import { getUserConnections } from "@/lib/network/connections";
import { getUserSignals, computeScore } from "@/lib/network/signals";
import { NetworkActivity } from "@/lib/network/activity";
import { NetworkConnection } from "@/types/network";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  // 🔹 actividades propias
  const own = getUserActivities(userId);

  // 🔹 conexiones
  const allConnections: NetworkConnection[] =
    await getUserConnections(userId);

  const connectionIds = allConnections.map((c) =>
    c.requesterId === userId ? c.receiverId : c.requesterId
  );

  // 🔹 actividades de conexiones
  const fromConnections = connectionIds.flatMap((id) =>
    getUserActivities(id)
  );

  const allActivities = [...own, ...fromConnections];

  // 🔹 signals del usuario (para ranking)
  const signals = getUserSignals(userId);
  const scores = computeScore(signals);

  const scoreMap = new Map<string, number>();
  scores.forEach((s) => scoreMap.set(s.userId, s.score));

  // 🔹 ranking híbrido (score + recency)
  return allActivities
    .sort((a, b) => {
      const scoreA = scoreMap.get(a.toUserId) || 0;
      const scoreB = scoreMap.get(b.toUserId) || 0;

      const combinedA = scoreA + a.timestamp;
      const combinedB = scoreB + b.timestamp;

      return combinedB - combinedA;
    });
}
