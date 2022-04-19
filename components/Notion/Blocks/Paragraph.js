import {RichText,  colors } from '../Common/RichText';

export const Paragraph = ({ paragraph }) => {
  const { rich_text, color, children} = paragraph;
  return (
    <p className={`${colors[color]} mt-2`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </p>
  );
};

