import { getAuthSession } from "./get-auth-session";

export function isAuthenticated() {
  const session = getAuthSession();

  return Boolean(session?.authenticated);
}
