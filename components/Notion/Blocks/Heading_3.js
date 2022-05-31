import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

export const Heading_3 = ({ heading_3, id }) => {
  const { rich_text, color } = heading_3;
  return (
    <h3
      id={id}
      className={`${
        color !== 'default' ? colors[color] : 'text-inherited'
      } text-xl mt-4 mb-4 font-bold whitespace-pre-wrap break-words max-w-full min-w-[1px]`}
    >
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </h3>
  );
};
