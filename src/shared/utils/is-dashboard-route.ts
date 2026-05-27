import { ROUTES } from "@/shared/constants/routes";

export function isDashboardRoute(
  pathname: string
) {
  return pathname.startsWith(ROUTES.DASHBOARD);
}
