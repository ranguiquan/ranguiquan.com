import Image from 'next/image';
import Link from 'next/link';
import { PostTags } from '../Post/PostTags';

export const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`} passHref>
      <div className='flex justify-between rounded-3xl overflow-hidden hover:bg-gray-200 cursor-pointer'>
        <div className=' min-h-[150px] w-2/5 relative block'>
          <Image
            src={post.cover}
            alt='cover'
            layout='fill'
            className='object-cover'
          />
        </div>
        <div className='flex-1 flex flex-col items-center justify-center space-y-2 p-2'>
          <span className='font-semibold text-lg'>
            <span>{post.icon}</span>
            <span>{post.name}</span>
          </span>
          <PostTags tags={post.tags} />
        </div>
      </div>
    </Link>
  );
};
