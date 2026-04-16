import { getUserActivities } from "@/lib/network/activity";
import { getUserConnections } from "@/lib/network/connections";
import { NetworkActivity } from "@/lib/network/activity";
import { NetworkConnection } from "@/types/network";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  // 🔹 actividades propias
  const own = getUserActivities(userId);

  // 🔹 conexiones (usar firma real: recibe array)
  const allConnections: NetworkConnection[] =
    await getUserConnections([]);

  // 🔹 filtrar conexiones del usuario
  const userConnections = allConnections.filter(
    (c) => c.userId === userId || c.targetUserId === userId
  );

  const connectionIds = userConnections.map((c) =>
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
