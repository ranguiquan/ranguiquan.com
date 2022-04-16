import RichText, {colors} from "../Common/RichText";

const Heading_1 = ({ heading_1 }) => {
  const { rich_text, color } = heading_1;
  return (
    <h1 className={`${colors[color]} text-3xl mt-12 mb-6 font-bold`}>
      {rich_text.map((i, index) => (
        <RichText rich_text={i} key={index} />
      ))}
    </h1>
  );
}

export default Heading_1;