import {
  ClientRegister_INITIAL_STATE,
  UserRegister_INITIAL_STATE,
  dataValidation_INITIAL_VALUE,
  userTypes,
} from '@/lib/constants';

import { registerClient, registerUser } from '@/lib/services/register';
import { validateData } from '@/lib/services/validations';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useForm = (userType: UserTypes) => {
  const router = useRouter();

  // Sets data initial state depending on user type
  const INITIAL_STATE =
    userType === userTypes.client
      ? ClientRegister_INITIAL_STATE
      : UserRegister_INITIAL_STATE;
  const [data, setData] = useState(INITIAL_STATE);

  // Sets validation initial state
  const [validation, setValidation] = useState<Record<string, boolean>>(
    dataValidation_INITIAL_VALUE
  );

  // Sets onFocus initial state - used to show warnings on blur
  const [onFocus, setOnFocus] = useState<Record<string, boolean>>(
    dataValidation_INITIAL_VALUE
  );

  useEffect(() => {
    setValidation(validateData(data));
  }, [data]);

  // Gets data from inputs and validates it on change
  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const newData = {
      ...data,
      [name]: newValue,
    };
    setData(newData);
    setValidation(validateData(newData));
    const currentField = {
      ...dataValidation_INITIAL_VALUE,
      [name]: true,
    };
    setOnFocus(currentField);
  };

  // Submits the data for registration to the corresponding service by user
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userType === userTypes.client) {
      registerClient(data as ClientRegister).then((res) => {
        console.log(res);
        if (res.ok) {
          router.push('/auth/login');
        }
      });
    } else if (userType === userTypes.user) {
      registerUser(data as UserRegister).then((res) => {
        console.log(res);
        if (res.ok) {
          router.push('/auth/login');
        }
      });
    }
  };

  return { getData, submit, validation, onFocus };
};
