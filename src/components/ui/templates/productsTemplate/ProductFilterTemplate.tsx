'use client';
import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import CrossIcon from '@/components/icons/CrossIcon';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { useRouter, useSearchParams } from 'next/navigation';
import { parseAsString, useQueryState } from 'nuqs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Switch from '../../atoms/Switch/Switch';
import { Accordion } from '../../organisms/CAccordion/CAccordion';
import ProductRangSlider from '../../organisms/ProductRangSlider/ProductRangSlider';

interface DynamicFilterOption {
    key: string;
    name: string;
    unit: string;
    options: string[];
}

interface DynamicFiltersResponse {
    filter_option: DynamicFilterOption[];
    max_price: number;
    min_price: number;
}

interface ProductFilterTemplateProps {
    brands: Brand[];
    categories: Categories[];
}

const sortFilters = [
    { id: 'newest', label: 'جدید ترین' },
    { id: 'oldest', label: 'قدیمی ترین' },
    { id: 'most_expensive', label: 'گران ترین' },
    { id: 'least_expensive', label: 'ارزان ترین' },
    { id: 'most_sold', label: 'پر فروش ترین' }
];

const ProductFilterTemplate = ({ brands, categories }: ProductFilterTemplateProps) => {
    const [brandId, setBrandId] = useQueryState('brand_id', parseAsString.withDefault(''));
    const [categoryId, setCategoryId] = useQueryState('category_id', parseAsString.withDefault(''));
    const [orderBy, setOrderBy] = useQueryState('order_by', parseAsString.withDefault(''));
    const [isExist, setIsExist] = useQueryState('is_exist', parseAsString.withDefault(''));
    const [isSecondHand, setIsSecondHand] = useQueryState('is_second_hand', parseAsString.withDefault(''));
    const [minPrice, setMinPrice] = useQueryState('min_price', parseAsString.withDefault(''));
    const [maxPrice, setMaxPrice] = useQueryState('max_price', parseAsString.withDefault(''));

    const [dynamicFilters, setDynamicFilters] = useState<DynamicFilterOption[]>([]);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 500000000 });

    useEffect(() => {
        if (categoryId) {
            const fetchDynamicFilters = async () => {
                try {
                    const response = await fetcher(`${ApiKeys.GET_CATEGORY_FILTERS}/${categoryId}`, 'web', 'GET');

                    if (response.success && response.data) {
                        const data: DynamicFiltersResponse = response.data;
                        setDynamicFilters(data.filter_option || []);
                        setPriceRange({
                            min: data.min_price || 0,
                            max: data.max_price || 500000000
                        });
                    }
                } catch (error) {
                    console.error('Error fetching dynamic filters:', error);
                }
            };

            fetchDynamicFilters();
        } else {
            setDynamicFilters([]);
            setPriceRange({ min: 0, max: 500000000 });
        }
    }, [categoryId]);

    const handleExistToggle = useCallback(() => {
        if (isExist === 'true') {
            setIsExist(null);
        } else {
            setIsExist('true');
        }
    }, [isExist, setIsExist]);

    const handleSecondHandToggle = useCallback(() => {
        if (isSecondHand === 'true') {
            setIsSecondHand(null);
        } else {
            setIsSecondHand('true');
        }
    }, [isSecondHand, setIsSecondHand]);

    const handleBrandChange = useCallback(
        (selectedBrandId: string) => {
            if (brandId === selectedBrandId) {
                setBrandId(null);
            } else {
                setBrandId(selectedBrandId);
            }
        },
        [brandId, setBrandId]
    );

    const handlePriceChange = useCallback(
        (min: string, max: string) => {
            setMinPrice(min || null);
            setMaxPrice(max || null);
        },
        [setMinPrice, setMaxPrice]
    );

    const router = useRouter();
    const searchParams = useSearchParams();

    const getDynamicFilterValue = useCallback(
        (filterKey: string): string => {
            return searchParams.get(filterKey) || '';
        },
        [searchParams]
    );

    const handleDynamicFilterChange = useCallback(
        (filterKey: string, optionValue: string) => {
            const currentValue = getDynamicFilterValue(filterKey);

            const params = new URLSearchParams(searchParams.toString());

            if (currentValue === optionValue) {
                params.delete(filterKey);
            } else {
                params.set(filterKey, optionValue);
            }

            router.push(`?${params.toString()}`, { scroll: false });
        },
        [getDynamicFilterValue, searchParams, router]
    );

    // Handle حذف فیلتر داینامیک (برای استفاده در active filters)
    const handleRemoveDynamicFilter = useCallback(
        (filterKey: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete(filterKey);
            router.push(`?${params.toString()}`, { scroll: false });
        },
        [searchParams, router]
    );

    const selectedBrand = useMemo(() => {
        if (!brands || brands.length === 0) return undefined;
        return brands.find((brand) => brand.id === brandId);
    }, [brands, brandId]);

    const selectedCategory = useMemo(() => {
        if (!categories || categories.length === 0) return undefined;
        return categories.find((category) => category.id === categoryId);
    }, [categories, categoryId]);

    const selectedSort = useMemo(() => {
        return sortFilters.find((filter) => filter.id === orderBy);
    }, [orderBy]);

    const activeFilters = useMemo(() => {
        const filters: Array<{
            type: 'brand' | 'category' | 'sort' | 'exist' | 'price';
            label: string;
            onRemove: () => void;
        }> = [];

        if (selectedBrand) {
            filters.push({
                type: 'brand',
                label: `برند ${selectedBrand.name}`,
                onRemove: () => setBrandId(null)
            });
        }

        if (selectedCategory) {
            filters.push({
                type: 'category',
                label: `دسته‌بندی ${selectedCategory.name}`,
                onRemove: () => setCategoryId(null)
            });
        }

        if (selectedSort) {
            filters.push({
                type: 'sort',
                label: selectedSort.label,
                onRemove: () => setOrderBy(null)
            });
        }

        if (isExist === 'true') {
            filters.push({
                type: 'exist',
                label: 'کالاهای موجود',
                onRemove: () => setIsExist(null)
            });
        }

        if (isSecondHand === 'true') {
            filters.push({
                type: 'exist',
                label: 'کالاهای دست دوم',
                onRemove: () => setIsSecondHand(null)
            });
        }

        if (minPrice || maxPrice) {
            const priceLabel =
                minPrice && maxPrice
                    ? `قیمت: ${minPrice} - ${maxPrice}`
                    : minPrice
                      ? `از ${minPrice}`
                      : `تا ${maxPrice}`;
            filters.push({
                type: 'price',
                label: priceLabel,
                onRemove: () => {
                    setMinPrice(null);
                    setMaxPrice(null);
                }
            });
        }

        // اضافه کردن فیلترهای داینامیک به active filters
        if (dynamicFilters.length > 0) {
            dynamicFilters.forEach((filter) => {
                const currentValue = getDynamicFilterValue(filter.key);
                if (currentValue) {
                    filters.push({
                        type: 'price',
                        label: `${filter.name}: ${currentValue}`,
                        onRemove: () => handleRemoveDynamicFilter(filter.key)
                    });
                }
            });
        }

        return filters;
    }, [
        selectedBrand,
        selectedCategory,
        selectedSort,
        isExist,
        isSecondHand,
        minPrice,
        maxPrice,
        setBrandId,
        setCategoryId,
        setOrderBy,
        setIsExist,
        setIsSecondHand,
        setMinPrice,
        setMaxPrice,
        dynamicFilters,
        getDynamicFilterValue,
        handleRemoveDynamicFilter
    ]);

    const clearAllFilters = useCallback(() => {
        // اول تمام پارامترهای داینامیک رو از URL پاک می‌کنیم
        const params = new URLSearchParams();

        // فقط پارامترهای ضروری مثل page_number و page_size رو نگه می‌داریم
        if (searchParams.has('page_number')) {
            params.set('page_number', searchParams.get('page_number')!);
        }
        if (searchParams.has('page_size')) {
            params.set('page_size', searchParams.get('page_size')!);
        }

        // URL رو با پارامترهای خالی آپدیت می‌کنیم
        router.replace(`?${params.toString()}`, { scroll: false });

        // بعد فیلترهای استاتیک nuqs رو پاک می‌کنیم (اینا خودشون URL رو آپدیت نمی‌کنن چون قبلا پاک شدن)
        setBrandId(null);
        setCategoryId(null);
        setOrderBy(null);
        setIsExist(null);
        setIsSecondHand(null);
        setMinPrice(null);
        setMaxPrice(null);
    }, [
        setBrandId,
        setCategoryId,
        setOrderBy,
        setIsExist,
        setIsSecondHand,
        setMinPrice,
        setMaxPrice,
        searchParams,
        router
    ]);

    // ساخت آیتم‌های اکوردیون
    const accordionItems = useMemo(() => {
        const items: Array<{
            id: string;
            title: string | React.ReactElement;
            content?: React.ReactElement;
            disableLeftIcon?: boolean;
            showIcon?: boolean;
            canToggle?: boolean;
        }> = [
            {
                id: 'static-exist',
                disableLeftIcon: true,
                title: (
                    <div className='flex w-full flex-wrap items-center justify-between gap-2'>
                        <span>کالاهای موجود</span>
                        <Switch size='sm' variant='primary' checked={isExist === 'true'} onChange={handleExistToggle} />
                    </div>
                ),
                showIcon: false,
                canToggle: false
            },
            {
                id: 'static-second-hand',
                disableLeftIcon: true,
                title: (
                    <div className='flex w-full flex-wrap items-center justify-between gap-2'>
                        <span>کالاهای دست دوم</span>
                        <Switch
                            size='sm'
                            variant='primary'
                            checked={isSecondHand === 'true'}
                            onChange={handleSecondHandToggle}
                        />
                    </div>
                ),
                showIcon: false,
                canToggle: false
            },
            {
                id: 'static-brand',
                title: 'برند',
                content: (
                    <div className='flex flex-col gap-2'>
                        {brands && brands.length > 0 ? (
                            brands.map((brand) => (
                                <Checkbox
                                    key={brand.id}
                                    id={`brand-${brand.id}`}
                                    name={`brand-${brand.id}`}
                                    label={brand.name}
                                    checked={brandId === brand.id}
                                    onChange={() => handleBrandChange(brand.id)}
                                    className='flex-row-reverse justify-between'
                                />
                            ))
                        ) : (
                            <div className='text-sm text-gray-600'>برندی موجود نیست</div>
                        )}
                    </div>
                )
            },
            {
                id: 'static-price',
                title: 'محدوده قیمت',
                content: (
                    <ProductRangSlider
                        minValue={minPrice}
                        maxValue={maxPrice}
                        onChange={handlePriceChange}
                        rangeMin={priceRange.min}
                        rangeMax={priceRange.max}
                    />
                )
            }
        ];

        if (dynamicFilters.length > 0) {
            dynamicFilters.forEach((filter) => {
                const currentValue = getDynamicFilterValue(filter.key);

                items.push({
                    id: `item-${filter.key}`,
                    title: filter.name,
                    content: (
                        <div className='flex flex-col gap-2'>
                            {filter.options.map((option, idx) => (
                                <Checkbox
                                    key={`${filter.key}-${idx}`}
                                    id={`${filter.key}-${idx}`}
                                    name={`${filter.key}-${idx}`}
                                    label={option}
                                    checked={currentValue === option}
                                    onChange={() => handleDynamicFilterChange(filter.key, option)}
                                    className='flex-row-reverse justify-between'
                                />
                            ))}
                        </div>
                    )
                });
            });
        }

        return items;
    }, [
        isExist,
        handleExistToggle,
        isSecondHand,
        handleSecondHandToggle,
        brands,
        brandId,
        handleBrandChange,
        minPrice,
        maxPrice,
        handlePriceChange,
        priceRange,
        dynamicFilters,
        getDynamicFilterValue,
        handleDynamicFilterChange
    ]);

    return (
        <>
            <div className='mt-3 flex items-center justify-between p-6'>
                <span className='text-base font-semibold'>فیلتر</span>

                <Button
                    variant='text'
                    color='secondary'
                    className='p-0!'
                    onClick={clearAllFilters}
                    disabled={activeFilters.length === 0}
                >
                    حذف فیلتر ها
                </Button>
            </div>

            {activeFilters.length > 0 && (
                <ul className='flex flex-wrap items-center gap-3 px-[23px]'>
                    {activeFilters.map((filter, index) => (
                        <li
                            key={index}
                            className='text-caption1-regular rounded-md bg-gray-100 px-3 py-1 text-gray-800'
                        >
                            <button
                                onClick={filter.onRemove}
                                className='flex cursor-pointer items-center justify-between gap-2'
                            >
                                <span>{filter.label}</span>
                                <CrossIcon className='h-2 w-2 text-gray-500' />
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <Accordion defaultActiveKey='0' type='multiple'>
                {accordionItems.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={item.id}>
                        <Accordion.Header
                            eventKey={index.toString()}
                            showIcon={item.showIcon}
                            canToggle={item.canToggle}
                        >
                            <div>{item.title}</div>
                        </Accordion.Header>
                        {item.content && <Accordion.Body eventKey={index.toString()}>{item.content}</Accordion.Body>}
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
};

export default ProductFilterTemplate;

