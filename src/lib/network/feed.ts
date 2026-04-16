import { getUserActivities } from "@/lib/network/activity";
import { getUserConnections } from "@/lib/network/connections";
import { NetworkActivity } from "@/lib/network/activity";
import { NetworkConnection } from "@/types/network";

export async function getNetworkFeed(
  userId: string
): Promise<NetworkActivity[]> {
  // 🔹 actividades propias
  const own = getUserActivities(userId);

  // 🔹 conexiones (contrato limpio: solo userId)
  const allConnections: NetworkConnection[] =
    await getUserConnections(userId);

  const connectionIds = allConnections.map((c) =>
    c.requesterId === userId ? c.receiverId : c.requesterId
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
