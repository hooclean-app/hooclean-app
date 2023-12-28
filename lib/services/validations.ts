export const validateData = (values: ClientRegister) => {
  // Regular expressions
  const regexTwoCharacters = /^(?![\s]{2,})[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,50}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexNineDigits = /^\d{9}$/;
  const regexSpecialCharacters = /^(?=.*[a-zA-Z])[\/\-,.\w\sºª]{6,100}$/;
  const regexFiveDigits = /^\d{5}$/;
  return {
    name: regexTwoCharacters.test(values.name),
    email: regexEmail.test(values.email),
    password: regexPassword.test(values.password),
    confirmPassword: values.password === values.confirmPassword,
    phone: regexNineDigits.test(values.phone),
    address: regexSpecialCharacters.test(values.address),
    address2: regexSpecialCharacters.test(values.address2 || 'ddddddddd'),
    city: regexTwoCharacters.test(values.city),
    region: regexTwoCharacters.test(values.region),
    postCode: regexFiveDigits.test(values.postCode),
    country: regexTwoCharacters.test(values.country),
    company: regexTwoCharacters.test(values.company),
    CIF: regexNineDigits.test(values.CIF),
    allfields:
      regexTwoCharacters.test(values.name) &&
      regexEmail.test(values.email) &&
      regexPassword.test(values.password) &&
      values.password === values.confirmPassword &&
      regexNineDigits.test(values.phone) &&
      regexSpecialCharacters.test(values.address) &&
      regexTwoCharacters.test(values.city) &&
      regexTwoCharacters.test(values.region) &&
      regexFiveDigits.test(values.postCode) &&
      regexTwoCharacters.test(values.country) &&
      regexTwoCharacters.test(values.company) &&
      regexNineDigits.test(values.CIF),
  };
};
