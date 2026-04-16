import { NetworkConnection } from "@/types/network";
import { trackActivity } from "@/lib/network/activity";

let connections: NetworkConnection[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function sendConnectionRequest(
  requesterId: string,
  receiverId: string
): Promise<NetworkConnection> {
  const existing = connections.find(
    (c) =>
      c.requesterId === requesterId &&
      c.receiverId === receiverId &&
      c.status !== "blocked"
  );

  if (existing) return existing;

  const newConnection: NetworkConnection = {
    id: generateId(),
    requesterId,
    receiverId,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  connections.push(newConnection);

  await trackActivity(requesterId, "connection_request", receiverId);

  return newConnection;
}

export async function acceptConnection(
  requesterId: string,
  receiverId: string
): Promise<NetworkConnection | null> {
  const connection = connections.find(
    (c) =>
      c.requesterId === requesterId &&
      c.receiverId === receiverId &&
      c.status === "pending"
  );

  if (!connection) return null;

  connection.status = "connected";
  connection.updatedAt = new Date().toISOString();

  await trackActivity(receiverId, "connection_accepted", requesterId);

  return connection;
}

export async function removeConnection(
  userA: string,
  userB: string
): Promise<boolean> {
  const index = connections.findIndex(
    (c) =>
      (c.requesterId === userA && c.receiverId === userB) ||
      (c.requesterId === userB && c.receiverId === userA)
  );

  if (index === -1) return false;

  connections.splice(index, 1);
  return true;
}

export async function getConnectionStatus(
  currentUserId: string,
  targetUserId: string
): Promise<
  | "none"
  | "pending_sent"
  | "pending_received"
  | "connected"
> {
  const connection = connections.find(
    (c) =>
      (c.requesterId === currentUserId &&
        c.receiverId === targetUserId) ||
      (c.requesterId === targetUserId &&
        c.receiverId === currentUserId)
  );

  if (!connection) return "none";

  if (connection.status === "connected") return "connected";

  if (connection.status === "pending") {
    if (connection.requesterId === currentUserId) {
      return "pending_sent";
    } else {
      return "pending_received";
    }
  }

  return "none";
}
