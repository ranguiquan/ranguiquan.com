/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { RichText } from '../Common/RichText';
import { useContext } from 'react';
import { ModelDispatchContext } from '../../Layout';

export const Notion_Image = ({ image }) => {
  const [isModelShow, setIsModelShow] = useState(false);
  const modelDispatch = useContext(ModelDispatchContext);
  const handleImgClick = () => {
    modelDispatch({
      type: 'ADD_CONTENT',
      payload: (
        <img
          src={url}
          alt={joined_caption_text}
        />
      ),
    });
  }
  const { caption, type } = image;
  const joined_caption_text = caption.map((item) => item.plain_text).join(' ');
  const { url } = image[type];
  if (type === 'file') return <div>{`Don't use notion internal image!`}</div>;
  return (
    <div className='mt-2'>
      <div className='flex flex-col items-center'>
        <div
          className={`lex-1 w-auto overflow-hidden relative rounded ${
            isModelShow ? 'cursor-pointer' : 'cursor-zoom-in'
          }`}>
          {/* 正常文件流图片 */}
          <img
            src={url}
            alt={joined_caption_text}
            onClick={() => handleImgClick()}
          />
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
