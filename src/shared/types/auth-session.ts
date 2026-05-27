import type { UserRole } from "./user-role";

export interface AuthSession {
  id: string;

  email: string;

  role: UserRole;

  authenticated: boolean;
}
