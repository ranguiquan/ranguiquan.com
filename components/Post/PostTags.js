import React from 'react';
export function PostTags({ tags }) {
  return (
    <div className='space-x-2 pt-2 text-center'>
      {tags.map((tag) => {
        return <PostTag key={tag.id} name={tag.name} color={tag.color} />;
      })}
    </div>
  );
}

const PostTag = ({ name, color }) => {
  let res = null;
  switch (color) {
    case 'gray':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-gray-300 border-gray-400'>
          {name}
        </span>
      );
      break;
    case 'brown':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-stone-300 border-stone-400'>
          {name}
        </span>
      );
      break;
    case 'orange':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-orange-300 border-orange-400'>
          {name}
        </span>
      );
      break;
    case 'yellow':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-yellow-300 border-yellow-400'>
          {name}
        </span>
      );
      break;
    case 'green':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-green-300 border-green-400'>
          {name}
        </span>
      );
      break;
    case 'blue':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-blue-300 border-blue-400'>
          {name}
        </span>
      );
      break;
    case 'purple':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-purple-300 border-purple-400'>
          {name}
        </span>
      );
      break;
    case 'pink':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-pink-300 border-pink-400'>
          {name}
        </span>
      );
      break;
    case 'red':
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-red-300 border-red-400'>
          {name}
        </span>
      );
      break;
    default:
      res = (
        <span className='border-2 rounded-full cursor-pointer px-1 py-0 mt-2 inline-block text-sm bg-neutral-300 border-neutral-400'>
          {name}
        </span>
      );
      break;
  }
  return res;
};
