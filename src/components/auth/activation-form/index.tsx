import { FunctionComponent } from 'react';

import Link from 'next/link';

import Button from '../../ui/button';
import Input from '../../ui/input';
import AuthFormWrapper from '../auth-form-wrapper';
import styles from '../index.module.scss';

type ActivationFormProps = {
  password: string;
  setPassword: (val: string) => void;
  passwordConfirmation: string;
  setPasswordConfirmation: (val: string) => void;
  onConfirm: () => void;
};

const ActivationForm: FunctionComponent<ActivationFormProps> = ({
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  onConfirm,
}) => {
  return (
    <AuthFormWrapper>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        placeholder="Enter your password"
        label="Password"
        type="password"
      />
      <Input
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        name="password-confirmation"
        placeholder="Confirm your password"
        label="Password confirmation"
        type="password"
      />
      <div className={styles.buttons}>
        <Button onClick={onConfirm} fullWidth color="primary">
          Create
        </Button>
        <Link href="/" passHref>
          <Button variant="outline" color="primary" fullWidth>
            Decline activation
          </Button>
        </Link>
      </div>
    </AuthFormWrapper>
  );
};

export default ActivationForm;
