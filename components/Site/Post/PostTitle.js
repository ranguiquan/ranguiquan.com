import React from 'react';
export function PostTitle({ icon, name }) {
  return (
    <div className=' text-4xl space-x-2 pt-6 flex justify-center font-semibold'>
      <span className='hidden md:inline'>{icon}</span>
      <span className=' text-center'>{name}</span>
    </div>
  );
}
