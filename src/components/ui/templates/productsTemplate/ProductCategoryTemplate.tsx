'use client';
import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Categories from '@/config/types/categories.types';
import ROUTES from '@/constants/routes/routes.constant';

interface ICategoriesProps {
    categories: Categories[];
    activeCatSlug?: string;
}

const ProductCategoryTemplate = ({ categories, activeCatSlug }: ICategoriesProps) => {
    const router = useRouter();
    const pathname = usePathname();

    // extract slug from current path as fallback (e.g. /product/category/گوشی-موبایل)
    const slugFromPath = pathname.startsWith(`${ROUTES.Products}/category/`)
        ? decodeURIComponent(pathname.replace(`${ROUTES.Products}/category/`, ''))
        : undefined;

    const currentSlug = activeCatSlug ?? slugFromPath;

    const handleCategoryClick = useCallback(
        (slug: string) => {
            if (currentSlug === slug) {
                router.push(ROUTES.Products);
            } else {
                router.push(`${ROUTES.Products}/category/${slug}`);
            }
        },
        [currentSlug, router]
    );

    return (
        <div className='mb-6 flex flex-wrap items-center gap-2'>
            {categories.map((category) => {
                const isActive = currentSlug === category.slug;
                return (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.slug)}
                        className={`text-caption1-regular rounded-sm px-[15px] py-2 transition-all ${
                            isActive
                                ? 'bg-secondary-600 text-white font-semibold'
                                : 'bg-white text-gray-800 hover:bg-gray-100'
                        }`}
                    >
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
};

export default ProductCategoryTemplate;
