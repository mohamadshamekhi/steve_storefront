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
}

const ProductListTemplate = ({ data: initialData, brands, categories }: ProductListTemplateProps) => {
    const [orderBy, setOrderBy] = useQueryState('order_by', parseAsString.withDefault(''));
    const searchParams = useSearchParams();
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const apiKey = useMemo(() => {
        return `${ApiKeys.GET_Products}?${searchParams.toString()}`;
    }, [searchParams]);

    const { data, isLoadingMore, isLoadingInitial, isFilterLoading, isEmpty, isReachingEnd, loadMore } = useInfiniteScroll<ProductProps>(
        apiKey,
        async ([, params]) => {
            const requestParams: Record<string, string | string[]> = {
                page_number: params.page_number.toString(),
                page_size: params.page_size.toString()
            };

            searchParams.forEach((value, key) => {
                if (key !== 'page_number' && key !== 'page_size' && value) {
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
            if (orderBy === value) {
                setOrderBy(null);
            } else {
                setOrderBy(value);
            }
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
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isLoadingMore, isReachingEnd, loadMore]);

    const displayData = isLoadingInitial ? initialData : isEmpty ? [] : data;

    return (
        <div className='lg:col-span-9'>
            <div>
                <ProductSortTemplate
                    onChange={handleOrderByChange}
                    activeFilter={orderBy}
                    brands={brands}
                    categories={categories}
                />

                {!isLoadingInitial && !isFilterLoading && isEmpty ? (
                    <EmptyState title='محصولی یافت نشد' subtitle='فیلترهای انتخابی با هیچ محصولی مطابقت ندارد.' />
                ) : (
                    <ul className='grid grid-cols-1 gap-4 px-[18px] py-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3'>
                        {isFilterLoading
                            ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
                            : displayData.map((product, index) => (
                                  <ProductCardOrganisms product={product} key={index} />
                              ))}
                    </ul>
                )}

                {!isReachingEnd && (
                    <div ref={loadMoreRef} className='py-4 text-center'>
                        {isLoadingMore && <p>در حال بارگذاری...</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductListTemplate;

