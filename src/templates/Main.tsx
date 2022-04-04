import { ReactNode } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { useAppContext } from '@/context/AppContext';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const { theme, setSelectedTheme }: any = useAppContext();

  return (
    <div className="px-1 w-full antialiased">
      {props.meta}
      <main>
        <Header theme={theme} setSelectedTheme={setSelectedTheme} />
        <div className="py-5 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {props.children}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export { Main };
