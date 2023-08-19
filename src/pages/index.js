import React from 'react';
import Head from 'next/head'
import { TranslateText } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Afghan Translator</title>
        <meta name="description" content="Dari-English Translator App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="App">
          <TranslateText />
        </div>
    </>
  )
}
