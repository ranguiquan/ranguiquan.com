import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText, colors } from '../Common/RichText';

const icon_layers = ['🌕', '🌖', '🌗', '🌘', '🌚'];

export const Bulleted_list_item = ({ bulleted_list_item, children, layer }) => {
  const { rich_text, color } = bulleted_list_item;
  if (!layer) layer = 0;
  return (
    <div
      className={`grid grid-cols-[auto_1fr] grid-flow-row ${colors[color]} align-top mt-2 `}>
      <div className=' self-baseline mr-2 text-xs'>
        {icon_layers[layer % icon_layers.length]}
      </div>
      <div className=' self-baseline '>
        {rich_text.map((i, index) => (
          <RichText rich_text={i} key={index} />
        ))}
      </div>
      <div className=' col-start-2 col-end-3'>
        {children?.map((child) => {
          if (child.type === 'bulleted_list_item') child.layer = layer + 1;
          return blockMapper(child);
        })}
      </div>
    </div>
  );
};
