import { RichText } from '../Common/RichText';
import { colors } from '../Common/color';

export const Paragraph = ({ paragraph }) => {
  // TODO: support children
  const { rich_text, color, children} = paragraph;
  return (
    <p className={`${colors[color]} mt-2`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </p>
  );
};

