import RecommendedProductOrganisms from '../../organisms/Landing/RecommendedProductOrganisms/RecommendedProductOrganisms';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

interface CategoryProducts {
    title: string;
    subtitle: string;
    products: ProductProps[];
    url: string;
    categoryId: string;
}

const RecommendedProductsTemplate = ({ categoryProducts }: { categoryProducts: CategoryProducts[] }) => {
    // Filter out categories with no products
    const filteredProducts = categoryProducts.filter((cat) => cat.products.length > 0);

    if (filteredProducts.length === 0) {
        return null;
    }

    return (
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
            <RecommendedProductOrganisms recommendedProducts={filteredProducts} />
        </section>
    );
};

export default RecommendedProductsTemplate;
