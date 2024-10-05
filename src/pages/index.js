import React, { useEffect } from 'react';
import Head from 'next/head';
import { TranslateText } from '../components';
import { useStorage } from '../hooks';
import { Device } from '@capacitor/device';

export default function Home() {
  const { setStorage } = useStorage();

  useEffect(() => {
      Device.getId().then((info) => {
        setStorage('user', { id: info?.identifier });
      });
  }, []);

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
