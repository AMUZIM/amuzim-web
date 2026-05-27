import { ROUTES } from "@/shared/constants/routes";

export function isProtectedRoute(pathname: string) {
  return pathname.startsWith(ROUTES.DASHBOARD);
}
