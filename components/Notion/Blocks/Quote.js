import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { border_color, colors } from '../Common/color';

export const Quote = ({ quote, children }) => {
  const { rich_text, color } = quote;
  return (
    <div
      className={`mt-2 pl-4 ${color !== 'default' ? colors[color] : 'text-inherited'} border-l-4 ${
        border_color.default
      } ${border_color[color]} rounded whitespace-pre-wrap break-words max-w-full min-w-[1px]`}
    >
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
      {children?.map((child) => {
        return blockMapper(child);
      })}
    </div>
  );
};
