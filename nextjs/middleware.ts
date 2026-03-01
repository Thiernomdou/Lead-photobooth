import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Page de login : toujours accessible
  if (pathname === '/admin/login') return NextResponse.next()

  // Toutes les autres routes /admin : vérifier le cookie
  const token = req.cookies.get('admin_token')?.value
  if (!token || token !== process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
