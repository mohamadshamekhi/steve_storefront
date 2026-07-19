import AdvertiseImage from '@public/images/advertise/advertise.png';
import Image from 'next/image';
import Link from 'next/link';

export default function AdvertiseOrganism() {
    return (
        <>
            <Link href={'/product'}>
                <Image src={AdvertiseImage} alt='advertise image' />
            </Link>
        </>
    );
}
