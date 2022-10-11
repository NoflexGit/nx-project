import Head from 'next/head';

import '../styles/global.css';
import { AppPropsWithLayout } from '../types';


function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">{getLayout(<Component {...pageProps} />)}</main>
    </>
  );
}

export default CustomApp;
