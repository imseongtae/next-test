import '../styles/common/reset.css';
import '../styles/common/normalize.css';
import '../styles/common/customize.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
