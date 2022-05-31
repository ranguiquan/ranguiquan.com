import React from 'react';
export function PostTags({ tags }) {
  return (
    <div className='space-x-2 text-center'>
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
    bg: 'bg-tag-default dark:bg-tag-default-dark',
    text: 'text-tag-text-default dark:text-tag-text-dark',
  },
  gray: {
    bg: 'bg-tag-gray dark:bg-tag-gray-dark',
    text: 'text-tag-text-gray dark:text-tag-text-dark',
  },
  brown: {
    bg: 'bg-tag-brown dark:bg-tag-brown-dark',
    text: 'text-tag-text-brown dark:text-tag-text-dark',
  },
  red: {
    bg: 'bg-tag-red dark:bg-tag-red-dark',
    text: 'text-tag-text-red dark:text-tag-text-dark',
  },
  orange: {
    bg: 'bg-tag-orange dark:bg-tag-orange-dark',
    text: 'text-tag-text-orange dark:text-tag-text-dark',
  },
  yellow: {
    bg: 'bg-tag-yellow dark:bg-tag-yellow-dark',
    text: 'text-tag-text-yellow dark:text-tag-text-dark',
  },
  green: {
    bg: 'bg-tag-green dark:bg-tag-green-dark',
    text: 'text-tag-text-green dark:text-tag-text-dark',
  },
  blue: {
    bg: 'bg-tag-blue dark:bg-tag-blue-dark',
    text: 'text-tag-text-blue dark:text-tag-text-dark',
  },
  purple: {
    bg: 'bg-tag-purple dark:bg-tag-purple-dark',
    text: 'text-tag-text-purple dark:text-tag-text-dark',
  },
  pink: {
    bg: 'bg-tag-pink dark:bg-tag-pink-dark',
    text: 'text-tag-text-pink dark:text-tag-text-dark',
  },
};

export const PostTag = ({ name, color }) => {
  return (
    <span
      className={`rounded-md cursor-pointer px-1 py-0 mt-2 inline-block text-sm ${colors[color].bg} ${colors[color].text}`}
    >
      {name}
    </span>
  );
};
