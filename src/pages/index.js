import React from 'react';
import Head from 'next/head'
import { TranslateText } from '../components';
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

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
        <button onClick={() => router.push('/support')}>Support</button>
      </div>
    </>
  )
}
