export type ConnectionStatus =
  | "none"
  | "pending"
  | "connected"
  | "blocked";

export interface NetworkConnection {
  id: string;

  requesterId: string;
  receiverId: string;

  status: ConnectionStatus;

  createdAt: string;
  updatedAt: string;
}

export interface NetworkFollow {
  id: string;

  followerId: string;
  followingId: string;

  createdAt: string;
}
