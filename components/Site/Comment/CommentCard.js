export const CommentCard = ({ comment }) => {
  const date = new Date(comment.created_time);
  return (
    <div key={comment.id} className='flex flex-col space-y-2'>
      {/* display user information */}
      <div className='flex justify-start items-end space-x-4'>
        <img
          src={comment.avatar}
          alt='avatar'
          className='w-10 h-10 rounded-full'
        />
        <div className='grow flex justify-between items-end'>
          <span className='font-semibold '>{comment.name}</span>
          <span className='text-sm text-rich-gray dark:text-rich-gray-dark'>{`${date.toLocaleString(
            'en-US',
            {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            }
          )}`}</span>
        </div>
      </div>
      {/* comment box */}
      <div
        className='w-full bg-rich-gray_background dark:bg-rich-gray_background-dark
                py-2 px-3 rounded'>
        <span className=' break-words'>{comment.content}</span>
      </div>
    </div>
  );
};
