import Head from 'next/head';
import { SSRProvider } from 'react-aria';

import '../styles/global.css';
import { AppPropsWithLayout } from '../types';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <SSRProvider>
        <main className="app">{getLayout(<Component {...pageProps} />)}</main>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
