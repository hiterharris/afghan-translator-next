import Image from 'next/image';
import { back } from '../assets/icons';
import { useRouter } from 'next/router';

const Saved = () => {
  const router = useRouter();

    return (
        <div className="Saved">
            <Image
                src={back}
                alt='back icon'
                className='back'
                onClick={() => router.back()}
            />
            <h1>Saved</h1>
        </div>
    )
}

export default Saved;
