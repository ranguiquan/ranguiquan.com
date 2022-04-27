import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';
import { blockMapper } from '../../../lib/notion/blockMapper';

export const Paragraph = ({ paragraph }) => {
  const { rich_text, color, children } = paragraph;
  return (
    <p
      className={`${
        color !== 'default' ? colors[color] : 'text-inherited'
      } mt-2 whitespace-pre-wrap break-words max-w-full min-w-[1px]`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
      {children?.map((child) => {
        return blockMapper(child);
      })}
    </p>
  );
};
