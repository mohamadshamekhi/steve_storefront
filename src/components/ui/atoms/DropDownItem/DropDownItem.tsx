import cn from '@/config/utilities/cn';
import Link from 'next/link';
import Button from '../Button/Button';
import { DropDownItemProps } from './dropdown-item-props.types';

const DropDownItem = ({
    className = '',
    icon,
    label,
    target = '_blank',
    type = 'button',
    onClick,
    href = 'string'
}: DropDownItemProps) => {
    const baseStyles =
        'no-underline! text-body1-regular! flex justify-start! items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition';

    if (type === 'link') {
        return (
            <Link href={href} target={target} className={cn('text-body1-regular', baseStyles, className)}>
                {icon}
                <span>{label}</span>
            </Link>
        );
    }

    return (
        <Button
            variant='text'
            color='black'
            className={cn('text-body1-regular', baseStyles, className)}
            onClick={onClick}
        >
            {icon}
            <span>{label}</span>
        </Button>
    );
};

export default DropDownItem;
