import { FunctionComponent } from 'react';

import Link from 'next/link';

import Button from '../../ui/button';
import Input from '../../ui/input';
import AuthFormWrapper from '../auth-form-wrapper';
import styles from '../index.module.scss';

type SignUpFormProps = {
  email: string;
  setEmail: (val: string) => void;
  fullName: string;
  setFullName: (val: string) => void;
  onCreate: () => void;
};

const SignUpForm: FunctionComponent<SignUpFormProps> = ({
  email,
  setEmail,
  fullName,
  setFullName,
  onCreate,
}) => {
  return (
    <AuthFormWrapper>
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        name="full-name"
        placeholder="Enter your full name"
        label="Full name"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder="name@example.com"
        label="Email"
      />
      <div className={styles.buttons}>
        <Button onClick={onCreate} fullWidth color="primary">
          Create
        </Button>
        <Link href="/sign-in" passHref>
          <Button variant="outline" color="primary" fullWidth>
            I already have an account. Sign in
          </Button>
        </Link>
      </div>
    </AuthFormWrapper>
  );
};

export default SignUpForm;
