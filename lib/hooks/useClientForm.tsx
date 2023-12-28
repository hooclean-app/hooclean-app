import {
  ClientRegister_INITIAL_STATE,
  dataValidation_INITIAL_VALUE,
} from '@/lib/constants';
import { registerClient } from '@/lib/services/register';
import { validateData } from '@/lib/services/validations';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useClientForm = () => {
  const router = useRouter();
  const [data, setData] = useState(ClientRegister_INITIAL_STATE);
  const [validation, setValidation] = useState<Record<string, boolean>>(
    dataValidation_INITIAL_VALUE
  );
  const [onFocus, setOnFocus] = useState<Record<string, boolean>>(
    dataValidation_INITIAL_VALUE
  );
  useEffect(() => {
    setValidation(validateData(data));
  }, [data]);

  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    setValidation(validateData(newData));
    const currentField = {
      ...dataValidation_INITIAL_VALUE,
      [e.target.name]: true,
    };
    setOnFocus(currentField);
    console.log('weee', validation);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerClient(data).then((res) => {
      console.log(res);
      if (res.ok) {
        router.push('/auth/login');
      }
    });
  };

  return { getData, submit, validation, onFocus };
};