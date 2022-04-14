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

// This is an efficient way of dynamic class. 
// From https://github.com/tailwindlabs/tailwindcss/discussions/3461
const colors = {
  default: {
    bg: 'bg-tag-default',
    text: 'text-tag-text-default',
  },
  gray: {
    bg: 'bg-tag-gray',
    text: 'text-tag-text-gray',
  },
  brown: {
    bg: 'bg-tag-brown',
    text: 'text-tag-text-brown',
  },
  red: {
    bg: 'bg-tag-red',
    text: 'text-tag-text-red',
  },
  orange: {
    bg: 'bg-tag-orange',
    text: 'text-tag-text-orange',
  },
  yellow: {
    bg: 'bg-tag-yellow',
    text: 'text-tag-text-yellow',
  },
  green: {
    bg: 'bg-tag-green',
    text: 'text-tag-text-green',
  },
  blue: {
    bg: 'bg-tag-blue',
    text: 'text-tag-text-blue',
  },
  purple: {
    bg: 'bg-tag-purple',
    text: 'text-tag-text-purple',
  },
  pink: {
    bg: 'bg-tag-pink',
    text: 'text-tag-text-pink',
  },
};

export const PostTag = ({ name, color }) => {
  return (
    <span
      className={`rounded-md cursor-pointer px-1 py-0 mt-2 inline-block text-sm ${colors[color].bg} ${colors[color].text}`}>
      {name}
    </span>
  );
};


