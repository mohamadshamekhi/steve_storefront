'use client';
import ProductPage from '@/components/page/ProductPage';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';

interface ClientPageProps {
    priceRange: { min?: number; max?: number; label: string };
    seoContent: { title: string; body: string };
    pageHeading: string;
    data: ProductProps[];
    brands: Brand[];
    categories: Categories[];
}

const ClientPage = ({ priceRange, seoContent, pageHeading, data, brands, categories }: ClientPageProps) => {
    return (
        <Layout>
            <ProductPage
                lockedPriceRange={priceRange}
                seoContent={seoContent}
                pageHeading={pageHeading}
                data={data}
                brands={brands}
                categories={categories}
            />
        </Layout>
    );
};

export default ClientPage;
