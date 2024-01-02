import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginUser } from '../services/login';

export const useLogin = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLogged = await loginUser(login);

    if (userLogged.ok) {
      const data = await userLogged.json();
      router.push(`/dashboard/${data.user.role}`);
    } else {
      console.log('Error', userLogged.status);
      setShowError(true);
    }
  };
  return { handleChange, submit, showError };
};
