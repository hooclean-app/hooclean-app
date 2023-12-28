import React from 'react';

interface Props {
  field: FormTextInputs;
  validation: boolean;
  onFocus: boolean;
}
export default function InputWarnings({ field, validation, onFocus }: Props) {
  return (
    <div>
      {field.error !== '' && !validation && onFocus && (
        <p
          key={`error-${field.name}`}
          className="formWarning"
        >
          {field.error}
        </p>
      )}
    </div>
  );
}
