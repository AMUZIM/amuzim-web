import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { CREATOR_ROUTES } from './creator-routes.constant'
import { ORGANIZATION_ROUTES } from './organization-routes.constant'
import { PREMIUM_ROUTES } from './premium-routes.constant'
import { PROTECTED_ROUTES } from './protected-routes.constant'
import { PUBLIC_ROUTES } from './public-routes.constant'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  const isPremiumRoute = PREMIUM_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  const isCreatorRoute = CREATOR_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  const isOrganizationRoute = ORGANIZATION_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname === route
  )

  if (isProtectedRoute) {
    return NextResponse.next()
  }

  if (isPremiumRoute) {
    return NextResponse.next()
  }

  if (isCreatorRoute) {
    return NextResponse.next()
  }

  if (isOrganizationRoute) {
    return NextResponse.next()
  }

  if (isPublicRoute) {
    return NextResponse.next()
  }

  return NextResponse.next()
}
