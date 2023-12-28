'use client';

import React from 'react';
import FormFields from './Components/FormFields';
import TermsInput from './Components/TermsInput';
import FormButton from './Components/FormButton';
import { useForm } from '@/lib/hooks/useForm';

interface Props {
  FormTextInputs: FormTextInputs[];
  userType: UserTypes;
}
export default function RegisterForm({ FormTextInputs, userType }: Props) {
  const { getData, submit, validation, onFocus } = useForm(userType);
  return (
    <div className="registerForm">
      <form
        action=""
        onSubmit={submit}
      >
        <FormFields
          FormTextInputs={FormTextInputs}
          validation={validation}
          getData={getData}
          onFocus={onFocus}
        />

        <TermsInput
          validation={validation.terms}
          getData={getData}
        />

        <FormButton validation={validation.allfields} />
      </form>
    </div>
  );
}
