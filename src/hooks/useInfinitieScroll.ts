import { useCallback, useMemo } from 'react';
import useSWRInfinite, { SWRInfiniteResponse } from 'swr/infinite';

interface Meta {
    page_number: number;
    page_size: number;
    total: number;
}

interface PaginatedResponse<T> {
    data: T[];
    pagination: Meta;
}

interface UseInfiniteScrollOptions {
    pageSize?: number;
    initialPageIndex?: number;
}

interface UseInfiniteScrollParams {
    page_number: number;
    page_size: number;
}

interface UseInfiniteScrollReturn<T> extends Omit<SWRInfiniteResponse<PaginatedResponse<T>>, 'data'> {
    data: T[];
    pagination?: Meta;
    isLoadingInitial: boolean;
    isLoadingMore: boolean;
    isFilterLoading: boolean;
    isEmpty: boolean;
    isReachingEnd: boolean;
    isRefreshing: boolean;
    totalItems: number;
    totalPages: number;
    currentPage: number;
    loadMore: () => void;
    refresh: () => void;
    updateItem: (predicate: (item: T) => boolean, updater: (item: T) => T) => void;
}

export default function useInfiniteScroll<T>(
    baseUrl: string,
    fetcher: ([url, params]: [string, UseInfiniteScrollParams]) => Promise<PaginatedResponse<T>>,
    options: UseInfiniteScrollOptions = {}
): UseInfiniteScrollReturn<T> {
    const { pageSize = 10, initialPageIndex = 1 } = options;

    const getKey = useCallback(
        (pageIndex: number, previousPageData: PaginatedResponse<T> | null) => {
            if (previousPageData) {
                const lastPage = Math.ceil(previousPageData.pagination.total / previousPageData.pagination.page_size);
                if (previousPageData.pagination.page_number >= lastPage) {
                    return null;
                }
            }
            return [baseUrl, { page_number: pageIndex + initialPageIndex, page_size: pageSize }];
        },
        [baseUrl, pageSize, initialPageIndex]
    );

    const {
        data: pages,
        error,
        size,
        setSize,
        isValidating,
        isLoading,
        mutate
    } = useSWRInfinite<PaginatedResponse<T>>(getKey, fetcher, { revalidateFirstPage: false });

    const data = useMemo(() => {
        if (!pages) return [];
        return pages.flatMap((page) => page.data);
    }, [pages]);

    const pagination = useMemo(() => {
        if (!pages || pages.length === 0) return undefined;
        return pages[pages.length - 1].pagination;
    }, [pages]);

    const isLoadingInitial = !pages && !error;

    const isLoadingMore = Boolean(isLoadingInitial || (size > 0 && pages && typeof pages[size - 1] === 'undefined'));

    const isFilterLoading = isLoading;

    const isEmpty = data.length === 0;

    const isReachingEnd = Boolean(isEmpty || (pagination && pagination.page_number >= Math.ceil(pagination.total / pagination.page_size)));

    const isRefreshing = Boolean(isValidating && pages && pages.length === size);

    const totalItems = pagination?.total ?? 0;

    const totalPages = pagination ? Math.ceil(pagination.total / pagination.page_size) : 0;

    const currentPage = pagination?.page_number ?? 0;

    const loadMore = useCallback(() => {
        if (!isLoadingMore && !isReachingEnd) {
            setSize(size + 1);
        }
    }, [isLoadingMore, isReachingEnd, setSize, size]);

    const refresh = useCallback(() => {
        mutate();
    }, [mutate]);

    const updateItem = useCallback(
        (predicate: (item: T) => boolean, updater: (item: T) => T) => {
            if (!pages) return;

            const updatedPages = pages.map((page) => ({
                ...page,
                data: page.data.map((item) => (predicate(item) ? updater(item) : item))
            }));

            mutate(updatedPages, false);
        },
        [pages, mutate]
    );

    return {
        data,
        pagination,
        error,
        size,
        setSize,
        isValidating,
        isLoading,
        mutate,
        isLoadingInitial,
        isLoadingMore,
        isFilterLoading,
        isEmpty,
        isReachingEnd,
        isRefreshing,
        totalItems,
        totalPages,
        currentPage,
        loadMore,
        refresh,
        updateItem
    };
}

