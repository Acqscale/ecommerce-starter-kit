import { FunctionComponent, ReactChild } from 'react';

import styles from './styles.module.css';

type ButtonProps = {
  onClick: () => void;
  variant?: string;
  children: ReactChild;
};

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  variant = 'default',
  children,
}) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
