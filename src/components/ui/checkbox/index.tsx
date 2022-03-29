import { FunctionComponent } from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: (state: boolean) => void;
  label: string;
};

const Checkbox: FunctionComponent<CheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className="group flex items-center text-sm text-on-background">
      <input
        type="checkbox"
        className="w-5 h-5 rounded border focus:outline-none focus:ring-1 focus:ring-secondary border-border-color text-secondary"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className="ml-2 text-on-background">{label}</span>
    </label>
  );
};

export default Checkbox;
