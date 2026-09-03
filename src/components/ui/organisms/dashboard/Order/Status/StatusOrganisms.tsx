import cn from '@/config/utilities/cn';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export type StatusTone = 'primary' | 'green' | 'red' | 'blue' | 'amber';

const toneClasses: Record<StatusTone, { tile: string; count: string; hover: string }> = {
    primary: { tile: 'bg-primary-50', count: 'text-primary-700', hover: 'lg:hover:border-primary-200' },
    green: { tile: 'bg-green-50', count: 'text-green-700', hover: 'lg:hover:border-green-200' },
    red: { tile: 'bg-secondary-50', count: 'text-secondary-600', hover: 'lg:hover:border-secondary-200' },
    blue: { tile: 'bg-blue-50', count: 'text-blue-700', hover: 'lg:hover:border-blue-200' },
    amber: { tile: 'bg-amber-50', count: 'text-amber-700', hover: 'lg:hover:border-amber-200' }
};

interface IProps {
    label: string;
    iconSrc: string | StaticImageData;
    count: number;
    href: string;
    unit?: string;
    tone?: StatusTone;
}

function StatusOrganisms({ label, iconSrc, count, href, unit = 'مورد', tone = 'primary' }: IProps) {
    const t = toneClasses[tone];

    return (
        <Link
            href={href}
            className={cn(
                'group flex h-full flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition',
                'lg:hover:-translate-y-0.5 lg:hover:shadow-md',
                t.hover
            )}
        >
            <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl', t.tile)}>
                <Image src={iconSrc} alt={label} width={24} height={24} />
            </span>
            <span className='flex flex-col'>
                <span className='flex items-baseline gap-1'>
                    <span className={cn('text-xl font-extrabold', t.count)}>{count}</span>
                    <span className='text-xs text-gray-500'>{unit}</span>
                </span>
                <span className='text-gray-850 mt-1 text-sm font-semibold'>{label}</span>
            </span>
        </Link>
    );
}

export default StatusOrganisms;
