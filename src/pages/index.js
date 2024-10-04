import Head from 'next/head'
import { TranslateText } from '../components';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Afghan Translator</title>
        <meta name="description" content="Dari-English Translator App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script src="//unpkg.com/moesif-browser-js@v1/moesif.min.js"></script>
      <Script
        id="moesif-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            moesif.init({
              applicationId: "${process.env.NEXT_PUBLIC_MOESIF_APPLICATION_ID}",
            });

            moesif.identifyUser("12345");

            moesif.track("clicked_sign_up", {
              button_label: "Get Started",
            });
          `,
        }}
      />
      <div className="App">
        <TranslateText />
      </div>
    </>
  )
}
