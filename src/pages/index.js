import React, { useEffect } from 'react';
import Head from 'next/head';
import { TranslateText, WelcomePage } from '../components';
import { useUser, SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('moesif-browser-js')
        .then((moesif) => {
          moesif.init({
            applicationId: process.env.NEXT_PUBLIC_MOESIF_APPLICATION_ID,
          });
          moesif.identifyUser(user.id);
        })
        .catch((error) => {
          console.error('Error loading moesif-browser-js:', error);
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
      <div className="App">
        <SignedOut>
          <WelcomePage />
        </SignedOut>
        <SignedIn>
          <TranslateText />
        </SignedIn>
      </div>
    </>
  );
}
