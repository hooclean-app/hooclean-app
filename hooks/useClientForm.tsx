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
  const clientFormFields = [
    {
      name: 'name',
      label: 'Nombre',
      type: 'text',
      placeholder: 'Nombre',
      errorName: 'name',
      error: 'El nombre debe tener al menos dos caracteres',
    },

    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      errorName: 'email',
      error: 'El email no es correcto',
    },
    {
      name: 'phone',
      label: 'Teléfono',
      type: 'phone',
      placeholder: '999 99 99',
      errorName: 'phone',
      error: 'El teléfono no es correcto',
    },
    {
      name: 'address',
      label: 'Dirección',
      type: 'address',
      placeholder: 'nombre de la calle, número, piso, puerta',
      errorName: '',
      error: '',
    },
    {
      name: 'address2',
      label: '',
      type: 'address2',
      placeholder: '',
      errorName: 'address',
      error: 'La dirección no es correcta',
    },
    {
      name: 'city',
      label: 'Población',
      type: 'city',
      placeholder: 'Madrid',
      errorName: 'city',
      error: 'El teléfono no es correcto',
    },
    {
      name: 'region',
      label: 'Comunidad autonoma',
      type: 'region',
      placeholder: 'Comunidad autonoma',
      errorName: 'region',
      error: 'La región no es correcto',
    },
    {
      name: 'postCode',
      label: 'Código postal',
      type: 'postCode',
      placeholder: 'Código postal',
      errorName: 'postCode',

      error: 'El código postal no es correcto',
    },
    {
      name: 'country',
      label: 'País',
      type: 'country',
      placeholder: 'País',
      errorName: 'country',

      error: 'Este campo es obligatorio',
    },
    {
      name: 'company',
      label: 'Nombre de la empresa',
      type: 'company',
      placeholder: 'Mi empresa',
      errorName: 'company',
      error: 'Este campo es obligatorio',
    },
    {
      name: 'CIF',
      label: 'Número Cif',
      type: 'CIF',
      placeholder: 'Mi empresa',
      errorName: 'CIF',
      error: 'El CIF no es correcto',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'Password',
      placeholder: 'Password',
      errorName: 'password',
      error:
        'La contraseña debe tener al menos ocho caracteres, un caracter especial, un número y una mayúscula',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'confirmPassword',
      placeholder: 'confirmPassword',
      errorName: 'confirmPassword',
      error: 'Las contraseñas no coinciden',
    },
  ];

  return { getData, submit, validation, clientFormFields };
};
