import { FunctionComponent } from 'react';

import Link from 'next/link';

import Button from '../../ui/button';
import Input from '../../ui/input';
import AuthFormWrapper from '../auth-form-wrapper';
import styles from '../index.module.scss';

type ForgotPasswordFormProps = {
  email: string;
  setEmail: (val: string) => void;
  onConfirm: () => void;
};

const ForgotPasswordForm: FunctionComponent<ForgotPasswordFormProps> = ({
  email,
  setEmail,
  onConfirm,
}) => {
  return (
    <AuthFormWrapper>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder="name@example.com"
        label="Email"
      />
      <div className={styles.buttons}>
        <Button onClick={onConfirm} fullWidth color="primary">
          Reset my password
        </Button>
        <Link href="/sign-in" passHref>
          <Button variant="outline" color="primary" fullWidth>
            Back to sign in
          </Button>
        </Link>
      </div>
    </AuthFormWrapper>
  );
};

export default ForgotPasswordForm;
