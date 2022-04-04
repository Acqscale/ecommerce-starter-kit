import { ChangeEvent, FunctionComponent } from 'react';

import classNames from '@/utils/classnames';

type TextareaProps = {
  value: string;
  onChange: (val: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label: string;
  classes?: string;
  name: string;
  rows?: number;
  cols?: number;
};

const Textarea: FunctionComponent<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  label,
  classes,
  name,
  rows = 4,
  cols = 20,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-3 text-sm font-semibold text-on-background"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={classNames(
          'flex items-center py-3 px-4 w-full text-sm rounded border focus:outline-none focus:ring-1 border-border-color focus:ring-primary bg-background placeholder:text-on-background text-on-background',
          classes || ''
        )}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Textarea;
