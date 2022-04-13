import React from 'react';
export function PostAuthor({ author, date }) {
  return (
    <div className=' space-x-2 flex  md:justify-end justify-center font-semibold pt-2'>
      <span>{author}</span>
      <span>{date.toLocaleDateString()}</span>
    </div>
  );
}
