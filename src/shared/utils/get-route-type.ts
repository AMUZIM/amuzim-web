import type { RouteType } from "@/shared/types/route-type";

import { isAuthRoute } from "./is-auth-route";
import { isDashboardRoute } from "./is-dashboard-route";
import { isPublicRoute } from "./is-public-route";

export function getRouteType(
  pathname: string
): RouteType {
  if (isAuthRoute(pathname)) {
    return "auth";
  }

  if (isDashboardRoute(pathname)) {
    return "dashboard";
  }

  if (isPublicRoute(pathname)) {
    return "public";
  }

  return "unknown";
}
