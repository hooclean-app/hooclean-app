'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useValidation } from '../../../hooks/useValidation';
const ClientRegister_INITIAL_STATE: ClientRegister = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'client',
  phone: '',
  address: '',
  address2: '',
  city: '',
  region: '',
  postCode: '',
  country: '',
  company: '',
  CIF: '',
};

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState(ClientRegister_INITIAL_STATE);
  const { validateData, validation } = useValidation();

  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
    validateData(data);
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
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
  };

  return (
    <div className="clientForm">
      <form
        action=""
        onSubmit={submit}
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          onChange={getData}
        />
        {validation.name ? null : (
          <p>El nombre debe tener al menos dos caracteres</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          onChange={getData}
        />
        {validation.email ? null : <p>El email no es correcto</p>}
        <label htmlFor="phone">Teléfono</label>
        <input
          type="phone"
          id="phone"
          placeholder="999 99 99"
          name="phone"
          onChange={getData}
        />
        {validation.phone ? null : <p>El teléfono no es correcto</p>}
        <label htmlFor="address">Dirección</label>
        <input
          type="address"
          id="address"
          placeholder="nombre de la calle, número, piso, puerta"
          name="address"
          onChange={getData}
        />
        {validation.address ? null : <p>El teléfono no es correcto</p>}
        <input
          type="address2"
          id="address2"
          placeholder="nombre de la calle, número, piso, puerta"
          name="address2"
          onChange={getData}
        />
        {validation.address2 ? null : <p>El teléfono no es correcto</p>}
        <label htmlFor="city">Población</label>
        <input
          type="city"
          id="city"
          placeholder="Madrid"
          name="city"
          onChange={getData}
        />
        {validation.city ? null : <p>El teléfono no es correcto</p>}
        <label htmlFor="region">Comunidad autonoma</label>
        <input
          type="region"
          id="region"
          placeholder="Comunidad autonoma"
          name="region"
          onChange={getData}
        />
        {validation.region ? null : <p>La región no es correcto</p>}
        <label htmlFor="postCode">Código postal</label>
        <input
          type="postCode"
          id="postCode"
          placeholder="Código postal"
          name="postCode"
          onChange={getData}
        />
        {validation.postCode ? null : <p>El código postal no es correcto</p>}
        <label htmlFor="country">País</label>
        <input
          type="country"
          id="country"
          placeholder="País"
          name="country"
          onChange={getData}
        />
        {validation.country ? null : <p>Este campo es obligatorio</p>}
        <label htmlFor="company">Nombre de la empresa</label>
        <input
          type="company"
          id="company"
          placeholder="Mi empresa"
          name="company"
          onChange={getData}
        />
        {validation.company ? null : <p>Este campo es obligatorio</p>}
        <label htmlFor="CIF">Número Cif</label>
        <input
          type="CIF"
          id="CIF"
          placeholder="Mi empresa"
          name="CIF"
          onChange={getData}
        />
        {validation.CIF ? null : <p>El CIF no es correcto</p>}
        <label htmlFor="password">Password</label>
        <input
          type="Password"
          id="password"
          placeholder="Password"
          name="password"
          onChange={getData}
        />
        {validation.password ? null : (
          <p>
            La contraseña debe tener al menos ocho caracteres, un caracter
            especial, un número y una mayúscula
          </p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          placeholder="confirmPassword"
          name="confirmPassword"
          onChange={getData}
        />
        {validation.confirmPassword ? null : (
          <p>Las contraseñas no coinciden</p>
        )}
        <button
          disabled={false}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
