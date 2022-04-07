import { AppProps } from 'next/app';
import Script from 'next/script';

import { AppProvider } from '@/context/AppContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/* Forced to do this to access tw-elements */}
    <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
    <Component {...pageProps} />
  </>
);

export default MyApp;
