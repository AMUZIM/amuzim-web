export type CollaborationStatus =
  | "pending"
  | "accepted"
  | "rejected";

export interface NetworkCollaboration {
  id: string;
  fromUserId: string;
  toUserId: string;
  projectId?: string;
  status: CollaborationStatus;
  createdAt: string;
  updatedAt: string;
}

let collaborations: NetworkCollaboration[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export async function requestCollaboration(
  fromUserId: string,
  toUserId: string,
  projectId?: string
): Promise<NetworkCollaboration> {
  const collab: NetworkCollaboration = {
    id: generateId(),
    fromUserId,
    toUserId,
    projectId,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  collaborations.push(collab);

  return collab;
}

export async function respondCollaboration(
  id: string,
  status: "accepted" | "rejected"
): Promise<NetworkCollaboration | null> {
  const collab = collaborations.find((c) => c.id === id);
  if (!collab) return null;

  collab.status = status;
  collab.updatedAt = new Date().toISOString();

  return collab;
}

export async function getUserCollaborations(
  userId: string
): Promise<NetworkCollaboration[]> {
  return collaborations.filter(
    (c) =>
      c.fromUserId === userId || c.toUserId === userId
  );
}
