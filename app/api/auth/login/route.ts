import { SignJWT } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { serialize } from 'cookie';
import { getJwtSecretKey } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const data: ClientRegister = await request.json();
    console.log(data);

    if (!data.email || !data.password) {
      return NextResponse.json(
        { message: 'Please provide an email and password' },
        { status: 400 }
      );
    }
    if (data.password === 'admin' && data.email === 'admin@mail.com') {
      const token = await new SignJWT({
        email: data.email,
        password: data.password,
      })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1day')
        .sign(getJwtSecretKey());

      const serialiazed = serialize('access-token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 30 * 60 * 60 * 24,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      });
      cookies().set('access-token', serialiazed);

      return NextResponse.json(
        { message: 'Successfully logged in' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 400 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
