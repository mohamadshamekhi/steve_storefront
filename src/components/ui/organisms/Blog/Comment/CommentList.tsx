import { Comment } from '@/models/common.model';
import CommentItem from './CommentItem';

interface CommentListProps {
    comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
    if (!comments || comments.length === 0) {
        return (
            <div className='col-span-12 rounded-md bg-white p-6 md:col-span-8 lg:col-span-9' id='comments'>
                <p className='text-center text-gray-500'>
                    هنوز دیدگاهی ثبت نشده است. اولین نفری باشید که دیدگاه می‌دهد!
                </p>
            </div>
        );
    }

    return (
        <div className='col-span-12 rounded-md bg-white p-6 md:col-span-8 lg:col-span-9' id='comments'>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className='mb-4'>
                        <CommentItem comment={comment} hasReplay={comment.children && comment.children.length > 0} />
                        {comment.children && comment.children.length > 0 && (
                            <ul className='mt-4 grid grid-cols-12'>
                                {comment.children.map((childComment) => (
                                    <li key={childComment.id} className='col-span-10 col-start-3 mb-4'>
                                        <CommentItem comment={childComment} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentList;
