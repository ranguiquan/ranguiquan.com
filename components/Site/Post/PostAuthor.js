import React from 'react';
export function PostAuthor({ author }) {
  // TODO: make it better !!!
  return (
    <>
      {author?.map((item) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </>
  );
}
