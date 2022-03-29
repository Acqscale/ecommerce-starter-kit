import { ChangeEvent, FunctionComponent } from 'react';

import classNames from '@/utils/classnames';

type InputProps = {
  value: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  classes?: string;
};

const Input: FunctionComponent<InputProps> = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  label,
  classes,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-3 text-sm font-semibold text-on-background"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames(
          'py-3 px-4 w-full text-sm rounded border focus:outline-none focus:ring-1 lg:text-sm border-border-color focus:ring-primary bg-background placeholder:text-on-background text-on-background',
          classes || ''
        )}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
