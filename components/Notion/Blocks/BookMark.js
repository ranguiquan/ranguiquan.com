import { useEffect } from 'react';
import { RichText } from '../Common/RichText';
// import { getMetadata } from 'page-metadata-parser';
// import domino from 'domino';

export const BookMark = ({ bookmark }) => {
  const { url, caption, metadata } = bookmark;
  const { description, image, title } = metadata;

  return (
    <div className='mt-4 space-2'>
      <a href={url}>
        <div className=' py-2 px-4 border-2 border-rich-gray_background rounded cursor-pointer transition duration-150 ease-out bg-white hover:bg-rich-gray_background'>
          <div className='flex flex-col relative space-y-1'>
            <div className=' truncate'>
              <span>{title}</span>
            </div>
            <div className=' text-rich-gray text-sm '>
              <span>{description}</span>
            </div>
            <div className=' text-sm'>
              <span>{url}</span>
            </div>
          </div>
        </div>
      </a>
      <div className='flex flex-col items-center'>
        <div className=' mt-2 text-sm text-rich-gray whitespace-pre-wrap break-words max-w-full min-w-[1px]'>
          {caption.map((item, index) => (
            <RichText rich_text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
