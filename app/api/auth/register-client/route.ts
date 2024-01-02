import { NextResponse } from 'next/server';
import db from '../../../lib/db';
import bcrypt from 'bcrypt';

export async function POST(request: {
  json: () => ClientRegister | PromiseLike<ClientRegister>;
}) {
  try {
    const data: ClientRegister = await request.json();
    console.log(data);
    const userFound = await db.client.findUnique({
      where: { email: data.email },
    });

    if (userFound) {
      return NextResponse.json(
        { message: 'user already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log(data, hashedPassword);
    const newUser = await db.client.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        role: data.role,
        phone: data.phone,
        address: data.address,
        address2: data.address2,
        city: data.city,
        region: data.region,
        postCode: data.postCode,
        country: data.country,
        company: data.company,
        CIF: data.CIF,
      },
    });
    console.log('new user:', newUser);
    const { password: _, ...user } = newUser;
    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: 'An unknown error occurred' },
        { status: 500 }
      );
    }
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
