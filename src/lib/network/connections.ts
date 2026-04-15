import { NetworkConnection } from "@/types/network";

import { getConnectionStatus } from "./connect";

export async function getUserConnections(
  userId: string,
  allConnections: NetworkConnection[]
): Promise<NetworkConnection[]> {
  return allConnections.filter(
    (c) =>
      (c.requesterId === userId || c.receiverId === userId) &&
      c.status === "connected"
  );
}

export async function isConnected(
  userA: string,
  userB: string
): Promise<boolean> {
  const status = await getConnectionStatus(userA, userB);
  return status === "connected";
}
