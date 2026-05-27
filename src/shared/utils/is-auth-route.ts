import { ROUTES } from "@/shared/constants/routes";

export function isAuthRoute(
  pathname: string
) {
  return pathname.startsWith(ROUTES.AUTH);
}
