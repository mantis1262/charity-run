import scss from './FormInput.module.scss';
import { ReactNode } from 'react';

type FormInputProps = {
  id: string;
  label: string;
  error: { condition: boolean; message: string };
  children: ReactNode;
};

function FormInput({ id, label, error, children }: FormInputProps) {
  return (
    <label
      className={`${scss.label} ${error.condition ? scss.error : ''}`}
      htmlFor={id}
    >
      {label}
      <div className={scss.box}>{children}</div>
      {error.condition ? (
        <div className={scss.formikMessage}>{error.message}</div>
      ) : null}
    </label>
  );
}

export default FormInput;
