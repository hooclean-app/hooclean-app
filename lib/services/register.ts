export const registerClient = async (data: ClientRegister) => {
  console.log(data);
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
  return res;
};
