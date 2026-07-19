import { ReactNode } from 'react';
import Button from '../../atoms/Button/Button';

interface Props {
    children: ReactNode;
    onSubmit: () => void;
    loading?: boolean;
}

export default function AuthFormWrapper({ children, onSubmit, loading = false }: Props) {
    return (
        <form onSubmit={onSubmit} className='flex flex-col space-y-4'>
            {children}
            <Button
                type='submit'
                disabled={loading}
                className={`flex items-center justify-center rounded-lg py-2 disabled:cursor-not-allowed`}
                color='primary'
                variant='fill'
            >
                {loading ? 'لطفاً صبر کنید...' : 'تایید'}
            </Button>
        </form>
    );
}
