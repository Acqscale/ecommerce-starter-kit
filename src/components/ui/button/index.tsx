import { FunctionComponent, ReactChild } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactChild;
};

const Button: FunctionComponent<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="py-2 px-6 w-full font-medium rounded-md hover:opacity-80 text-on-secondary bg-secondary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
