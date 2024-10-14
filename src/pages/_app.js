import '../styles/globals.css'
import '../styles/App.css'
import "../styles/TranslateText.css"
import '../styles/Input.css'
import '../styles/Output.css'
import '../styles/Languages.css'
import '../styles/MediaHandler.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn
} from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />
      </SignedIn>
    </ClerkProvider>
  )  
}
