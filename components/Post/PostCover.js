import React from 'react';
import Image from 'next/image';

export function PostCover({ cover }) {
  return (
    <div className='w-full h-[150px] relative hidden md:block'>
      <Image
        src={cover}
        alt='cover'
        layout='fill'
        className='object-cover rounded-3xl'
      />
    </div>
  );
}
