import LayerIcon from '@/components/icons/blog/LayerIcon';

const filters = [
    { id: 'editor', label: 'منتخب سردبیر' },
    { id: 'oldest', label: 'قدیمی‌ترین' },
    { id: 'mostDiscussed', label: 'پربحث‌ترین' },
    { id: 'latest', label: 'جدیدترین' },
    { id: 'mostViewed', label: 'پربازدیدترین' }
];

type Props = {
    activeFilter: string;
    onChange: (filterId: string) => void;
};

const FilterTabs = ({ activeFilter, onChange }: Props) => {
    return (
        <div className='flex flex-wrap rounded-md bg-white p-4'>
            <div className='ml-8 flex items-center'>
                <LayerIcon className='text-primary-700 ml-2.5' />
                <span className='text-sm text-black'>مرتب سازی بر اساس :</span>
            </div>

            <div className='space-x-7'>
                {filters.map((filter) => (
                    <button
                        type='button'
                        key={filter.id}
                        onClick={() => onChange(filter.id)}
                        className={`min-w-[60px] cursor-pointer text-sm font-normal transition-all ${
                            activeFilter === filter.id
                                ? 'font-semibold text-gray-600'
                                : 'text-gray-500 hover:font-semibold hover:text-gray-600'
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default FilterTabs;
