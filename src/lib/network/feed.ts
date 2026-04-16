import { getUserActivities } from "@/lib/network/activity";
import { getUserConnections } from "@/lib/network/connections";
import { getUserSignals, computeScore } from "@/lib/network/signals";
import { rankActivities, buildScoreMap } from "@/lib/network/ranking";
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

  // 🔹 signals → scoreMap
  const signals = getUserSignals(userId);
  const scores = computeScore(signals);
  const scoreMap = buildScoreMap(scores);

  // 🔹 ranking engine
  return rankActivities(allActivities, scoreMap);
}
