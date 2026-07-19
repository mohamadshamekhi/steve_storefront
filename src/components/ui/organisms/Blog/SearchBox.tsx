import MagnifierIcon from '@/components/icons/blog/MagnifierIcon';
import Input from '../../atoms/Input/Input';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

const SearchBox = ({ title, onInput }: IProps) => {
    return (
        <div className='relative h-full w-full'>
            <MagnifierIcon className='text-primary-700 absolute top-1/2 right-5 h-[17px] w-[17px] -translate-y-1/2 transform' />

            <Input
                className='rounded-m h-full max-w-full border-0 bg-white pr-12 text-base placeholder-black placeholder:text-base placeholder:font-normal'
                inputSize='lg'
                placeholder='جستجوی مطلب'
                type='search'
                defaultValue={title}
                onInput={onInput}
            />
        </div>
    );
};

export default SearchBox;
