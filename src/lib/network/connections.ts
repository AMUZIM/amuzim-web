import { NetworkConnection } from "@/types/network";

// 🔹 Fuente única en memoria (temporal)
let connections: NetworkConnection[] = [];

// 🔹 CONTRATO ÚNICO
export async function getUserConnections(
  userId: string
): Promise<NetworkConnection[]> {
  return connections.filter(
    (c) => c.requesterId === userId || c.receiverId === userId
  );
}

// 🔹 helpers existentes (no romper)
export function addConnection(connection: NetworkConnection) {
  connections.push(connection);
}

export function getAllConnections(): NetworkConnection[] {
  return connections;
}
