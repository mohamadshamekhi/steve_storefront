import { SingleProductItem } from '@/models/product.model';
import { sanitizeHtml } from '@/utils/html.util';

const ProductIntroductionOrganisms = ({ product }: { product: SingleProductItem }) => {
    const cleanHtml = sanitizeHtml(product.description);
    return (
        <div className='rounded-md bg-white p-6' id='introduction'>
            <h3 className='mb-4 font-semibold'>معرفی</h3>
            <div
                className='text-xs-plus leading-[40px] text-gray-700'
                dangerouslySetInnerHTML={{ __html: cleanHtml }}
            ></div>
        </div>
    );
};

export default ProductIntroductionOrganisms;

