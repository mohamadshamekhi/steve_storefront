import { fetcher } from '@/api';
import ApiKeys from '@/api/keys';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import useInfiniteScroll from '@/hooks/useInfinitieScroll';
import { useSearchParams } from 'next/navigation';
import { parseAsString, useQueryState } from 'nuqs';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';
import ProductCardOrganisms from '../../organisms/ProductsOrganisms/ProductCardOrganisms';
import ProductCardSkeleton from '../../organisms/SkeletonOrganisms/ProductCardSkeleton/ProductCardSkeleton';
import EmptyState from '../../molecules/EmptyState/EmptyState';
import ProductSortTemplate from './ProductSortTemplate';

interface ProductListTemplateProps {
    data: ProductProps[];
    brands: Brand[];
    categories: Categories[];
    catSlug?: string;
    /** implied filters set by a dedicated landing page (/product/brand/*, /product/price-range/*) - not driven by query state, so they're injected into every fetch here directly */
    lockedBrand?: { id: string; name: string };
    lockedPriceRange?: { min?: number; max?: number; label: string };
}

const ProductListTemplate = ({
    data: initialData,
    brands,
    categories,
    catSlug,
    lockedBrand,
    lockedPriceRange
}: ProductListTemplateProps) => {
    const [orderBy, setOrderBy] = useQueryState('order_by', parseAsString.withDefault(''));
    const searchParams = useSearchParams();
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const lockedParams = useMemo(() => {
        const params: Record<string, string> = {};
        if (catSlug) params['category_slug'] = catSlug;
        if (lockedBrand) params['brand_id'] = lockedBrand.id;
        if (lockedPriceRange?.min !== undefined) params['min_price'] = String(lockedPriceRange.min);
        if (lockedPriceRange?.max !== undefined) params['max_price'] = String(lockedPriceRange.max);
        return params;
    }, [catSlug, lockedBrand, lockedPriceRange]);

    const apiKey = useMemo(() => {
        const lockedQs = new URLSearchParams(lockedParams).toString();
        const base = lockedQs ? `${ApiKeys.GET_Products}?${lockedQs}&` : `${ApiKeys.GET_Products}?`;
        return `${base}${searchParams.toString()}`;
    }, [searchParams, lockedParams]);

    const categoryName = catSlug
        ? (categories.find((c) => c.slug === catSlug)?.name ?? catSlug)
        : lockedBrand
          ? lockedBrand.name
          : lockedPriceRange
            ? lockedPriceRange.label
            : 'همه محصولات';

    const { data, totalItems, isLoadingMore, isLoadingInitial, isFilterLoading, isEmpty, isReachingEnd, loadMore } = useInfiniteScroll<ProductProps>(
        apiKey,
        async ([, params]) => {
            const requestParams: Record<string, string | string[]> = {
                page_number: params.page_number.toString(),
                page_size: params.page_size.toString(),
                ...lockedParams
            };

            searchParams.forEach((value, key) => {
                if (key !== 'page_number' && key !== 'page_size' && key !== 'category_id' && value) {
                    requestParams[key] = value;
                }
            });

            const response = await fetcher(ApiKeys.GET_Products, 'web', 'GET', {
                params: requestParams
            });
            return {
                data: response.data.products,
                pagination: response.data.pagination
            };
        },
        { pageSize: 10, initialPageIndex: 1 }
    );

    const handleOrderByChange = useCallback(
        (value: string) => {
            setOrderBy(orderBy === value ? null : value);
        },
        [orderBy, setOrderBy]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoadingMore && !isReachingEnd) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [isLoadingMore, isReachingEnd, loadMore]);

    const displayData = isLoadingInitial ? initialData : isEmpty ? [] : data;

    return (
        <div className='lg:col-span-9'>
            <div>
                <div className='mb-3 flex items-baseline gap-2 lg:mb-4'>
                    <h2 className='text-base font-bold text-gray-800 lg:text-lg'>{categoryName}</h2>
                    {totalItems > 0 && (
                        <span className='text-xs text-gray-400 lg:text-sm'>
                            {totalItems.toLocaleString('fa-IR')} کالا
                        </span>
                    )}
                </div>

                <ProductSortTemplate
                    onChange={handleOrderByChange}
                    activeFilter={orderBy}
                    brands={brands}
                    categories={categories}
                    catSlug={catSlug}
                    lockedBrand={lockedBrand}
                    lockedPriceRange={lockedPriceRange}
                />

                {!isLoadingInitial && !isFilterLoading && isEmpty ? (
                    <EmptyState title='محصولی یافت نشد' subtitle='فیلترهای انتخابی با هیچ محصولی مطابقت ندارد.' />
                ) : (
                    <ul className='grid grid-cols-2 gap-3 py-4 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4'>
                        {isFilterLoading
                            ? Array.from({ length: 12 }).map((_, i) => <ProductCardSkeleton key={i} />)
                            : displayData.map((product, index) => (
                                  <ProductCardOrganisms product={product} key={index} />
                              ))}
                    </ul>
                )}

                {!isReachingEnd && (
                    <div ref={loadMoreRef} className='flex items-center justify-center py-6'>
                        {isLoadingMore && (
                            <span className='border-primary-200 border-t-primary-600 h-6 w-6 animate-spin rounded-full border-2' />
                        )}
                    </div>
                )}

                {isReachingEnd && !isEmpty && displayData.length > 0 && (
                    <p className='py-6 text-center text-xs text-gray-400'>همه محصولات نمایش داده شد</p>
                )}
            </div>
        </div>
    );
};

export default ProductListTemplate;
