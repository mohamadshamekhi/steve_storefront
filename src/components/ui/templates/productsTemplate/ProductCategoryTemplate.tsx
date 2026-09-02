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

    // top-level categories only — this row is a "browse by category" switcher, not a full tree
    const rootCategories = (categories ?? []).filter((category) => category.level === 0);

    if (rootCategories.length === 0) return null;

    return (
        <div className='no-scrollbar -mx-4 mb-5 flex items-center gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0'>
            {rootCategories.map((category) => {
                const isActive = currentSlug === category.slug;
                return (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.slug)}
                        className={`text-caption1-regular shrink-0 rounded-full border px-4 py-1.5 whitespace-nowrap transition-all ${
                            isActive
                                ? 'border-secondary-600 bg-secondary-600 font-semibold text-white shadow-sm shadow-secondary-600/25'
                                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
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
