import { canAccessRoute } from "@/shared/utils/can-access-route";
import { getUserRole } from "@/shared/utils/get-user-role";

export function hasRouteAccess(pathname: string) {
  const role = getUserRole();

  return canAccessRoute(role, pathname);
}
