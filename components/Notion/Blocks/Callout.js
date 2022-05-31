import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

export const Callout = ({ callout, children }) => {
  // TODO: need to support other kind of icons.
  const { rich_text, icon, color } = callout;
  return (
    <div
      className={`flex justify-start items-start ${
        color !== 'default' ? colors[color] : 'text-inherited'
      }  mt-2 py-6 pr-2 rounded overflow-hidden`}
    >
      <div className=' flex-shrink-0 flex-grow-0 w-16 flex justify-center '>{icon.emoji}</div>
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
