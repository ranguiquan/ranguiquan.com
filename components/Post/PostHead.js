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
}) => {
  const date = new Date(created_time);
  return (
    <div className='w-full space-y-2 border-b-2 pb-4 border-b-rich-gray_background'>
      {cover && <PostCover cover={cover} />}
      <PostTitle icon={icon} name={name} />
      <PostAuthor author={author} date={date}/>
      {tags && <PostTags tags={tags} />}
    </div>
  );
};
