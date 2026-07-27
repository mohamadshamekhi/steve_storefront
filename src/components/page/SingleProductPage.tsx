import { Comment } from '@/models/common.model';
import { SingleProductItem } from '@/models/product.model';
import Container from '../ui/organisms/Container/Container';
import SingleProductTemplate from '../ui/templates/productsTemplate/SingleProductTemplate';
import { RelatedProduct } from '../ui/organisms/SingleProductOrganisms/ProductRelatedOrganisms';

const SingleProductPage = ({
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
        <Container>
            <SingleProductTemplate
                slug={slug}
                product={product}
                comments={comments}
                relatedProducts={relatedProducts}
            />
        </Container>
    );
};

export default SingleProductPage;

