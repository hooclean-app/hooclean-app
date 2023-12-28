'use client';

import { useClientForm } from '@/hooks/useClientForm';
import React from 'react';

export default function Page() {
  const { getData, submit, validation, clientFormFields, onFocus } =
    useClientForm();

  return (
    <div className="clientForm">
      <form
        action=""
        onSubmit={submit}
      >
        {clientFormFields.map((field, index) => (
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
              className={!validation[field.errorName] ? 'formWarning' : ''}
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
