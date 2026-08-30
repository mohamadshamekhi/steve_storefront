import CellPhoneIcon from '@/components/icons/CellPhoneIcon';
import ChevronLeft from '@/components/icons/ChevronLeft';
import CrossIcon from '@/components/icons/CrossIcon';
import ROUTES from '@/constants/routes/routes.constant';
import { useMenuStore } from '@/state/stores/menu';
import Link from 'next/link';
import Button from '../../atoms/Button/Button';
import { Accordion } from '../../organisms/CAccordion/CAccordion';

const MegaMenuMobile = () => {
    const { toggle } = useMenuStore();

    const categories = Array.from({ length: 20 }, () => ({
        label: 'موبایل',
        href: '#',
        icon: <CellPhoneIcon className='mb-1 w-4 text-gray-500' />
    }));

    const categoryItem = Array.from({ length: 20 }, () => ({
        title: 'برند های مختلف گوشی',
        id: `id-cat-${Math.random().toString(36).substring(2)}`,
        content: 'exmpty'
    }));
    return (
        <div className='grid h-full grid-cols-12 pt-2 pb-[80px]'>
            <div className='bg-primary-100 col-span-3 h-full'>
                <ul className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent h-full max-h-[800px] overflow-y-auto'>
                    {categories.map((item, index) => {
                        return (
                            <li
                                key={`${item.label}-${index}`}
                                className='flex flex-col items-center border-b border-gray-300 px-4 py-7 text-base font-normal text-gray-600 transition ease-in hover:bg-white hover:font-medium hover:text-gray-800'
                            >
                                {item.icon}
                                <span className='font-medium text-gray-600'>{item.label}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent col-span-9 max-h-[800px] overflow-y-auto p-6'>
                <div className='mb-8 flex items-center justify-between'>
                    <Link href='#' className='text-primary-600 flex items-center'>
                        <span className='text-sm font-semibold'>همه محصولات موبایل</span>
                        <ChevronLeft className='mr-1.5 h-2 w-2' />
                    </Link>
                    <Button variant='light' onClick={() => toggle('mobile')}>
                        <CrossIcon />
                    </Button>
                </div>
                <div className='mb-4'>
                    <Link
                        href={ROUTES.PartnerSales}
                        onClick={() => toggle('mobile')}
                        className='text-primary-600 flex items-center py-2 text-sm font-semibold'
                    >
                        <span>فروش همکاری</span>
                        <ChevronLeft className='mr-1.5 h-2 w-2' />
                    </Link>
                    <Link
                        href={ROUTES.FAQ}
                        onClick={() => toggle('mobile')}
                        className='text-primary-600 flex items-center py-2 text-sm font-semibold'
                    >
                        <span>سوالات متداول</span>
                        <ChevronLeft className='mr-1.5 h-2 w-2' />
                    </Link>
                </div>
                <div>
                    <Accordion defaultActiveKey='0' type='single'>
                        {categoryItem.map((item, index) => (
                            <Accordion.Item eventKey={index.toString()} key={item.id}>
                                <Accordion.Header eventKey={index.toString()}>
                                    <div className='text-sm-plus font-semibold text-gray-800'> {item.title}</div>
                                </Accordion.Header>
                                {item.content && (
                                    <Accordion.Body eventKey={index.toString()}>{item.content}</Accordion.Body>
                                )}
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default MegaMenuMobile;
