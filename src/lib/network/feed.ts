import { getUserActivities } from "@/lib/network/activity";
import { getUserConnections } from "@/lib/network/connections";
import { NetworkActivity } from "@/lib/network/activity";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  // 🔹 actividades propias
  const own = getUserActivities(userId);

  // 🔹 conexiones (firma existente requiere 2 args)
  const connections = getUserConnections(userId, userId);

  const connectionIds = connections.map((c) =>
    c.userId === userId ? c.targetUserId : c.userId
  );

  // 🔹 actividades de conexiones
  const fromConnections = connectionIds.flatMap((id) =>
    getUserActivities(id)
  );

  // 🔹 merge + dedupe
  const map = new Map<string, NetworkActivity>();

  [...own, ...fromConnections].forEach((a) => {
    map.set(a.id, a);
  });

  // 🔹 ordenar
  return Array.from(map.values()).sort(
    (a, b) => b.timestamp - a.timestamp
  );
}
