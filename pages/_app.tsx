import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/common/reset.css';
import '../styles/common/normalize.css';
import '../styles/common/customize.css';
import '~/styles/globals.scss'


function _app({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}

export default _app
