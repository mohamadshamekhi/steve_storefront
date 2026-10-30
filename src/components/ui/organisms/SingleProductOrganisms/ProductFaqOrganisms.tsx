import { ProductFAQ } from '@/models/product.model';

/**
 * سوالات متداول محصول. باید روی صفحه دیده شود تا داده‌ی ساختاریافته‌ی FAQPage
 * (در page.tsx) معتبر باشد. از <details> بومی استفاده شده تا بدون JS هم کار کند.
 */
const ProductFaqOrganisms = ({ faq }: { faq?: ProductFAQ[] }) => {
    const items = faq?.filter((f) => f.question?.trim() && f.answer?.trim()) ?? [];
    if (items.length === 0) return null;

    return (
        <div className='rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:p-6' id='faq'>
            <h3 className='mb-4 text-base font-bold text-gray-800'>سوالات متداول</h3>
            <div className='divide-y divide-gray-100'>
                {items.map((item, index) => (
                    <details key={index} className='group py-3 first:pt-0 last:pb-0'>
                        <summary className='flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-gray-800 [&::-webkit-details-marker]:hidden'>
                            <span>{item.question}</span>
                            <span
                                aria-hidden
                                className='bg-primary-50 text-primary-600 grid size-6 shrink-0 place-items-center rounded-full text-base leading-none transition-transform group-open:rotate-45'
                            >
                                +
                            </span>
                        </summary>
                        <p className='mt-2 text-sm leading-7 whitespace-pre-line text-gray-600'>{item.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default ProductFaqOrganisms;
