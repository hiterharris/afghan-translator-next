import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { TranslateText } from '../components';
import { useStorage } from '../hooks';
import { Device } from '@capacitor/device';

export default function Home() {
  const { user, setStorage } = useStorage();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Device.getId().then((device) => {
        import('moesif-browser-js').then(moesif => {
          moesif.init({
            applicationId: process.env.NEXT_PUBLIC_MOESIF_APPLICATION_ID
          });

          if (device) {
            moesif.identifyUser(device?.identifier);
            setStorage('user', { id: device?.identifier });
          }

        }).catch(error => {
          console.error('Error loading moesif-browser-js:', error);
        });
      });
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Afghan Translator</title>
        <meta name="description" content="Dari-English Translator App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <TranslateText darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  )
}
