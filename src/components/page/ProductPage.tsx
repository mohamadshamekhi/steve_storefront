import ROUTES from '@/constants/routes/routes.constant';
import Brand from '@/config/types/brand.types';
import { categoryDescriptions } from '@/config/data/store-content.data';
import Categories from '@/config/types/categories.types';
import ManualBreadcrumb from '../ui/molecules/Breadcrumbs/ManualBreadcrumb';
import StoreContentSection from '../ui/molecules/StoreContentSection/StoreContentSection';
import Container from '../ui/organisms/Container/Container';
import { ProductProps } from '../ui/organisms/ProductsOrganisms/product.types';
import ProductCategoryTemplate from '../ui/templates/productsTemplate/ProductCategoryTemplate';
import ProductFilterTemplate from '../ui/templates/productsTemplate/ProductFilterTemplate';
import ProductListTemplate from '../ui/templates/productsTemplate/ProductListTemplate';

interface ProductPageProps {
    catSlug?: string;
    data: ProductProps[];
    brands: Brand[];
    categories: Categories[];
    /** set by /product/brand/[brandSlug] - implies a brand_id filter that isn't driven by query state */
    lockedBrand?: { id: string; name: string };
    /** set by /product/price-range/[rangeSlug] - implies a min/max price filter that isn't driven by query state */
    lockedPriceRange?: { min?: number; max?: number; label: string };
    /** breadcrumb + h1 label for a locked-brand/locked-price-range page (catSlug pages derive this from `categories` instead) */
    pageHeading?: string;
    /** overrides the keyword-matched category paragraph below the grid, for locked-brand/locked-price-range pages */
    seoContent?: { title: string; body: string };
}

const ProductPage = ({
    catSlug,
    data,
    brands,
    categories,
    lockedBrand,
    lockedPriceRange,
    pageHeading,
    seoContent
}: ProductPageProps) => {
    const activeCategory = catSlug ? categories.find((c) => c.slug === catSlug) : undefined;
    const categoryName = catSlug ? (activeCategory?.name ?? catSlug) : undefined;

    // preference order: an explicit override (brand/price-range landing pages) >
    // the category's own `description` from the API (once the backend actually
    // fills it in - see CLAUDE.md backend TODO) > the hardcoded keyword-matched
    // paragraph below, kept as a fallback for categories the API doesn't have
    // copy for yet. Shown only on a specific category, never on the unfiltered
    // /product listing, and only when something actually matches - so we never
    // dump every paragraph on one page.
    const matchedDescription =
        seoContent ??
        (activeCategory?.description
            ? { title: categoryName!, body: activeCategory.description }
            : categoryName
              ? categoryDescriptions.find((entry) =>
                    entry.keywords.some((keyword) => categoryName.toLowerCase().includes(keyword.toLowerCase()))
                )
              : undefined);

    const h1 = pageHeading
        ? pageHeading
        : categoryName
          ? `محصولات ${categoryName}`
          : 'لیست محصولات استیو موبایل';

    return (
        <Container>
            <h1 className='sr-only'>{h1}</h1>
            <ManualBreadcrumb
                items={[
                    { label: 'خانه', href: ROUTES.Landing },
                    {
                        label: 'لیست محصولات',
                        href: ROUTES.Products,
                        isCurrent: !catSlug && !pageHeading
                    },
                    ...(catSlug
                        ? [{ label: categories.find((c) => c.slug === catSlug)?.name ?? catSlug, href: `${ROUTES.Products}/category/${catSlug}`, isCurrent: true }]
                        : []),
                    ...(!catSlug && pageHeading ? [{ label: pageHeading, isCurrent: true as const }] : [])
                ]}
            />
            <ProductCategoryTemplate categories={categories} activeCatSlug={catSlug} />

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
                <div className='no-scrollbar hidden h-fit rounded-xl bg-white pb-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] lg:sticky lg:top-4 lg:col-span-3 lg:block lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto'>
                    <ProductFilterTemplate
                        brands={brands}
                        categories={categories}
                        catSlug={catSlug}
                        lockedBrand={lockedBrand}
                        lockedPriceRange={lockedPriceRange}
                    />
                </div>

                <ProductListTemplate
                    data={data}
                    brands={brands}
                    categories={categories}
                    catSlug={catSlug}
                    lockedBrand={lockedBrand}
                    lockedPriceRange={lockedPriceRange}
                />
            </div>

            {matchedDescription && (
                <div className='mt-4'>
                    <StoreContentSection title={matchedDescription.title} body={matchedDescription.body} />
                </div>
            )}
        </Container>
    );
};

export default ProductPage;
