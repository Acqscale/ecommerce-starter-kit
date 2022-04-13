import { FunctionComponent, ReactNode } from 'react';

import styles from './index.module.scss';

type AuthFormWrapperProps = {
  children: ReactNode;
};

const AuthFormWrapper: FunctionComponent<AuthFormWrapperProps> = ({
  children,
}) => {
  return <div className={styles.root}>{children}</div>;
};

export default AuthFormWrapper;
