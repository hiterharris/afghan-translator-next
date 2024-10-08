import '../styles/globals.css'
import '../styles/App.css'
import "../styles/TranslateText.css"
import '../styles/Input.css'
import '../styles/Output.css'
import '../styles/Languages.css'
import '../styles/MediaHandler.css'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedOut>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <SignInButton />
        <SignUpButton />
        </div>

      </SignedOut>
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />
      </SignedIn>
    </ClerkProvider>
  )  
}
