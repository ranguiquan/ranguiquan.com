import Link from 'next/link';
import { PostCoverImage } from './PostCoverImage';
import { PostTags } from './PostTags';
import Image from 'next/image';
import defaultCover from '../../../public/default_cover.webp';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../../pages/_app';

export const PostCard = ({ post, basePath }) => {
  const [isHover, setIsHover] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { cover, icon, name, tags } = post;

  return (
    <Link href={`/${basePath}/${post.id}`} passHref>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`flex justify-between rounded-3xl cursor-pointer overflow:hidden
        ${
          theme === 'dark'
            ? 'card-shadow-dark hover:card-shadow-hover-dark'
            : 'card-shadow hover:card-shadow-hover'
        } transition duration-150 ease-out select-none`}
      >
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
            className={`min-h-[150px] w-full rounded-3xl overflow-hidden 
            absolute transition-all duration-150 ease-out -z-20
              hidden md:block
              ${theme === 'dark' && isHover && 'blur-sm scale-100 opacity-100'}
              ${theme === 'dark' && !isHover && 'blur-lg scale-110 opacity-100'}
              ${theme === 'light' && isHover && 'right-0 blur-none scale-100 opacity-0'}
              ${theme === 'light' && !isHover && 'right-4 blur-lg scale-90 opacity-75'}
            `}
          >
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
        <div className='flex-1 flex flex-col items-center justify-center space-y-2 p-2 dark:bg-black bg-white rounded-r-3xl -z-10'>
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
