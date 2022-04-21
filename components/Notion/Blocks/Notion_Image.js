import Image from 'next/image';
import { RichText } from '../Common/RichText';

// TODO: add more nice features to this.
export const Notion_Image = ({ image }) => {
  const { caption, type } = image;
  const joined_caption_text = caption.map((item) => item.plain_text).join(' ');
  const { url } = image[type];
  if (type === 'file') return <div>{`Don't use notion internal image!`}</div>;
  return (
    <div className='mt-2'>
      <div className='flex flex-col items-center'>
        <div className='flex-1 w-auto overflow-hidden relative rounded cursor-pointer'>
          <img src={url} alt={joined_caption_text} />
        </div>
        <div className=' mt-2 text-sm text-rich-gray whitespace-pre-wrap break-words max-w-full min-w-[1px]'>
          {caption.map((item, index) => (
            <RichText rich_text={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
