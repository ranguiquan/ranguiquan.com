import { PostAuthor } from './PostAuthor';
import { PostTags } from './PostTags';
import { PostTitle } from './PostTitle';
import { PostCover } from './PostCover';

export const PostHead = ({
  name,
  created_time,
  last_edited_time,
  icon,
  cover,
  tags,
  description,
  author,
  date
}) => {
  return (
    <div
      className='w-full space-y-2 border-b-2 pb-4 
    border-rich-gray_background dark:border-rich-gray_background-dark'>
      {cover && <PostCover cover={cover} />}
      <PostTitle icon={icon} name={name} />
      <PostAuthor author={author} date={new Date(date)} />
      {tags && <PostTags tags={tags} />}
    </div>
  );
};
