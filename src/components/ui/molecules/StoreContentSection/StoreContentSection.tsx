interface StoreContentSectionProps {
    title: string;
    body: string;
    /** heading level - defaults to h2 since this always sits below the page's own h1 */
    as?: 'h2' | 'h3';
}

/**
 * A small, single on-page text block (title + paragraph). Used for the
 * descriptive copy that used to be duplicated identically in the site
 * footer on every page - now shown once, on the one page it's actually
 * relevant to (see src/config/data/store-content.data.ts).
 */
const StoreContentSection = ({ title, body, as = 'h2' }: StoreContentSectionProps) => {
    const Heading = as;

    return (
        <section className='rounded-md bg-white p-6'>
            <Heading className='mb-3 text-base font-semibold text-gray-800 md:text-lg'>{title}</Heading>
            <p className='text-sm leading-8 text-gray-600'>{body}</p>
        </section>
    );
};

export default StoreContentSection;
