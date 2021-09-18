import '../styles/tailwind.css'
import Header from '../components/navigation/Header'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className='bg-darkgrey'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default MyApp
