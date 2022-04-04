import { AppProps } from 'next/app';

import { AppProvider } from '@/context/AppContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default MyApp;
