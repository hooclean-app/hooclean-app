import { NextResponse } from 'next/server';
import db from '../../../../lib/db';
import bcrypt from 'bcrypt';

export async function POST(request: {
  json: () => userDataTest | PromiseLike<userData>;
}) {
  try {
    const data: userDataTest = await request.json();
    console.log(data);
    const userFound = await db.user.findUnique({
      where: { email: data.email },
    });

    if (userFound) {
      return NextResponse.json(
        { message: 'user already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await db.user.create({
      data: {
        email: data.email,
        name: data.name,
        role: 'user',
        password: hashedPassword,
        phone: '666666666',
        address: 'Calle osuhksljv',
        postCode: '28080',
        company: 'HooClean',
        CIF: 'GG1234567',
      },
    });
    console.log('aquí=', newUser);
    const { password: _, ...user } = newUser;
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// import { createClient, Client, Row } from '@libsql/client';
// let db: Client | undefined;

// if (process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN) {
//   db = createClient({
//     url: process.env.TURSO_DATABASE_URL,
//     authToken: process.env.TURSO_AUTH_TOKEN,
//   });
// } else {
//   console.error('DB credentials not found');
// }
