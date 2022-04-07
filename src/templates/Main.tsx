import { ReactNode } from 'react';

import Advertising from '@/components/advertising';
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
    <div className="w-full antialiased">
      {props.meta}
      <main>
        <Advertising message="Get free delivery on orders over $100 " />
        <Header theme={theme} setSelectedTheme={setSelectedTheme} />
        {props.children}
        <Footer />
      </main>
    </div>
  );
};

export { Main };
