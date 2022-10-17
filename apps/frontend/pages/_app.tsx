import Head from 'next/head';
import { SSRProvider } from 'react-aria';
import { ApolloProvider } from '@apollo/client';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import appoloClient from '@frontend/appolo/client';

import { AppPropsWithLayout } from '../types';
import '../styles/global.css';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <SSRProvider>
        <ApolloProvider client={appoloClient}>
          <main className="app">{getLayout(<Component {...pageProps} />)}</main>
        </ApolloProvider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
