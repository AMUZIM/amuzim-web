import { ROUTES } from "@/shared/constants/routes";

import type { UserRole } from "@/shared/types/user-role";

export function getDashboardHomeRoute(
  role: UserRole
) {
  switch (role) {
    case "creator":
      return ROUTES.CREATOR;

    case "editor":
      return ROUTES.EDITORIAL;

    case "admin":
      return ROUTES.ANALYTICS;

    default:
      return ROUTES.DASHBOARD;
  }
}
