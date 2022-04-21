import Link from 'next/link';
import PostCoverImage from '../Common/PostCoverImage';
import { PostTags } from '../Post/PostTags';

export const PostCard = ({ post }) => {
  const { cover, icon, name, tags } = post;

  return (
    <Link href={`/posts/${post.id}`} passHref>
      <div className='flex justify-between rounded-3xl overflow-hidden hover:bg-gray-100 cursor-pointer'>
        {cover && <div className=' min-h-[150px] w-2/5 relative block'>
          <PostCoverImage cover={cover} />
        </div>}
        <div className='flex-1 flex flex-col items-center justify-center space-y-2 p-2'>
          <span className='font-semibold text-lg'>
            <span>{icon}</span>
            <span>{name}</span>
          </span>
          <PostTags tags={tags} />
        </div>
      </div>
    </Link>
  );
};
