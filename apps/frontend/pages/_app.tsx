import Head from 'next/head';
import { SSRProvider } from 'react-aria';

import { AppPropsWithLayout } from '../types';
import '../styles/global.css';
import { AuthProvider } from '../contexts/auth/Auth';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <AuthProvider>
        <SSRProvider>
          <main className="app">{getLayout(<Component {...pageProps} />)}</main>
        </SSRProvider>
      </AuthProvider>
    </>
  );
}

export default CustomApp;
