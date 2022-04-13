import { FunctionComponent } from 'react';

import Link from 'next/link';

import Button from '../../ui/button';
import Input from '../../ui/input';
import AuthFormWrapper from '../auth-form-wrapper';
import styles from '../index.module.scss';

type SignInFormProps = {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  onAuth: () => void;
};

const SignInForm: FunctionComponent<SignInFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onAuth,
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
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        placeholder="Enter your password"
        label="Password"
        type="password"
      />
      <div className={styles.buttons}>
        <Link href="/forgot-password" passHref>
          <Button variant="text" color="primary" fullWidth>
            Forgot your password?
          </Button>
        </Link>
        <Button onClick={onAuth} fullWidth color="primary">
          Sign in
        </Button>
        <Button onClick={() => {}} variant="outline" color="primary" fullWidth>
          I don’t have an account. Register
        </Button>
      </div>
    </AuthFormWrapper>
  );
};

export default SignInForm;
