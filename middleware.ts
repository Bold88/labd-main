import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/static/') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Redirect /en to root
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const newPath = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Redirect /de to root
  if (pathname === '/de' || pathname.startsWith('/de/')) {
    const newPath = pathname.replace(/^\/de/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|api|.*\\.).*)',
  ],
};
