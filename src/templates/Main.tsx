import { ReactNode } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="px-1 w-full antialiased bg-background">
    {props.meta}
    <main>
      <Header />
      <div className="py-5 text-xl">{props.children}</div>
      <Footer />
    </main>
  </div>
);

export { Main };
