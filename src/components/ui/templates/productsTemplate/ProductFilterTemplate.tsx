"use client";
import { fetcher } from "@/api";
import ApiKeys from "@/api/keys";
import CrossIcon from "@/components/icons/CrossIcon";
import Brand from "@/config/types/brand.types";
import Categories from "@/config/types/categories.types";
import ROUTES from "@/constants/routes/routes.constant";
import { useRouter, useSearchParams } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Switch from "../../atoms/Switch/Switch";
import { Accordion } from "../../organisms/CAccordion/CAccordion";
import ProductRangSlider from "../../organisms/ProductRangSlider/ProductRangSlider";

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
  catSlug?: string;
  /** set on /product/brand/[brandSlug] - that brand is implied by the page itself, so the brand accordion is hidden and this shows as a locked chip instead */
  lockedBrand?: { id: string; name: string };
  /** set on /product/price-range/[rangeSlug] - same idea for the price accordion */
  lockedPriceRange?: { label: string };
}

const sortFilters = [
  { id: "newest", label: "جدید ترین" },
  { id: "oldest", label: "قدیمی ترین" },
  { id: "most_expensive", label: "گران ترین" },
  { id: "least_expensive", label: "ارزان ترین" },
  { id: "most_sold", label: "پر فروش ترین" },
];

const ProductFilterTemplate = ({
  brands,
  categories,
  catSlug,
  lockedBrand,
  lockedPriceRange,
}: ProductFilterTemplateProps) => {
  const [brandId, setBrandId] = useQueryState(
    "brand_id",
    parseAsString.withDefault("")
  );
  const [orderBy, setOrderBy] = useQueryState(
    "order_by",
    parseAsString.withDefault("")
  );
  const [isExist, setIsExist] = useQueryState(
    "is_exist",
    parseAsString.withDefault("")
  );
  const [isSecondHand, setIsSecondHand] = useQueryState(
    "is_second_hand",
    parseAsString.withDefault("")
  );
  const [minPrice, setMinPrice] = useQueryState(
    "min_price",
    parseAsString.withDefault("")
  );
  const [maxPrice, setMaxPrice] = useQueryState(
    "max_price",
    parseAsString.withDefault("")
  );

  const [dynamicFilters, setDynamicFilters] = useState<DynamicFilterOption[]>(
    []
  );
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 500000000,
  });

  // resolve category from slug (for dynamic filters) or from query param (legacy /product page)
  const [categoryIdFromQuery, setCategoryIdFromQuery] = useQueryState(
    "category_id",
    parseAsString.withDefault("")
  );

  const activeCategoryId = useMemo(() => {
    if (catSlug) {
      return categories.find((c) => c.slug === catSlug)?.id ?? "";
    }
    return categoryIdFromQuery;
  }, [catSlug, categories, categoryIdFromQuery]);

  const activeCategory = useMemo(() => {
    return categories.find((c) => c.id === activeCategoryId);
  }, [categories, activeCategoryId]);

  useEffect(() => {
    if (activeCategoryId) {
      const fetchDynamicFilters = async () => {
        try {
          const response = await fetcher(
            `${ApiKeys.GET_CATEGORY_FILTERS}/${activeCategoryId}`,
            "web",
            "GET"
          );
          if (response.success && response.data) {
            const data: DynamicFiltersResponse = response.data;
            setDynamicFilters(data.filter_option || []);
            setPriceRange({
              min: data.min_price || 0,
              max: data.max_price || 500000000,
            });
          }
        } catch (error) {
          console.error("Error fetching dynamic filters:", error);
        }
      };
      fetchDynamicFilters();
    } else {
      setDynamicFilters([]);
      setPriceRange({ min: 0, max: 500000000 });
    }
  }, [activeCategoryId]);

  const handleExistToggle = useCallback(() => {
    setIsExist(isExist === "true" ? null : "true");
  }, [isExist, setIsExist]);

  const handleSecondHandToggle = useCallback(() => {
    setIsSecondHand(isSecondHand === "true" ? null : "true");
  }, [isSecondHand, setIsSecondHand]);

  const handleBrandChange = useCallback(
    (selectedBrandId: string) => {
      setBrandId(brandId === selectedBrandId ? null : selectedBrandId);
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
    (filterKey: string): string => searchParams.get(filterKey) || "",
    [searchParams]
  );

  const handleDynamicFilterChange = useCallback(
    (filterKey: string, optionValue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (getDynamicFilterValue(filterKey) === optionValue) {
        params.delete(filterKey);
      } else {
        params.set(filterKey, optionValue);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [getDynamicFilterValue, searchParams, router]
  );

  const handleRemoveDynamicFilter = useCallback(
    (filterKey: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(filterKey);
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  const selectedBrand = useMemo(
    () => brands?.find((b) => b.id === brandId),
    [brands, brandId]
  );
  const selectedSort = useMemo(
    () => sortFilters.find((f) => f.id === orderBy),
    [orderBy]
  );

  const activeFilters = useMemo(() => {
    const filters: Array<{ label: string; onRemove: () => void }> = [];

    if (activeCategory) {
      filters.push({
        label: `دسته‌بندی ${activeCategory.name}`,
        onRemove: () => {
          if (catSlug) {
            router.push(ROUTES.Products);
          } else {
            setCategoryIdFromQuery(null);
          }
        },
      });
    }

    if (lockedBrand) {
      filters.push({
        label: `برند ${lockedBrand.name}`,
        onRemove: () => router.push(ROUTES.Products),
      });
    } else if (selectedBrand) {
      filters.push({
        label: `برند ${selectedBrand.name}`,
        onRemove: () => setBrandId(null),
      });
    }

    if (lockedPriceRange) {
      filters.push({
        label: `قیمت: ${lockedPriceRange.label}`,
        onRemove: () => router.push(ROUTES.Products),
      });
    }

    if (selectedSort) {
      filters.push({
        label: selectedSort.label,
        onRemove: () => setOrderBy(null),
      });
    }

    if (isExist === "true") {
      filters.push({
        label: "کالاهای موجود",
        onRemove: () => setIsExist(null),
      });
    }

    if (isSecondHand === "true") {
      filters.push({
        label: "کالاهای دست دوم",
        onRemove: () => setIsSecondHand(null),
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
        label: priceLabel,
        onRemove: () => {
          setMinPrice(null);
          setMaxPrice(null);
        },
      });
    }

    dynamicFilters.forEach((filter) => {
      const currentValue = getDynamicFilterValue(filter.key);
      if (currentValue) {
        filters.push({
          label: `${filter.name}: ${currentValue}`,
          onRemove: () => handleRemoveDynamicFilter(filter.key),
        });
      }
    });

    return filters;
  }, [
    activeCategory,
    catSlug,
    lockedBrand,
    lockedPriceRange,
    selectedBrand,
    selectedSort,
    isExist,
    isSecondHand,
    minPrice,
    maxPrice,
    dynamicFilters,
    getDynamicFilterValue,
    router,
    setCategoryIdFromQuery,
    setBrandId,
    setOrderBy,
    setIsExist,
    setIsSecondHand,
    setMinPrice,
    setMaxPrice,
    handleRemoveDynamicFilter,
  ]);

  const clearAllFilters = useCallback(() => {
    const params = new URLSearchParams();
    if (searchParams.has("page_number"))
      params.set("page_number", searchParams.get("page_number")!);
    if (searchParams.has("page_size"))
      params.set("page_size", searchParams.get("page_size")!);

    if (catSlug) {
      router.replace(
        `${ROUTES.Products}/category/${catSlug}?${params.toString()}`,
        { scroll: false }
      );
    } else if (lockedBrand || lockedPriceRange) {
      router.replace(`${ROUTES.Products}?${params.toString()}`, {
        scroll: false,
      });
    } else {
      router.replace(`?${params.toString()}`, { scroll: false });
    }

    setBrandId(null);
    setCategoryIdFromQuery(null);
    setOrderBy(null);
    setIsExist(null);
    setIsSecondHand(null);
    setMinPrice(null);
    setMaxPrice(null);
  }, [
    catSlug,
    lockedBrand,
    lockedPriceRange,
    searchParams,
    router,
    setBrandId,
    setCategoryIdFromQuery,
    setOrderBy,
    setIsExist,
    setIsSecondHand,
    setMinPrice,
    setMaxPrice,
  ]);

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
        id: "static-exist",
        disableLeftIcon: true,
        title: (
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <span>کالاهای موجود</span>
            <Switch
              size="sm"
              variant="primary"
              checked={isExist === "true"}
              onChange={handleExistToggle}
            />
          </div>
        ),
        showIcon: false,
        canToggle: false,
      },
      {
        id: "static-second-hand",
        disableLeftIcon: true,
        title: (
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <span>کالاهای دست دوم</span>
            <Switch
              size="sm"
              variant="primary"
              checked={isSecondHand === "true"}
              onChange={handleSecondHandToggle}
            />
          </div>
        ),
        showIcon: false,
        canToggle: false,
      },
      ...(lockedBrand ? [] : []),
      ...(lockedPriceRange
        ? []
        : [
            {
              id: "static-price",
              title: "محدوده قیمت",
              content: (
                <ProductRangSlider
                  minValue={minPrice}
                  maxValue={maxPrice}
                  onChange={handlePriceChange}
                  rangeMin={priceRange.min}
                  rangeMax={priceRange.max}
                />
              ),
            },
          ]),
    ];

    dynamicFilters.forEach((filter) => {
      const currentValue = getDynamicFilterValue(filter.key);
      items.push({
        id: `item-${filter.key}`,
        title: filter.name,
        content: (
          <div className="flex flex-col gap-2">
            {filter.options.map((option, idx) => (
              <Checkbox
                key={`${filter.key}-${idx}`}
                id={`${filter.key}-${idx}`}
                name={`${filter.key}-${idx}`}
                label={option}
                checked={currentValue === option}
                onChange={() => handleDynamicFilterChange(filter.key, option)}
                className="flex-row-reverse justify-between"
              />
            ))}
          </div>
        ),
      });
    });

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
    handleDynamicFilterChange,
    lockedBrand,
    lockedPriceRange,
  ]);

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <span className="text-base font-bold text-gray-800">فیلترها</span>
        <Button
          variant="text"
          color="secondary"
          className="p-0! text-sm!"
          onClick={clearAllFilters}
          disabled={activeFilters.length === 0}
        >
          حذف همه
        </Button>
      </div>

      {activeFilters.length > 0 && (
        <ul className="flex flex-wrap items-center gap-2 px-5 pt-4">
          {activeFilters.map((filter, index) => (
            <li
              key={index}
              className="text-caption1-regular rounded-md bg-gray-100 px-3 py-1 text-gray-800"
            >
              <button
                onClick={filter.onRemove}
                className="flex cursor-pointer items-center justify-between gap-2"
              >
                <span>{filter.label}</span>
                <CrossIcon className="h-2 w-2 text-gray-500" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Accordion defaultActiveKey="0" type="multiple">
        {accordionItems.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={item.id}>
            <Accordion.Header
              eventKey={index.toString()}
              showIcon={item.showIcon}
              canToggle={item.canToggle}
            >
              <div>{item.title}</div>
            </Accordion.Header>
            {item.content && (
              <Accordion.Body eventKey={index.toString()}>
                {item.content}
              </Accordion.Body>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default ProductFilterTemplate;
