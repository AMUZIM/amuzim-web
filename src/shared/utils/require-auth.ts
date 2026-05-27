import { isAuthenticated } from "./is-authenticated";

export function requireAuth() {
  return isAuthenticated();
}
