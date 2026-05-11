import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { PROTECTED_ROUTES } from './protected-routes.constant'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    return NextResponse.next()
  }

  return NextResponse.next()
}
