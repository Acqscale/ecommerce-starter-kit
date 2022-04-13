import { ChangeEvent, FunctionComponent } from 'react';

type InputProps = {
  value: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
};

const Input: FunctionComponent<InputProps> = ({
  value,
  onChange,
  name,
  type = 'text',
  placeholder,
  label,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-3 text-sm font-normal leading-5 text-[#0F1A1E]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          py-3
          px-5
          w-full
          text-base
          placeholder:text-base
          font-normal
          placeholder:font-normal
          placeholder:leading-6
          text-[#0F1A1E]
          placeholder:text-[#6B7280]
          bg-[#F9FAFB]
          rounded
          border
          border-[#E5E7EB]
          active:border-[#1C64F2]
        "
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
