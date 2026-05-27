import { getDashboardHomeRoute } from "./get-dashboard-home-route";
import { getUserRole } from "./get-user-role";

export function getUserHomeRoute() {
  const role = getUserRole();

  return getDashboardHomeRoute(role);
}
