import React from 'react';

interface Props {
  validation: boolean;
  text: string;
}
export default function FormButton({ validation, text }: Props) {
  return (
    <div>
      <button
        disabled={!validation}
        type="submit"
        className={!validation ? 'disabled' : ''}
      >
        {text}
      </button>
    </div>
  );
}
