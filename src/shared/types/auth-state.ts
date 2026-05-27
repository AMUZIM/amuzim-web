import type { AuthSession } from "./auth-session";

export interface AuthState {
  session: AuthSession | null;

  loading: boolean;
}
