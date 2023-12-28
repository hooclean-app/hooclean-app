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
  service1: boolean;
  service2: boolean;
  service3: boolean;
  service4: boolean;
  service5: boolean;
  service6: boolean;
  service7: boolean;
  service8: boolean;
  service9: boolean;
  service10: boolean;
  terms: boolean;
}

interface UserRegister {
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

  terms: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

interface FormTextInputs {
  name: string;
  autocomplete?: string;
  label: string;
  type: string;
  placeholder: string;
  errorName: string;
  error: string;
  list?: string[];
}
