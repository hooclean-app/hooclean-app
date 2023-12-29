import React from 'react';

interface Props {
  validation: boolean;
  getData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TermsInput({ validation, getData }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        name="terms"
        onChange={getData}
        id="terms"
      />
      <label htmlFor="terms">Acepto los términos y condiciones</label>
      {!validation && (
        <p className="formWarning">Acepte las condiciones del servicio.</p>
      )}
    </div>
  );
}
