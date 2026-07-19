'use client';
import ClockIcon from '@/components/icons/RepairIcon/ClockIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import Input from '@/components/ui/atoms/Input/Input';
import useDebounce from '@/hooks/useDebounce';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface SearchProduct {
    id: string;
    name: string;
    slug: string;
    gallery: { url: string; is_primary: boolean }[];
    rating: number;
    is_published: boolean;
    is_second_hand: boolean;
}

interface SearchArticle {
    id: string;
    title: string;
    slug: string;
    media_url: string;
    alt: string;
}

interface SearchResults {
    products: SearchProduct[];
    articles: SearchArticle[];
}

const LS_KEY = 'search_history';
const MAX_HISTORY = 10;

const getHistory = (): string[] => {
    try {
        return JSON.parse(localStorage.getItem(LS_KEY) ?? '[]');
    } catch {
        return [];
    }
};

const saveToHistory = (term: string) => {
    const prev = getHistory().filter((h) => h !== term);
    localStorage.setItem(LS_KEY, JSON.stringify([term, ...prev].slice(0, MAX_HISTORY)));
};

const SearchProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [results, setResults] = useState<SearchResults | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const debouncedValue = useDebounce(searchTerm, 500);

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    useEffect(() => {
        if (!debouncedValue) {
            setResults(null);
            return;
        }

        const fetchSearch = async () => {
            setIsLoading(true);
            const url = `${process.env.NEXT_PUBLIC_API_URL}/search/storefront?search=${encodeURIComponent(debouncedValue)}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
                setResults(data.data);
                const hasAny = (data.data.products?.length ?? 0) > 0 || (data.data.articles?.length ?? 0) > 0;
                if (hasAny) {
                    saveToHistory(debouncedValue);
                    setHistory(getHistory());
                }
            }
            setIsLoading(false);
        };

        fetchSearch();
    }, [debouncedValue]);

    const removeHistoryItem = (term: string) => {
        const updated = getHistory().filter((h) => h !== term);
        localStorage.setItem(LS_KEY, JSON.stringify(updated));
        setHistory(updated);
    };

    const clearHistory = () => {
        localStorage.removeItem(LS_KEY);
        setHistory([]);
    };

    const hasResults = results && ((results.products?.length ?? 0) > 0 || (results.articles?.length ?? 0) > 0);
    const showDefault = isFocused && !debouncedValue;
    const showResults = isFocused && !!debouncedValue;

    return (
        <div className='relative max-w-[716px] grow'>
            <div className='relative flex items-center'>
                <Input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className='text-body1-regular placeholder:text-tiny rounded-b-0! h-[48px] w-full max-w-full rounded-t-md border-0 bg-gray-100 px-[10px] pr-[36px] pl-[12px] font-normal text-green-600 placeholder-gray-600 focus:border-0 focus-visible:outline-0! active:border-0 md:placeholder:text-sm lg:max-w-[716px]'
                    placeholder='محصول، برند یا دسته مورد نظرتان را جستجو کنید'
                />
                <SearchIcon className='absolute right-[14px] h-[14px] w-[14px] text-gray-500' />
            </div>

            {/* حالت پیش‌فرض: بدون سرچ */}
            {showDefault && (
                <div className='absolute top-10 z-[99] w-full bg-gray-100 p-3'>
                    <hr className='mb-2 text-gray-400' />
                    {history.length > 0 ? (
                        <div>
                            <div className='mb-2 flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    <ClockIcon className='scale-50 transform text-gray-600' fill='none' />
                                    <span className='text-xs font-normal text-gray-700'>آخرین جستجوهای شما</span>
                                </div>
                                <button onClick={clearHistory} className='text-xs text-red-400 hover:text-red-600'>
                                    پاک کردن همه
                                </button>
                            </div>
                            <div className='scrollbar-hide flex gap-2 overflow-x-auto pb-2'>
                                {history.map((term) => (
                                    <div
                                        key={term}
                                        className='flex shrink-0 items-center gap-1 rounded-xl bg-white px-3 py-1'
                                    >
                                        <button
                                            onClick={() => setSearchTerm(term)}
                                            className='text-xs whitespace-nowrap text-gray-700'
                                        >
                                            {term}
                                        </button>
                                        <button
                                            onClick={() => removeHistoryItem(term)}
                                            className='text-xs leading-none text-gray-400 hover:text-red-500'
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className='py-2 text-center text-xs text-gray-400'>جستجویی ثبت نشده</p>
                    )}
                </div>
            )}

            {/* حالت نتایج سرچ */}
            {showResults && (
                <div className='absolute top-10 z-[99] max-h-[400px] w-full overflow-y-auto bg-gray-100 p-3'>
                    <hr className='mb-2 text-gray-400' />

                    {isLoading && <p className='py-4 text-center text-sm text-gray-500'>در حال جستجو...</p>}

                    {!isLoading && !hasResults && (
                        <p className='py-4 text-center text-sm text-gray-500'>نتیجه‌ای یافت نشد</p>
                    )}

                    {!isLoading && results && (results.products?.length ?? 0) > 0 && (
                        <div className='mb-4'>
                            <span className='mb-2 block text-xs font-semibold text-gray-500'>محصولات</span>
                            <div className='flex flex-col gap-2'>
                                {results.products.slice(0, 5).map((product) => {
                                    const primaryImage =
                                        product.gallery.find((g) => g.is_primary) ?? product.gallery[0];
                                    return (
                                        <Link
                                            key={product.id}
                                            href={`/product/${product.slug}`}
                                            className='flex items-center gap-3 rounded-md bg-white p-2 hover:bg-gray-50'
                                        >
                                            {primaryImage && (
                                                <Image
                                                    src={primaryImage.url}
                                                    alt={product.name}
                                                    width={40}
                                                    height={40}
                                                    className='h-10 w-10 rounded object-cover'
                                                />
                                            )}
                                            <span className='line-clamp-1 text-xs text-gray-800'>{product.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {!isLoading && results && (results.articles?.length ?? 0) > 0 && (
                        <div>
                            <span className='mb-2 block text-xs font-semibold text-gray-500'>مقالات</span>
                            <div className='flex flex-col gap-2'>
                                {results.articles.map((article) => (
                                    <Link
                                        key={article.id}
                                        href={`/blog/${article.slug}`}
                                        className='flex items-center gap-3 rounded-md bg-white p-2 hover:bg-gray-50'
                                    >
                                        {article.media_url && (
                                            <Image
                                                src={article.media_url}
                                                alt={article.alt}
                                                width={40}
                                                height={40}
                                                className='h-10 w-10 rounded object-cover'
                                            />
                                        )}
                                        <span className='line-clamp-1 text-xs text-gray-800'>{article.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchProducts;
