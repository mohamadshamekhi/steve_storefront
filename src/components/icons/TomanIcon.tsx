import IconProps from '@/config/types/icon.types';
import IconWrapper from '../ui/molecules/IconWrapper/IconWrapper';

// One cached file instead of inline SVG: the 4KB path repeated on every product
// card and price was over a quarter of a listing page's HTML.
const TomanIcon = ({ className }: IconProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src='/images/_general/toman.svg' alt='تومان' width={18} height={13} className={className} />;
};

export default IconWrapper(TomanIcon);
