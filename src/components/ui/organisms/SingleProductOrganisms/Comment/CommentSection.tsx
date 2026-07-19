import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentSection() {
    return (
        <div className='mb-28 grid grid-cols-12 items-start gap-4'>
            <CommentForm />
            <CommentList />
        </div>
    );
}

export default CommentSection;
