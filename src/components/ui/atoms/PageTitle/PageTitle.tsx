import TitleIcon from '@/components/icons/TitleIcons/TitleIcon';

const PageTitle = ({ title }: { title: string }) => {
    return (
        <h1 className="before:bg-primary-600 flex text-center before:absolute before:top-5 before:right-10 before:z-50 before:block before:h-[17px] before:w-[17px] before:rounded-full before:content-[''] before:md:top-7">
            <TitleIcon className='absolute -top-[11px] z-10 max-w-[200px] md:top-0 md:max-w-full' />
            <span className='absolute top-[15px] right-[77px] z-20 text-center text-xl font-semibold text-gray-800 md:text-[32px]'>
                {title}
            </span>
        </h1>
    );
};

export default PageTitle;
