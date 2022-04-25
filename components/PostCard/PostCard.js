import Link from 'next/link';
import PostCoverImage from '../Common/PostCoverImage';
import { PostTags } from '../Post/PostTags';
import Image from 'next/image';
import defaultCover from '../../public/default_cover.webp';
import { useState } from 'react';

export const PostCard = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const { cover, icon, name, tags } = post;

  return (
    <Link href={`/posts/${post.id}`} passHref>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='flex justify-between rounded-3xl cursor-pointer card-shadow hover:card-shadow-hover transition duration-150 ease-out'>
        {/* cover box */}
        <div className=' min-h-[150px] w-2/5 relative'>
          {/* cover image */}
          <div className=' min-h-[150px] w-full absolute block rounded-l-3xl overflow-hidden'>
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
          {/* image shadow */}
          <div
            className={`min-h-[150px] w-full rounded-3xl overflow-hidden absolute transition-all duration-150 ease-out -z-10
            ${
              !isHover
                ? 'right-8 blur-lg scale-75 opacity-75'
                : 'right-0 blur-none scale-100 opacity-0'
            }
            `}>
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
