import Link from 'next/link';
import PostCoverImage from '../Common/PostCoverImage';
import { PostTags } from '../Post/PostTags';
import Image from 'next/image';
import defaultCover from '../../public/default_cover.webp';

export const PostCard = ({ post }) => {
  const { cover, icon, name, tags } = post;

  return (
    <Link href={`/posts/${post.id}`} passHref>
      <div className='flex justify-between rounded-3xl overflow-hidden cursor-pointer card-shadow hover:card-shadow-hover transition duration-150 ease-out'>
        <div className=' min-h-[150px] w-2/5 relative block'>
          {cover ? (
            <PostCoverImage cover={cover} />
          ) : (
            <Image
              src={defaultCover}
              alt='cover'
              layout='fill'
              className='object-cover '
              priority
            />
          )}
        </div>
        <div className='flex-1 flex flex-col items-center justify-center space-y-2 p-2'>
          <span className='font-semibold text-lg text-center'>
            <span>{icon}</span>
            <span className='ml-2'>{name}</span>
          </span>
          <div>
            <PostTags tags={tags} />
          </div>
        </div>
      </div>
    </Link>
  );
};
