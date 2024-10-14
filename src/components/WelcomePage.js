import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/icons/afghanistan.png';
import { Button } from 'primereact/button';

export default function WelcomePage() {
  return (
    <div className="WelcomePage">
      <Image src={logo} alt="App Logo" width={150} height={150} />

      <h1>Afghan Translator</h1>

      <Link href="/sign-in">
        <Button label="Sign In" className="btn-signin" />
      </Link>

      <Link href="/sign-up">
        <Button label="Sign Up" className="btn-signup" />
      </Link>

    </div>
  );
}
