import { Banner } from '@/models/common.model';
import HeroBannerOrganisms from '../../organisms/Landing/HeroOrganisms/HeroBannerOrganisms';
import HeroProductOrganisms from '../../organisms/Landing/HeroOrganisms/HeroProductOrganisms';
import { ProductProps } from '../../organisms/ProductsOrganisms/product.types';

const HeroTemplate = ({ discountProduct, banners }: { discountProduct: ProductProps[]; banners: Banner[] }) => {
    const hasDiscountProducts = discountProduct?.length > 0;

    return (
        <section
            className={`grid grid-cols-1 gap-2 ${hasDiscountProducts ? 'lg:grid-cols-12 lg:gap-4' : ''}`}
        >
            <HeroBannerOrganisms fullWidth={!hasDiscountProducts} banners={banners} />
            {hasDiscountProducts && <HeroProductOrganisms products={discountProduct} />}
        </section>
    );
};

export default HeroTemplate;
