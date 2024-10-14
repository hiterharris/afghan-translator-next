import '../styles/globals.css';
import '../styles/App.css';
import "../styles/TranslateText.css";
import '../styles/Input.css';
import '../styles/Output.css';
import '../styles/Languages.css';
import '../styles/MediaHandler.css';
import '../styles/WelcomePage.css';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
          <Component {...pageProps} />
      </SignedOut>
    </ClerkProvider>
  );
}
