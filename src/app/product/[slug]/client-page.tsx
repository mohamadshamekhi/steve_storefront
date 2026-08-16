import SingleProductPage from '@/components/page/SingleProductPage';
import Layout from '@/components/ui/organisms/Container/Layout/Layout';
import { RelatedProduct } from '@/components/ui/organisms/SingleProductOrganisms/ProductRelatedOrganisms';
import { Comment } from '@/models/common.model';
import { SingleProductItem } from '@/models/product.model';

const clientPage = ({
    slug,
    product,
    comments,
    relatedProducts
}: {
    slug: string;
    product: SingleProductItem;
    comments: Comment[];
    relatedProducts: RelatedProduct[];
}) => {
    return (
        <Layout>
            <SingleProductPage slug={slug} product={product} comments={comments} relatedProducts={relatedProducts} />
        </Layout>
    );
};

export default clientPage;

