import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export default function nextjs_future(request: NextRequest) {
  const isPublicFiles = PUBLIC_FILE.test(request.nextUrl.pathname);

  // Solves the problem of next middleware not loading cached css or public files
  if (isPublicFiles) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get('sessionCookie');
  console.log(cookie);
  if (cookie && cookie.value === 'authcookie') {
    const response = NextResponse.next();

    return response;
  }
  const headers = new Headers(request.headers);

  console.log(headers);

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
