import { RichText, colors } from '../Common/RichText';

export const Heading_3 = ({ heading_3 }) => {
  const { rich_text, color } = heading_3;
  return (
    <h3 className={`${colors[color]} text-xl mt-4 mb-4 font-bold`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </h3>
  );
};
