'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resJSON = await res.json();
    console.log(resJSON);
    if (res.ok) {
      router.push('/auth/login');
    }
  });

  return (
    <div className="clientForm">
      <form
        action=""
        onSubmit={onSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register('name', {
            required: { value: true, message: 'Name is required' },
          })}
        />
        {/* {errors.name && <span>{errors.name.message}</span>} */}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register('email', { required: true })}
          id="email"
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="Password"
          {...register('password', { required: true })}
          id="password"
          placeholder="Password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          {...register('confirmPassword', { required: true })}
          id="confirmPassword"
          placeholder="confirmPassword"
        />
        <button>Register</button>
      </form>
    </div>
  );
}
