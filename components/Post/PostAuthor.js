import React from 'react';
export function PostAuthor({ author, date }) {
  // TODO: make it better !!!
  return (
    <div className=' space-x-2 flex justify-center font-semibold pt-2'>
      {author.map((item) => (
        <span key={item.id}>{item.name}</span>
      ))}
      <span>{date.toLocaleDateString()}</span>
    </div>
  );
}
