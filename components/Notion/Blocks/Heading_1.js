import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

export const Heading_1 = ({ heading_1, id }) => {
  const { rich_text, color } = heading_1;
  return (
    <h1
      
      id={id}
      className={`${
        color !== 'default' ? colors[color] : 'text-inherited'
      } text-3xl mt-12 mb-6 font-bold whitespace-pre-wrap break-words max-w-full min-w-[1px]`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </h1>
  );
};
