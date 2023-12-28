'use client';

import { useClientForm } from '@/lib/hooks/useClientForm';
import React from 'react';
import { clientFormTextInputs } from './inputFields';
export default function Page() {
  const { getData, submit, validation, onFocus } = useClientForm();

  return (
    <div className="clientForm">
      <form
        action=""
        onSubmit={submit}
      >
        {clientFormTextInputs.map((field, index) => (
          <React.Fragment key={index + field.name}>
            {field.label !== '' && (
              <label
                htmlFor={field.name}
                key={field.name}
              >
                {field.label}
              </label>
            )}
            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              onChange={getData}
              key={index}
              className={!validation[field.name] ? 'formWarning' : ''}
            />

            {field.error !== '' &&
              !validation[field.errorName] &&
              onFocus[field.errorName] && (
                <p
                  key={`error-${field.name}`}
                  className="formWarning"
                >
                  {field.error}
                </p>
              )}
          </React.Fragment>
        ))}

        <input
          type="checkbox"
          name="terms"
          onChange={getData}
        />
        <label htmlFor="terms">Acepto los términos y condiciones</label>
        <button
          disabled={!validation.allfields}
          type="submit"
          className={!validation.allfields ? 'disabled' : ''}
        >
          Registrarme
        </button>
      </form>
    </div>
  );
}
