'use client';

import { userTypes } from '@/app/lib/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {
  const [login, setLogin] = useState({ email: '', password: '' });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: login.email,
        password: login.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('LLega desde back', res);
    if (res.ok) {
      const data = await res.json(); // Parse the response body as JSON
      console.log('LLega desde back', data.user);
      if (data.user.role === userTypes.client) {
        router.push('/dashboard/client');
      }
      if (data.user.role === userTypes.user) {
        router.push('/dashboard/user');
      }
    } else {
      console.log('Error', res.status);
    }
  };
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form
        className="w-1/4"
        onSubmit={submit}
      >
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>

        <label
          htmlFor="email"
          className="text-slate-500 mb-2 block text-sm"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />

        <label
          htmlFor="password"
          className="text-slate-500 mb-2 block text-sm"
        >
          Password:
        </label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"
        />

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
