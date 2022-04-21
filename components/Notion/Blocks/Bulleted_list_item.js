import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

const bullet_icons = ['🌕', '🌖', '🌗', '🌘', '🌚'];

export const Bulleted_list_item = ({ bulleted_list_item, children, layer }) => {
  const { rich_text, color } = bulleted_list_item;
  if (!layer) layer = 0;
  return (
    <div className={`flex ${colors.default} ${colors[color]} items-start mt-2 `}>
      <div className='flex items-center justify-start text-xs w-8 h-6'>
        <div className=''>{bullet_icons[layer % bullet_icons.length]}</div>
      </div>
      <div className='flex-1'>
        {rich_text.map((i, index) => (
          <RichText rich_text={i} key={index} />
        ))}
        {children?.map((child) => {
          if (child.type === 'bulleted_list_item') child.layer = layer + 1;
          return blockMapper(child);
        })}
      </div>
    </div>
  );
};
