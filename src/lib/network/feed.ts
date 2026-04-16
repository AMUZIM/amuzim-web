import { getUserActivities } from "@/lib/network/activity";
import { getUserConnections } from "@/lib/network/connections";
import { getUserSignals, computeScore } from "@/lib/network/signals";
import { NetworkActivity } from "@/lib/network/activity";
import { NetworkConnection } from "@/types/network";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  const own = getUserActivities(userId);

  const connections: NetworkConnection[] =
    await getUserConnections(userId);

  const connectionIds = connections.map((c) =>
    c.requesterId === userId ? c.receiverId : c.requesterId
  );

  const fromConnections = connectionIds.flatMap((id) =>
    getUserActivities(id)
  );

  const allActivities = [...own, ...fromConnections];

  // 🔹 ranking limpio
  const signals = getUserSignals(userId);
  const scores = computeScore(signals);

  const scoreMap = new Map<string, number>();
  scores.forEach((s) => scoreMap.set(s.userId, s.score));

  return allActivities.sort((a, b) => {
    const scoreA = scoreMap.get(a.toUserId) || 0;
    const scoreB = scoreMap.get(b.toUserId) || 0;

    // peso 70% signals + 30% recency
    const rankA = scoreA * 0.7 + a.timestamp * 0.3;
    const rankB = scoreB * 0.7 + b.timestamp * 0.3;

    return rankB - rankA;
  });
}
