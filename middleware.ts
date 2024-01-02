import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { verifyJwtToken } from './app/lib/auth';
import { userTypes } from './app/lib/constants';

const PUBLIC_FILE = /\.(.*)$/;

export default async function nextjs_future(request: NextRequest) {
  const isPublicFiles = PUBLIC_FILE.test(request.nextUrl.pathname);

  // Solves the problem of next middleware not loading cached css or public files
  if (isPublicFiles) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get('access-token');
  if (cookie) {
    const cookiePairs = cookie.value.split('; ');
    const tokenPair = cookiePairs.find((pair) =>
      pair.startsWith('access-token=')
    );

    if (tokenPair) {
      const token = tokenPair.split('=')[1];
      const verified = await verifyJwtToken(token);
      console.log('middleware verification', verified);
      if (verified) {
        console.log('role', verified.role);
        console.log('path', request.nextUrl.pathname);
        if (
          request.nextUrl.pathname === '/dashboard/client' &&
          verified.role === userTypes.client
        ) {
          return NextResponse.next();
        }
        if (
          request.nextUrl.pathname === '/dashboard/user' &&
          verified.role === userTypes.user
        ) {
          return NextResponse.next();
        }

        if (request.nextUrl.pathname !== `/dashboard/${verified.role}`) {
          return NextResponse.redirect(
            new URL(`/dashboard/${verified.role}`, request.url)
          );
        }

        return NextResponse.redirect(new URL('/', request.url));
      } else {
        console.log('Token not found in the cookie.');
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  }
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
