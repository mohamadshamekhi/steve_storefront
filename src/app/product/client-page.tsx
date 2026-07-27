'use client';
import ProductPage from '@/components/page/ProductPage';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { ProductProps } from '@/components/ui/organisms/ProductsOrganisms/product.types';

interface ClientPageProps {
    data: ProductProps[];
    brands: Brand[];
    categories: Categories[];
}

const ClientPage = ({ data, brands, categories }: ClientPageProps) => {
    return (
        <Layout>
            <ProductPage data={data} brands={brands} categories={categories} />
        </Layout>
    );
};

export default ClientPage;
