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
