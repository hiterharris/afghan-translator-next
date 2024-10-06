import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { TranslateText } from '../components';
import { useStorage } from '../hooks';
import { Device } from '@capacitor/device';

export default function Home() {
  const { user, setStorage } = useStorage();
  const [moesifClick, setMoesifClick] = useState();

  function handleTranslateClick(moesif) {
    moesif.track('clicked_button', {
      button_label: 'Translate'
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('moesif-browser-js').then(moesif => {
        moesif.init({
          applicationId: process.env.NEXT_PUBLIC_MOESIF_APPLICATION_ID
        });

        console.log('user:', user);
        moesif.identifyUser(user.id);

        setMoesifClick(() => () => handleTranslateClick(moesif));
      }).catch(error => {
        console.error('Error loading moesif-browser-js:', error);
      });
    }
  }, [user]);

  useEffect(() => {
      Device.getId().then((user) => {
        setStorage('user', { id: user?.identifier });
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
        <TranslateText moesifClick={moesifClick} />
      </div>
    </>
  )
}
