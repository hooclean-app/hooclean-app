import { SignJWT } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { serialize } from 'cookie';
import { getJwtSecretKey } from '@/app/lib/auth';
import bcrypt from 'bcrypt';

import db from '@/app/lib/db';

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
    var userFound = await db.client.findUnique({
      where: { email: data.email },
    });
    if (!userFound) {
      userFound = await db.user.findUnique({
        where: { email: data.email },
      });
    }
    console.log(userFound);
    if (userFound) {
      console.log('Entra');
      const passwordOk = await bcrypt.compare(
        data.password,
        userFound.password
      );
      console.log(passwordOk);
      if (passwordOk) {
        console.log('Password correcta');
        const token = await new SignJWT({
          id: userFound.id,
          email: userFound.email,
          name: userFound.name,
          postCode: userFound.postCode,
          role: userFound.role,
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
          {
            message: 'Successfully logged in',
            user: {
              id: userFound.id,
              email: userFound.email,
              name: userFound.name,
              postCode: userFound.postCode,
              role: userFound.role,
            },
          },
          { status: 200 }
        );
      }
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
