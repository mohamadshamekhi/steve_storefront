import LayerIcon from '@/components/icons/blog/LayerIcon';
import FilterIcon from '@/components/icons/FilterIcon';
import SortIcon from '@/components/icons/SortIcon';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import DropDownItem from '../../atoms/DropDownItem/DropDownItem';
import Dropdown from '../../molecules/DropDown/DropDown';
import OffCanvas from '../../molecules/OffCanvas/OffCanvas';
import ProductFilterTemplate from './ProductFilterTemplate';

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
    return (
        <>
            <div className='hidden flex-wrap rounded-md bg-white p-4 lg:flex'>
                <div className='ml-8 flex items-center'>
                    <LayerIcon className='text-primary-700 ml-2.5' />
                    <span className='text-sm text-black'>مرتب سازی بر اساس :</span>
                </div>

                <div className='space-x-7'>
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.id;
                        return (
                            <Button
                                variant='text'
                                color='black'
                                key={filter.id}
                                onClick={() => onChange(filter.id)}
                                className={`min-w-[60px] p-0! text-sm! font-normal transition-all delay-75 ${
                                    isActive
                                        ? 'text-secondary-600 font-semibold'
                                        : 'text-gray-500 hover:font-semibold hover:text-gray-600'
                                }`}
                            >
                                {filter.label}
                            </Button>
                        );
                    })}
                </div>
            </div>

            <div className='ml-4 flex items-center justify-end gap-2 lg:hidden'>
                <Dropdown icon={<SortIcon className='h-5 w-5' />} isShowIcon={false}>
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

                <Button onClick={toggleMenu} icon={<FilterIcon className='text-white' />} />

                <OffCanvas isOpen={menuOpen} onClose={toggleMenu} position='right'>
                    <ProductFilterTemplate brands={brands} categories={categories} catSlug={catSlug} />
                </OffCanvas>
            </div>
        </>
    );
};
export default ProductSortTemplate;
