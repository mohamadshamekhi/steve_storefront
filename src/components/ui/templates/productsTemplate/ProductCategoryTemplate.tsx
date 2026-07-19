'use client';
import { useCallback } from 'react';
import { parseAsString, useQueryState } from 'nuqs';
import Categories from '@/config/types/categories.types';

interface ICategoriesProps {
    categories: Categories[];
}

const ProductCategoryTemplate = ({ categories }: ICategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useQueryState('category_id', parseAsString.withDefault(''));

    const handleCategoryClick = useCallback(
        (categoryId: string) => {
            if (selectedCategory === categoryId) {
                // Remove category if already selected (toggle off)
                setSelectedCategory(null);
            } else {
                // Select the clicked category
                setSelectedCategory(categoryId);
            }
        },
        [selectedCategory, setSelectedCategory]
    );

    return (
        <div className='mb-6 flex flex-wrap items-center gap-2'>
            {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
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
