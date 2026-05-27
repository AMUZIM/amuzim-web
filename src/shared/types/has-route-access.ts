import { canAccessRoute } from "./can-access-route";
import { getUserRole } from "./get-user-role";

export function hasRouteAccess(pathname: string) {
  const role = getUserRole();

  return canAccessRoute(role, pathname);
}
