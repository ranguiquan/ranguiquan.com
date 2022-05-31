import { PostAuthor } from './PostAuthor';
import { PostTags } from './PostTags';
import { PostTitle } from './PostTitle';
import { PostCover } from './PostCover';
import { PostTime } from './PostTime';

export const PostHead = ({
  name,
  created_time,
  last_edited_time,
  icon,
  cover,
  tags,
  description,
  author,
  date,
  isDateHidden,
}) => {
  return (
    <div
      className='w-full space-y-2 border-b-2 pb-4 
    border-rich-gray_background dark:border-rich-gray_background-dark'
    >
      {cover && <PostCover cover={cover} />}
      <PostTitle icon={icon} name={name} />
      <div className=' space-x-4 flex justify-center font-semibold pt-2'>
        {!isDateHidden && <PostTime date={new Date(date)} />}
        <PostAuthor author={author} />
      </div>
      {tags && <PostTags tags={tags} />}
    </div>
  );
};
