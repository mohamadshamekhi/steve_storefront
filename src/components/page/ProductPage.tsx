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
}

const ProductPage = ({ catSlug, data, brands, categories }: ProductPageProps) => {
    const categoryName = catSlug ? (categories.find((c) => c.slug === catSlug)?.name ?? catSlug) : undefined;

    // only shown on a specific category (not the unfiltered /product listing),
    // and only when its keywords actually match this category's real name -
    // so we never dump every paragraph on one page
    const matchedDescription = categoryName
        ? categoryDescriptions.find((entry) =>
              entry.keywords.some((keyword) => categoryName.toLowerCase().includes(keyword.toLowerCase()))
          )
        : undefined;

    return (
        <Container>
            <h1 className='sr-only'>{categoryName ? `محصولات ${categoryName}` : 'لیست محصولات استیو موبایل'}</h1>
            <ManualBreadcrumb
                items={[
                    { label: 'خانه', href: ROUTES.Landing },
                    {
                        label: 'لیست محصولات',
                        href: ROUTES.Products,
                        isCurrent: !catSlug
                    },
                    ...(catSlug
                        ? [{ label: categories.find((c) => c.slug === catSlug)?.name ?? catSlug, href: `${ROUTES.Products}/category/${catSlug}`, isCurrent: true }]
                        : [])
                ]}
            />
            <ProductCategoryTemplate categories={categories} activeCatSlug={catSlug} />

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
                <div className='hidden h-fit rounded-md bg-white pb-10 lg:col-span-3 lg:block'>
                    <ProductFilterTemplate brands={brands} categories={categories} catSlug={catSlug} />
                </div>

                <ProductListTemplate data={data} brands={brands} categories={categories} catSlug={catSlug} />
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
