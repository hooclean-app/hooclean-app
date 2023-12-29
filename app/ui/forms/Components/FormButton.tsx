import React from 'react';

interface Props {
  validation: boolean;
}
export default function FormButton({ validation }: Props) {
  return (
    <div>
      <button
        disabled={!validation}
        type="submit"
        className={!validation ? 'disabled' : ''}
      >
        Registrarme
      </button>
    </div>
  );
}
