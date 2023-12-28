import React from 'react';
import FormInputs from './FormInputs';
import InputValuesList from './InputValuesList';
import InputWarnings from './InputWarnings';

interface Props {
  clientFormTextInputs: FormTextInputs[];
  validation: Record<string, boolean>;
  getData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: Record<string, boolean>;
}

export default function FormFields({
  clientFormTextInputs,
  validation,
  getData,
  onFocus,
}: Props) {
  return (
    <div>
      {clientFormTextInputs.map((field, index) => (
        <React.Fragment key={index + field.name}>
          <FormInputs
            field={field}
            validation={validation[field.name]}
            getData={getData}
            index={index}
          />

          <InputValuesList field={field} />

          <InputWarnings
            field={field}
            validation={validation[field.name]}
            onFocus={onFocus[field.name]}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
