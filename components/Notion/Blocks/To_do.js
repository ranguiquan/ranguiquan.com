import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

export const To_do = ({ to_do, children }) => {
  const { rich_text, color, checked } = to_do;
  return (
    <div
      className={`flex items-start justify-start ${colors[color]} mt-2 w-full`}>
      <div className=' flex-grow-0 flex-shrink-0 flex items-center justify-start w-8 h-6'>
        {checked ? (
          <MdCheckBox size='1.5em' />
        ) : (
          <MdCheckBoxOutlineBlank size='1.5em' />
        )}
      </div>
      {/* TODO: */}
      {/* 太神奇了，这里为什么非得写 min-w-[1px] */}
        <div className='flex-1 whitespace-pre-wrap break-words max-w-full min-w-[1px]'>
          {rich_text.map((i, index) => (
            <RichText rich_text={i} key={index} />
          ))}
          {children?.map((child) => {
            return blockMapper(child);
          })}
        </div>
    </div>
  );
};
// max-w-[calc(100%-2rem)]