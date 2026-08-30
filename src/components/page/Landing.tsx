'use client';
import { homeIntro, homeOutro } from '@/config/data/store-content.data';
import Blog from '@/config/types/blog.types';
import Brand from '@/config/types/brand.types';
import Categories from '@/config/types/categories.types';
import { Banner } from '@/models/common.model';
import StoreContentSection from '../ui/molecules/StoreContentSection/StoreContentSection';
import Container from '../ui/organisms/Container/Container';
import BannerOrganisms from '../ui/organisms/Landing/BannerOrganisms/BannerOrganisms';
import RepairBannerOrganisms from '../ui/organisms/Landing/RepairBannerOrganisms/RepairBannerOrganisms';
import { ProductProps } from '../ui/organisms/ProductsOrganisms/product.types';
import AmazingSaleTemplate from '../ui/templates/landing/AmazingSaleTemplate';
import AuctionTemplate from '../ui/templates/landing/AuctionTemplate';
import BestSellersTemplate from '../ui/templates/landing/BestSellersTemplate';
import BrandTemplate from '../ui/templates/landing/BrandTemplate';
import CategoriesTemplate from '../ui/templates/landing/CategoriesTemplate';
import HeroTemplate from '../ui/templates/landing/HeroTemplate';
import PartnerCtaTemplate from '../ui/templates/landing/PartnerCtaTemplate';
// import OfferProductTemplate from '../ui/templates/landing/OfferProductTemplate';
import RecommendedProductsTemplate from '../ui/templates/landing/RecommendedProductsTemplate';
import SecondHandTemplate from '../ui/templates/landing/SecondHandProductTemplate';
import BlogTemplate from '../ui/templates/landing/‌BlogTemplate';

interface CategoryProducts {
    title: string;
    subtitle: string;
    products: ProductProps[];
    url: string;
    categoryId: string;
}

const Landing = ({
    brands,
    categories,
    articles,
    discountProduct,
    banners,
    categoryProducts,
    secondHandProducts,
    bestSellerProduct,
    productsWithAutoDiscount
}: {
    brands: Brand[];
    categories: Categories[];
    articles: Blog[];
    discountProduct: ProductProps[];
    banners: Banner[];
    categoryProducts: CategoryProducts[];
    secondHandProducts: ProductProps[];
    bestSellerProduct: ProductProps[];
    productsWithAutoDiscount: ProductProps[];
}) => {
    return (
        <main>
            <Container className='mt-5 space-y-16 md:mt-10'>
                <h1 className='sr-only'>
                    استیو موبایل | خرید آنلاین گوشی موبایل، لوازم جانبی و کالای دیجیتال
                </h1>
                <HeroTemplate discountProduct={discountProduct} banners={banners} />
                <CategoriesTemplate categories={categories} />
                <AmazingSaleTemplate discountProduct={discountProduct} />
                <BannerOrganisms banners={banners} />
                {/* -> SecondHandTemplate */}
                {secondHandProducts?.length > 0 && <SecondHandTemplate secondHandProducts={secondHandProducts} />}
                <BrandTemplate brands={brands} />
                <BestSellersTemplate products={bestSellerProduct} />
                <RepairBannerOrganisms banners={banners} />
                <RecommendedProductsTemplate categoryProducts={categoryProducts} />
                {/* -> AuctionTemplate */}
                {productsWithAutoDiscount?.length > 0 && <AuctionTemplate products={productsWithAutoDiscount} />}
                {/* <OfferProductTemplate /> */}
                {/* -> BlogTemplate */}
                {articles?.length > 0 && <BlogTemplate articles={articles} />}

                <PartnerCtaTemplate />

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <StoreContentSection title={homeIntro.title} body={homeIntro.body} />
                    <StoreContentSection title={homeOutro.title} body={homeOutro.body} />
                </div>
            </Container>
        </main>
    );
};

export default Landing;
