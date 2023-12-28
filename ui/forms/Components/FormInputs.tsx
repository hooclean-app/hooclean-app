import React from 'react';

interface Props {
  field: FormTextInputs;
  validation: boolean;
  getData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  index: number;
}
export default function FormInputs({
  field,
  validation,
  getData,
  index,
}: Props) {
  return (
    <div>
      {field.label !== '' && (
        <label
          htmlFor={field.name}
          key={field.name}
        >
          {field.label}
        </label>
      )}
      <input
        autoComplete={field.autocomplete}
        id={field.name}
        type={field.type}
        placeholder={field.placeholder}
        name={field.name}
        onChange={getData}
        key={index}
        className={!validation ? 'formWarning' : ''}
        {...(field.list ? { list: `${field.name}-list` } : {})}
      />
    </div>
  );
}
