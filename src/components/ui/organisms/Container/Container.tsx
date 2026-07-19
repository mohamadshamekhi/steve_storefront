import cn from '@/config/utilities/cn';
import { PropsWithChildren } from 'react';
interface ContainerProps extends PropsWithChildren {
    className?: string;
}
const Container = ({ children, className = '' }: ContainerProps) => {
    return <div className={cn('mx-auto px-4 lg:max-w-[1200px] xl:max-w-[1339px]',className)}>{children}</div>;
};

export default Container;
