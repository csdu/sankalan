import "@/styles/globals.css"
import "@/styles/main.css"
import "@/styles/landing.css"

import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from "next-auth/react"
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadParallaxMover } from "@tsparticles/move-parallax";
import { loadAll } from "@tsparticles/all";

config.autoAddCss = false;

const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;  

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadParallaxMover(engine);
          await loadAll(engine);
      }).then(() => {
      });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      </Head>
      <SessionProvider session={session}>
        <GlobalStyles />
        <Component {...pageProps}  />
      </SessionProvider>
      <Analytics />
    </>
  )
}
