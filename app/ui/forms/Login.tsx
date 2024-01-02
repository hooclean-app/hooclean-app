'use client';

import { useLogin } from '@/app/lib/hooks/useLogin';
import React from 'react';
import FormButton from './Components/FormButton';
import { loginTextInputs } from '@/app/auth/login/inputFields';
import FormInputs from './Components/FormInputs';

function Login() {
  const { handleChange, submit, showError } = useLogin();
  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={submit}
      >
        <h1>Login</h1>
        {loginTextInputs.map((field, index) => (
          <React.Fragment key={index + field.name}>
            <FormInputs
              field={field}
              validation={true}
              getData={handleChange}
              index={index}
            />
          </React.Fragment>
        ))}

        {showError && (
          <p className="formWarning">Email or password incorrect</p>
        )}
        <FormButton
          text="Enviar"
          validation={true}
        />
      </form>
    </div>
  );
}

export default Login;
