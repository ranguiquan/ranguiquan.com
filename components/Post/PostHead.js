import { PostTags } from './PostTags';
import { PostTitle } from './PostTitle';
import { PostCover } from './PostCover';

const PostHead = ({
  name,
  created_time,
  last_edited_time,
  icon,
  cover,
  tags,
  description,
  author,
}) => {
  const date = new Date(created_time);
  return (
    <div className='w-full space-y-2 border-b-gray-500 border-b-2 pb-4'>
      <PostCover cover={cover} />
      <PostTitle icon={icon} name={name} />
      <div className=' space-x-2 flex  md:justify-end justify-center font-semibold'>
        <span>{author}</span>
        <span>{date.toLocaleDateString()}</span>
      </div>
      <PostTags tags={tags} />
    </div>
  );
};

export default PostHead;
