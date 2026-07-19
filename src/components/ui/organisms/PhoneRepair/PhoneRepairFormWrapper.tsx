import { ReactNode } from 'react';
import Button from '../../atoms/Button/Button';

interface Props {
    children: ReactNode;
    onSubmit: () => void;
    loading?: boolean;
}

const PhoneRepairFormWrapper = ({ children, onSubmit, loading = false }: Props) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <Button
                type='submit'
                disabled={loading}
                loading={loading}
                className={`mt-8 flex w-full items-center justify-center rounded-lg !py-2.5 disabled:cursor-not-allowed`}
                color='primary'
                variant='fill'
            >
                ارسال درخواست
            </Button>
        </form>
    );
};

export default PhoneRepairFormWrapper;
