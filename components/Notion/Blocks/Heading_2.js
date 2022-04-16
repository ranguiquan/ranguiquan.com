import RichText, { colors } from '../Common/RichText';

const Heading_2 = ({ heading_2 }) => {
  const { rich_text, color } = heading_2;
  return (
    <h2 className={`${colors[color]} text-2xl mt-8 mb-4 font-bold`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </h2>
  );
};

export default Heading_2;
