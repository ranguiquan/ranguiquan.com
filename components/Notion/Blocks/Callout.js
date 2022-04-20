import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

export const Callout = ({ callout, children }) => {
  // TODO: need to support other kind of icons.
  const { rich_text, icon, color } = callout;
  return (
    <div
      className={`flex ${colors.default} ${colors[color]}  mt-2 pl-4 pr-4 pt-6 pb-6 rounded overflow-hidden`}>
      <div className=' self-baseline'>{icon.emoji}</div>
      <div className='pl-4 self-baseline'>
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
