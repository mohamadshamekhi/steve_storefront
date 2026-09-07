"use client";

import ApiKeys from "@/api/keys";
import Categories from "@/config/types/categories.types";
import { useState } from "react";
import useSWR from "swr";

const CACHE_KEY = "steve_categories_cache";
const CACHE_TTL = 12 * 60 * 60 * 1000; // 12h

interface CachePayload {
  ts: number;
  data: Categories[];
}

const readCache = (): Categories[] | undefined => {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed?.ts || Date.now() - parsed.ts > CACHE_TTL) return undefined;
    return Array.isArray(parsed.data) ? parsed.data : undefined;
  } catch {
    return undefined;
  }
};

const writeCache = (data: Categories[]) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ ts: Date.now(), data } satisfies CachePayload)
    );
  } catch {
    /* quota / private mode - fine to skip */
  }
};

const fetchCategories = async (path: string): Promise<Categories[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
  const json = await res.json();
  const categories: Categories[] = json?.data?.categories ?? [];
  writeCache(categories);
  return categories;
};

/**
 * Shared client-side source of the storefront category list.
 *
 * The list is fetched at most once per session (SWR keeps it in memory and is
 * told never to revalidate) and is additionally persisted to localStorage for
 * 12h, so reopening the menu - or reloading the page - costs no request until
 * the cache expires.
 */
const useCategories = () => {
  const [cached] = useState(readCache);

  const { data, isLoading, error } = useSWR(
    ApiKeys.GET_ALL_CATEGORY,
    fetchCategories,
    {
      fallbackData: cached,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: CACHE_TTL,
    }
  );

  const categories = data ?? [];

  return {
    categories,
    rootCategories: categories,
    isLoading: isLoading && categories.length === 0,
    error,
  };
};

export default useCategories;
