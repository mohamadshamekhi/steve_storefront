'use client';

import type { SwiperProps } from 'swiper/react';
import { Swiper } from 'swiper/react';

const SwiperComponent = ({ children, ...rest }: SwiperProps) => {
    return <Swiper {...rest}>{children}</Swiper>;
};

export default SwiperComponent;
