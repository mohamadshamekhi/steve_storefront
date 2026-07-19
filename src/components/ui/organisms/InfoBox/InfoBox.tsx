import cn from '@/config/utilities/cn';
import Benefit from './info-box.types';

const InfoBox = ({ info }: { info: Benefit }) => {
    return (
        <div className={cn('rounded-lg border bg-white p-4 md:p-6', info.className)}>
            <div className='flex items-center gap-5'>
                {info.Icon && <info.Icon className={cn(info.iconClassName)} {...info.iconProps} />}
                <h3 className='text-subtitle2-bold'>{info.title}</h3>
            </div>
            <div className='text-body1-regular mt-4 leading-9'>{info.description}</div>
        </div>
    );
};

export default InfoBox;
