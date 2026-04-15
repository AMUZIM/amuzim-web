export type ConnectionStatus =
  | "pending"
  | "accepted"
  | "rejected"
  | "blocked";

export interface NetworkConnection {
  id: string;

  requesterId: string;
  receiverId: string;

  status: ConnectionStatus;

  createdAt: string;
  updatedAt: string;
}
