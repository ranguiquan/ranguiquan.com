import React from 'react';
import { PostCoverImage } from './PostCoverImage';

export function PostCover({ cover }) {
  return (
    <div className='w-full h-[150px] relative rounded-3xl overflow-hidden md:block'>
      <PostCoverImage cover={cover} />
    </div>
  );
}
