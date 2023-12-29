import React from 'react';

interface Props {
  field: FormTextInputs;
}

export default function InputValuesList({ field }: Props) {
  return (
    <div>
      {' '}
      {field.list && (
        <datalist id={`${field.name}-list`}>
          {field.list.map((item, index) => (
            <option
              key={index}
              value={item}
            />
          ))}
        </datalist>
      )}
    </div>
  );
}
