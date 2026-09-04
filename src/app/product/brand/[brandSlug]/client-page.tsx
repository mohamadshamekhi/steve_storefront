'use client';
import ProductPage from '@/components/page/ProductPage';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';

interface ClientPageProps {
    brand: { id: string; name: string };
    seoContent: { title: string; body: string };
    pageHeading: string;
    data: ProductProps[];
    brands: Brand[];
    categories: Categories[];
}

const ClientPage = ({ brand, seoContent, pageHeading, data, brands, categories }: ClientPageProps) => {
    return (
        <Layout>
            <ProductPage
                lockedBrand={brand}
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
