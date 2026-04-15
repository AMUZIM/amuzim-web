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

export interface NetworkProfile {
  id: string;

  userId: string;
  username: string;

  avatar?: string;
  bio?: string;
  location?: string;

  skills?: string[];

  createdAt: string;
  updatedAt: string;
}
