import { isAuthRoute } from "./is-auth-route";
import { isDashboardRoute } from "./is-dashboard-route";

export function isPublicRoute(
  pathname: string
) {
  return (
    !isAuthRoute(pathname) &&
    !isDashboardRoute(pathname)
  );
}
