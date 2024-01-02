export const loginUser = async (data: UserLogin) => {
  console.log(data);
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};
