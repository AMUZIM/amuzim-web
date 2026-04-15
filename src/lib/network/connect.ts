import { NetworkConnection, ConnectionStatus } from "@/types/network";

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

  return newConnection;
}

export async function acceptConnection(
  connectionId: string
): Promise<NetworkConnection | null> {
  const connection = connections.find((c) => c.id === connectionId);
  if (!connection) return null;

  connection.status = "connected";
  connection.updatedAt = new Date().toISOString();

  return connection;
}

export async function cancelConnection(
  requesterId: string,
  receiverId: string
): Promise<boolean> {
  const index = connections.findIndex(
    (c) =>
      c.requesterId === requesterId &&
      c.receiverId === receiverId
  );

  if (index === -1) return false;

  connections.splice(index, 1);
  return true;
}

export async function getConnectionStatus(
  userA: string,
  userB: string
): Promise<ConnectionStatus> {
  const connection = connections.find(
    (c) =>
      (c.requesterId === userA && c.receiverId === userB) ||
      (c.requesterId === userB && c.receiverId === userA)
  );

  return connection?.status || "none";
}
