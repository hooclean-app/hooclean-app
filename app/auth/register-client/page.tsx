'use client';

import { useForm } from 'react-hook-form';
export default function Page() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="clientForm">
      <form
        action=""
        onSubmit={onSubmit}
      >
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <input
          type="email"
          {...register('email', { required: true })}
          id="email"
          placeholder="Email"
        />
        <input
          type="Password"
          {...register('password', { required: true })}
          id="password"
          placeholder="Password"
        />
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
