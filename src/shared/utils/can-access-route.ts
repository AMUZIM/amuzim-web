import { ROUTES } from "@/shared/constants/routes";

import { hasPermission } from "./has-permission";

import type { UserRole } from "@/shared/types/user-role";

export function canAccessRoute(
  role: UserRole,
  pathname: string
) {
  if (pathname.startsWith(ROUTES.ANALYTICS)) {
    return hasPermission(role, "analytics:view");
  }

  if (pathname.startsWith(ROUTES.STREAMING)) {
    return hasPermission(role, "streaming:view");
  }

  return true;
}
