import Head from 'next/head';
import { SSRProvider } from 'react-aria';
import { Toaster } from 'react-hot-toast';
import { ApolloProvider } from '@apollo/client';

import { AppPropsWithLayout } from '@frontend/types';
import 'simplebar-react/dist/simplebar.min.css';
import '../styles/global.css';
import { useApollo } from '../appolo';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Estaty | Find the best properties</title>
      </Head>

      <SSRProvider>
        <ApolloProvider client={apolloClient}>
          <main className="app">{getLayout(<Component {...pageProps} />)}</main>
          <Toaster />
        </ApolloProvider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
