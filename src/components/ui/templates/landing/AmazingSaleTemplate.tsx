import AmazingSaleProductsOrganisms from '../../organisms/Landing/AmazingSaleOrganisms/AmazingSaleProductsOrganisms';
import AmazingSaleTimerOrganisms from '../../organisms/Landing/AmazingSaleOrganisms/AmazingSaleTimerOrganisms';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

const AmazingSaleTemplate = ({ discountProduct }: { discountProduct: ProductProps[] }) => {
    return (
        <section
            id='amazingSales'
            aria-label='شگفت‌انگیزهای استیو موبایل'
            className="bg-secondary-500 relative rounded-md bg-[url('/images/_general/bg/amazing-sale-banner.png')] bg-size-[400px] bg-repeat"
        >
            <h2 className='sr-only'>شگفت‌انگیزها</h2>
            {discountProduct && discountProduct.length > 0 && (
                <div className='grid grid-cols-1 pt-5 lg:grid-cols-10 lg:pt-0'>
                    <AmazingSaleTimerOrganisms />
                    <AmazingSaleProductsOrganisms discountProduct={discountProduct} />
                </div>
            )}
        </section>
    );
};

export default AmazingSaleTemplate;
