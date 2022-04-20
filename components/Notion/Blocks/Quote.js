import { blockMapper } from '../../../lib/notion/blockMapper';
import { RichText } from '../Common/RichText';
import { border_color, colors } from '../Common/color';

export const Quote = ({ quote, children }) => {
  const { rich_text, color } = quote;
  return (
    <div
      className={`mt-2 pl-4 ${colors.default} ${colors[color]} border-l-4 ${border_color.default} ${border_color[color]} rounded`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
      {children?.map((child) => {
        return blockMapper(child);
      })}
    </div>
  );
};
