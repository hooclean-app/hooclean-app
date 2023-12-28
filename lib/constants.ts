// Registration data
export const ClientRegister_INITIAL_STATE: ClientRegister = {
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
  service1: false,
  service2: false,
  service3: false,
  service4: false,
  service5: false,
  service6: false,
  service7: false,
  service8: false,
  service9: false,
  service10: false,
  terms: false,
};

export const UserRegister_INITIAL_STATE: UserRegister = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'user',
  phone: '',
  address: '',
  address2: '',
  city: '',
  region: '',
  postCode: '',
  country: '',
  company: '',
  CIF: '',
  terms: false,
};

// Reset validation object
export const dataValidation_INITIAL_VALUE = {
  name: false,
  email: false,
  password: false,
  confirmPassword: false,
  phone: false,
  address: false,
  address2: false,
  city: false,
  region: false,
  postCode: false,
  country: false,
  company: false,
  CIF: false,
  terms: false,
  allfields: false,
};

// UserTypes
export const userTypes: Record<UserTypes, UserTypes> = {
  client: 'client',
  user: 'user',
};
