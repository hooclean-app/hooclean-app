import { useState } from 'react';

const dataValidation = {
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
};

export const useValidation = () => {
  const [validation, setValidation] = useState(dataValidation);

  const validateData = (values: ClientRegister) => {
    // Regular expressions
    const regexTwoCharacters = /^[a-zA-ZÀ-ÖØ-öø-ÿ]{2,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regexNineDigits = /^\d{9}$/;
    const regexSpecialCharacters = /^[\/\-,.\w\s]{1,100}$/;
    const regexFiveDigits = /^\d{5}$/;
    setValidation({
      name: regexTwoCharacters.test(values.name),
      email: regexEmail.test(values.email),
      password: regexPassword.test(values.password),
      confirmPassword: values.password === values.confirmPassword,
      phone: regexNineDigits.test(values.phone),
      address: regexSpecialCharacters.test(values.address),
      address2: regexSpecialCharacters.test(values.address2 || 'd'),
      city: regexTwoCharacters.test(values.city),
      region: regexTwoCharacters.test(values.region),
      postCode: regexFiveDigits.test(values.postCode),
      country: regexTwoCharacters.test(values.country),
      company: regexTwoCharacters.test(values.company),
      CIF: regexNineDigits.test(values.CIF),
    });
  };
  return { validateData, validation };
};
