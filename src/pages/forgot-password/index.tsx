import { useState } from 'react';

import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

import ForgotPasswordForm from '@/components/auth/forgot-password-form';
import BreadCrumbs from '@/components/breadcrumbs';
import PageTitle from '@/components/page-title';
import { useBreadCrumbs } from '@/hooks/useBreadCrumbs';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

export default function SingInPage() {
  const [email, setEmail] = useState<string>('');

  const { pathname } = useRouter();
  const breadCrumbsData = useBreadCrumbs(
    [
      {
        name: 'Home',
        link: '/',
        Icon: HomeIcon,
      },
      {
        name: 'Forgot password',
        link: '/forgot-password',
      },
    ],
    pathname
  );

  return (
    <Main meta={<Meta title="Forgot password" description="Forgot password" />}>
      <BreadCrumbs data={breadCrumbsData} />
      <PageTitle title="Forgot password" />
      <p className="mx-4 mt-2 text-base font-normal leading-6 md:mx-auto md:max-w-[480px] md:text-center lg:max-w-[640px] text-secondary">
        Enter your email adress. We will send an email with a link to reset your
        password.
      </p>
      <ForgotPasswordForm
        email={email}
        setEmail={setEmail}
        onConfirm={() => {}}
      />
    </Main>
  );
}
