import React from 'react';
import Head from 'next/head'
import { TranslateText } from '../components';
import Script from 'next/script';
import { RateApp } from 'capacitor-rate-app';

export default function Home() {
  RateApp.requestReview();

  return (
    <>
      <Head>
        <title>Afghan Translator</title>
        <meta name="description" content="Dari-English Translator App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RBF2SG2K38" />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-RBF2SG2K38')
          `}
        </Script>
      <div className="App">
        <TranslateText />
      </div>
    </>
  )
}
