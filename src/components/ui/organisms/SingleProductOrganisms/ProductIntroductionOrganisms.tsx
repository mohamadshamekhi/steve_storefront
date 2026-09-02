import { SingleProductItem } from '@/models/product.model';
import { sanitizeHtml } from '@/utils/html.util';

const ProductIntroductionOrganisms = ({ product }: { product: SingleProductItem }) => {
    const cleanHtml = sanitizeHtml(product.description);
    return (
        <div
            className='rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6'
            id='introduction'
        >
            <h3 className='mb-4 text-base font-bold text-gray-800'>معرفی</h3>
            <div
                className='prose-product text-sm leading-8 text-gray-700'
                dangerouslySetInnerHTML={{ __html: cleanHtml }}
            ></div>
        </div>
    );
};

export default ProductIntroductionOrganisms;

