interface userData {
  email: string;
  name: string;
  role: string;
  password: string;
  phone: string;
  address: string;
  postCode: string;
  company: string;
  CIF: string;
}

interface userDataTest {
  email: string;
  name: string;
  password: string;
}

interface ClientRegister {
  email: string;
  name: string;
  role: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  address2?: string;
  city: string;
  region: string;
  postCode: string;
  country: string;
  company: string;
  CIF: string;
}
