import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ROUTES } from "@/shared/constants/routes";

import { canAccessRoute } from "@/shared/utils/can-access-route";
import { getUserRole } from "@/shared/utils/get-user-role";
import { isAuthenticated } from "@/shared/utils/is-authenticated";
import { isProtectedRoute } from "@/shared/utils/is-protected-route";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const protectedRoute = isProtectedRoute(pathname);

  if (protectedRoute) {
    const authenticated = isAuthenticated();

    if (!authenticated) {
      return NextResponse.redirect(
        new URL(ROUTES.AUTH, request.url)
      );
    }

    const role = getUserRole();

    const allowed = canAccessRoute(role, pathname);

    if (!allowed) {
      return NextResponse.redirect(
        new URL(ROUTES.DASHBOARD, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
