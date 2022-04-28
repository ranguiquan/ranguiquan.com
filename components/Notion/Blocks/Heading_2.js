import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

export const Heading_2 = ({ heading_2, id }) => {
  const { rich_text, color } = heading_2;
  return (
    <h2
      id={id}
      className={`${
        color !== 'default' ? colors[color] : 'text-inherited'
      } text-2xl mt-8 mb-4 font-bold whitespace-pre-wrap break-words max-w-full min-w-[1px]`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </h2>
  );
};
