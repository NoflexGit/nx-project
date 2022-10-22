import Head from 'next/head';
import { SSRProvider } from 'react-aria';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from '@frontend/components';
import { AppPropsWithLayout } from '@frontend/types';
import '../styles/global.css';

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
          <Toaster />
        </SSRProvider>
      </AuthProvider>
    </>
  );
}

export default CustomApp;
