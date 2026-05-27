import { ROUTES } from "@/shared/constants/routes";

import { hasRouteAccess } from "./has-route-access";
import { isAuthenticated } from "./is-authenticated";

export function redirectIfUnauthorized(
  pathname: string
) {
  if (!isAuthenticated()) {
    return ROUTES.AUTH;
  }

  if (!hasRouteAccess(pathname)) {
    return ROUTES.DASHBOARD;
  }

  return null;
}
