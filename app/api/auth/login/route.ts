import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

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
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
          email: data.email,
          password: data.password,
        },
        'secret'
      );
      cookies().set('access-token', 'we did it');

      return NextResponse.json(
        { message: 'Successfully logged in', token },
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
