import ROUTES from '@/constants/routes/routes.constant';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import ManualBreadcrumb from '../ui/molecules/Breadcrumbs/ManualBreadcrumb';
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

    return (
        <Container>
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
        </Container>
    );
};

export default ProductPage;
