import "@/styles/globals.css"
import "@/styles/main.css"
import "@/styles/landing.css"

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
