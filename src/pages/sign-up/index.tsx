import { useState } from 'react';

import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import SignUpForm from '@/components/auth/sign-up-form';
import BreadCrumbs from '@/components/breadcrumbs';
import PageTitle from '@/components/page-title';
import { useBreadCrumbs } from '@/hooks/useBreadCrumbs';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

export default function SingInPage() {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const { pathname } = useRouter();
  const breadCrumbsData = useBreadCrumbs(
    [
      {
        name: 'Home',
        link: '/',
        Icon: HomeIcon,
      },
      {
        name: 'Create account',
        link: '/sign-up',
      },
    ],
    pathname
  );

  return (
    <Main meta={<Meta title="Create account" description="Create account" />}>
      <BreadCrumbs data={breadCrumbsData} />
      <PageTitle title="Create" />
      <SignUpForm
        email={email}
        setEmail={setEmail}
        fullName={fullName}
        setFullName={setFullName}
        onCreate={() => {}}
      />
    </Main>
  );
}
