import Image from 'next/image';
import Link from 'next/link';
import appStoreButton from '../assets/images/appStoreButton.png';

const AppStoreButton = () => {
    const iOSUrl = "https://apps.apple.com/gb/app/afghan-translator-app/id6462798585";
    return (
        <Link href={iOSUrl} className='AppStoreButton'>
            <Image
                src={appStoreButton}
                alt='App Store Button'
                onClick={() => { }}
                height={36}
                width="inherit"
            />
        </Link>
    );
};

export default AppStoreButton;