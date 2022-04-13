import { useState } from 'react';

import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import ActivationForm from '@/components/auth/activation-form';
import BreadCrumbs from '@/components/breadcrumbs';
import PageTitle from '@/components/page-title';
import { useBreadCrumbs } from '@/hooks/useBreadCrumbs';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

export default function SingInPage() {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const { pathname } = useRouter();
  const breadCrumbsData = useBreadCrumbs(
    [
      {
        name: 'Home',
        link: '/',
        Icon: HomeIcon,
      },
      {
        name: 'Activate account',
        link: '/activation',
      },
    ],
    pathname
  );

  return (
    <Main
      meta={<Meta title="Activate account" description="Activate account" />}
    >
      <BreadCrumbs data={breadCrumbsData} />
      <PageTitle title="Activate account" />
      <p className="mx-4 mt-2 text-base font-normal leading-6 md:mx-auto md:max-w-[480px] md:text-center lg:max-w-[640px] text-secondary">
        Create password to activate your account
      </p>
      <ActivationForm
        password={password}
        setPassword={setPassword}
        passwordConfirmation={passwordConfirmation}
        setPasswordConfirmation={setPasswordConfirmation}
        onConfirm={() => {}}
      />
    </Main>
  );
}
