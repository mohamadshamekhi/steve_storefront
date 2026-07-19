import IconProps from '@/config/types/icon.types';
import { ComponentType } from 'react';

type Benefit = {
    title: string;
    description: string;
    Icon: ComponentType<IconProps>;
    iconClassName?: string;
    className?: string;
    iconProps?: IconProps;
};

export default Benefit;
