import '../styles/globals.css'
import '../styles/reset.scss'
import '../styles/normalize.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
