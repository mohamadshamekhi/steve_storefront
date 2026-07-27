import CommentItem from './CommentItem';

function CommentList() {
    return (
        <div className='col-span-12 rounded-md bg-white p-6 md:col-span-8 lg:col-span-9' id='comments'>
            <ul>
                <li className='mb-4'>
                    <CommentItem hasReplay />
                    <ul className='mt-4 grid grid-cols-12'>
                        <li className='col-span-10 col-start-3 mb-4'>
                            <CommentItem />
                        </li>
                    </ul>
                </li>
                <li className='mb-4'>
                    <CommentItem hasReplay />
                    <ul className='mt-4 grid grid-cols-12'>
                        <li className='col-span-10 col-start-3 mb-4'>
                            <CommentItem />
                        </li>
                        <li className='col-span-10 col-start-3 mb-4'>
                            <CommentItem />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default CommentList;
