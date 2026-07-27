import EllipseIcon from '@/components/icons/blog/EllipseIcon';
import ReplayIndicator from '@/components/icons/blog/ReplayIndicator';
import { Comment } from '@/models/common.model';

interface IProps {
    comment?: Comment;
    hasReplay?: boolean;
}

function CommentItem({ comment, hasReplay }: IProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    if (!comment) {
        return (
            <div className='bg-primary-50 relative rounded-md p-4 sm:p-6'>
                <p className='text-gray-500'>در حال بارگذاری...</p>
            </div>
        );
    }

    return (
        <div className='bg-primary-50 relative rounded-md p-4 sm:p-6'>
            {hasReplay && (
                <ReplayIndicator className='absolute right-0.5 -bottom-4/12 z-0 max-w-[90px] sm:-bottom-[110px] md:right-5 md:-bottom-4/12 lg:-bottom-[110px] lg:max-w-[140px]' />
            )}

            <div className='mb-6 flex items-center'>
                <span className='text-xs-plus ml-4 font-semibold text-gray-800'>
                    {comment.commenter_name || 'کاربر'}
                </span>

                <span className='flex items-center text-xs font-normal text-gray-800'>
                    <EllipseIcon className='text-primary-200 ml-2' />
                    {formatDate(comment.created_at)}
                </span>
            </div>

            <p className='text-xs-plus mb-4 text-justify leading-8 font-normal text-gray-800'>{comment.body}</p>

            <div className='flex flex-wrap items-center justify-between gap-3'>
                <div></div>

                <div className='flex items-center space-x-2'>
                    {/* <Button
                        className='bg-white! text-xs! font-normal! text-gray-500!'
                        icon={<ReplayIcon className='text-primary-400' />}
                        iconPosition='end'
                    >
                        2
                    </Button> */}
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
