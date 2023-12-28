'use client';

import React from 'react';
import FormFields from './Components/FormFields';
import TermsInput from './Components/TermsInput';
import FormButton from './Components/FormButton';
import { useClientForm } from '@/lib/hooks/useClientForm';

interface Props {
  FormTextInputs: FormTextInputs[];
}
export default function RegisterForm({ FormTextInputs }: Props) {
  const { getData, submit, validation, onFocus } = useClientForm();
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
