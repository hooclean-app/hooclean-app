'use client';

import { useClientForm } from '@/lib/hooks/useClientForm';
import React from 'react';
import { clientFormTextInputs } from './inputFields';
import TermsInput from '@/ui/global/TermsInput';
import FormButton from '@/ui/global/FormButton';
import FormFields from '@/ui/global/FormFields';
export default function Page() {
  const { getData, submit, validation, onFocus } = useClientForm();

  return (
    <div className="clientForm">
      <form
        action=""
        onSubmit={submit}
      >
        <FormFields
          clientFormTextInputs={clientFormTextInputs}
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
