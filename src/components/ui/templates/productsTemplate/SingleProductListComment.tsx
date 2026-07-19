import { Comment } from '@/models/common.model';
import CommentItem from '../../organisms/SingleProductOrganisms/Comment/CommentItem';

const SingleProductListComment = ({ comments }: { comments: Comment[] }) => {
    if (comments.length === 0) {
        return (
            <div className='col-span-12 rounded-md bg-white p-2 sm:p-6 md:col-span-8 lg:col-span-8' id='comments'>
                <p className='text-center text-gray-500'>هنوز دیدگاهی ثبت نشده است.</p>
            </div>
        );
    }

    return (
        <div className='col-span-12 rounded-md bg-white p-2 sm:p-6 md:col-span-8 lg:col-span-8' id='comments'>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li className='mb-4 relative z-10' key={comment.id}>
                            <CommentItem comment={comment} hasReplay={comment.children.length > 0} />
                            {comment.children.length > 0 && (
                                <ul className='mt-4 grid grid-cols-12'>
                                    {comment.children.map((reply) => (
                                        <li className='col-span-10 col-start-3 mb-4' key={reply.id}>
                                            <CommentItem comment={reply} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SingleProductListComment;

