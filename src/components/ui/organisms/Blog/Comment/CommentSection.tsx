import { Comment } from '@/models/common.model';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

interface CommentSectionProps {
    articleId: string;
    comments: Comment[];
}

function CommentSection({ articleId, comments }: CommentSectionProps) {
    return (
        <div className='mb-28 grid grid-cols-12 items-start gap-4'>
            <CommentForm articleId={articleId} />
            <CommentList comments={comments} />
        </div>
    );
}

export default CommentSection;
