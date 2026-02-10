import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Get the auth token from cookies
    const token = request.cookies.get('auth_token')?.value
    const { pathname } = request.nextUrl

    // Define public paths that don't require authentication
    const isPublicPath = pathname === '/welcome' || pathname === '/auth'

    // If there's no token and the user is trying to access a protected route (like home),
    // redirect them to the welcome page
    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL('/welcome', request.url))
    }

    // If there is a token and the user is trying to access a public route (welcome or auth),
    // redirect them to the home page
    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

// Configure which paths the middleware runs on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next (static files, image optimization files, etc)
         * - favicon.ico (favicon file)
         * - files with extensions (e.g. .css, .js, .png, .jpg)
         */
        '/((?!api|_next|favicon.ico|.*\\..*).*)',
    ],
}
