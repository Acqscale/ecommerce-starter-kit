import { useState } from 'react';

import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import SignInForm from '@/components/auth/sign-in-form';
import BreadCrumbs from '@/components/breadcrumbs';
import PageTitle from '@/components/page-title';
import { useBreadCrumbs } from '@/hooks/useBreadCrumbs';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

export default function SingInPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { pathname } = useRouter();
  const breadCrumbsData = useBreadCrumbs(
    [
      {
        name: 'Home',
        link: '/',
        Icon: HomeIcon,
      },
      {
        name: 'Sign In',
        link: '/sign-in',
      },
    ],
    pathname
  );

  return (
    <Main meta={<Meta title="Sign In" description="Sign In" />}>
      <BreadCrumbs data={breadCrumbsData} />
      <PageTitle title="Sign in" />
      <SignInForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onAuth={() => {}}
      />
    </Main>
  );
}
