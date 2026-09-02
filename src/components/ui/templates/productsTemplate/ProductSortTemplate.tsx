import LayerIcon from '@/components/icons/blog/LayerIcon';
import FilterIcon from '@/components/icons/FilterIcon';
import SortIcon from '@/components/icons/SortIcon';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import DropDownItem from '../../atoms/DropDownItem/DropDownItem';
import Dropdown from '../../molecules/DropDown/DropDown';
import OffCanvas from '../../molecules/OffCanvas/OffCanvas';
import ProductFilterTemplate from './ProductFilterTemplate';

const NON_FILTER_PARAMS = ['page_number', 'page_size', 'order_by', 'category_slug', 'category_id'];

const filters = [
    { id: 'newest', label: 'جدید ترین' },
    { id: 'oldest', label: 'قدیمی ترین' },
    { id: 'most_expensive', label: ' گران ترین' },
    { id: 'least_expensive', label: ' ارزان ترین' },
    { id: 'most_sold', label: 'پر فروش ترین' }
];

type Props = {
    activeFilter: string;
    onChange: (filterId: string) => void;
    brands: Brand[];
    categories: Categories[];
    catSlug?: string;
};

const ProductSortTemplate = ({ activeFilter, onChange, brands, categories, catSlug }: Props) => {
    const [menuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsMenuOpen(!menuOpen);

    const searchParams = useSearchParams();
    const activeFilterCount = Array.from(searchParams.keys()).filter(
        (key) => !NON_FILTER_PARAMS.includes(key) && !!searchParams.get(key)
    ).length;
    const activeSortLabel = filters.find((f) => f.id === activeFilter)?.label;

    return (
        <>
            <div className='mb-4 hidden flex-wrap items-center gap-2 rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(16,24,40,0.06)] lg:flex'>
                <div className='ml-3 flex items-center gap-1.5 text-sm font-medium text-gray-700'>
                    <LayerIcon className='text-primary-600' />
                    <span>مرتب‌سازی:</span>
                </div>

                {filters.map((filter) => {
                    const isActive = activeFilter === filter.id;
                    return (
                        <button
                            key={filter.id}
                            type='button'
                            onClick={() => onChange(filter.id)}
                            className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                                isActive
                                    ? 'bg-primary-600 font-semibold text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>

            <div className='sticky top-[var(--app-header-h,0px)] z-20 -mx-4 flex items-stretch gap-2 border-b border-gray-100 bg-gray-50/95 px-4 py-2 backdrop-blur lg:hidden'>
                <Dropdown
                    className='flex-1'
                    label={activeSortLabel ?? 'مرتب‌سازی'}
                    icon={<SortIcon className='h-4 w-4' />}
                >
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.id;
                        return (
                            <DropDownItem
                                key={filter.id}
                                label={filter.label}
                                onClick={() => onChange(filter.id)}
                                className={isActive ? 'text-secondary-600 font-semibold' : ''}
                            />
                        );
                    })}
                </Dropdown>

                <button
                    type='button'
                    onClick={toggleMenu}
                    className='relative flex h-[46px] flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
                >
                    <FilterIcon className='text-primary-600 h-4 w-4' />
                    <span>فیلترها</span>
                    {activeFilterCount > 0 && (
                        <span className='bg-secondary-600 absolute -top-1.5 -left-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-bold text-white'>
                            {activeFilterCount}
                        </span>
                    )}
                </button>

                <OffCanvas isOpen={menuOpen} onClose={toggleMenu} position='right'>
                    <ProductFilterTemplate brands={brands} categories={categories} catSlug={catSlug} />
                </OffCanvas>
            </div>
        </>
    );
};
export default ProductSortTemplate;
