import React, { useState, useEffect } from 'react';
import { AppStoreButton } from '../components';
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        typeof window !== "undefined" && setIsBrowser(true);
    }, [isBrowser]);

    return (
        <>
            <div className='Footer'>
                {isBrowser && <AppStoreButton />}
                <p onClick={() => router.push('/support')}>Contact & Support</p>
            </div>
        </>
    );
}

export default Footer;