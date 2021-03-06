import { useEffect } from 'react';
import { RichText } from '../Common/RichText';
// import { getMetadata } from 'page-metadata-parser';
// import domino from 'domino';

export const BookMark = ({ bookmark }) => {
  const { url, caption, metadata } = bookmark;
  // const { image, title } = metadata;
  const title = metadata?.title;
  const description = metadata?.description;

  return (
    <div className='mt-4 space-2'>
      <a href={url}>
        <div
          className=' py-2 px-4 border-2 
        border-rich-gray_background dark:border-rich-gray_background-dark 
        rounded cursor-pointer transition duration-150 ease-out
        bg-white dark:bg-black hover:bg-rich-gray_background 
        dark:hover:bg-rich-gray_background-dark'
        >
          <div className='flex flex-col relative space-y-1'>
            <div className=' truncate'>
              <span>{title}</span>
            </div>
            {description && (
              <div className=' text-rich-gray text-sm break-words'>
                <span>{description}</span>
              </div>
            )}
            <div className=' text-sm truncate'>
              <span>{url}</span>
            </div>
          </div>
        </div>
      </a>
      <div className='flex flex-col items-center'>
        <div className=' mt-2 text-sm text-rich-gray whitespace-pre-wrap break-words max-w-full min-w-[1px]'>
          {caption?.map((item, index) => (
            <RichText rich_text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
