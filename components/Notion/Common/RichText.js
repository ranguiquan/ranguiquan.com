const colors = {
  default: 'text-rich-default',
  gray: 'text-rich-gray',
  brown: 'text-rich-brown',
  orange: 'text-rich-orange',
  yellow: 'text-rich-yellow',
  green: 'text-rich-green',
  blue: 'text-rich-blue',
  purple: 'text-rich-purple',
  pink: 'text-rich-pink',
  red: 'text-rich-red',
  gray_background: 'bg-rich-gray_background',
  brown_background: 'bg-rich-brown_background',
  orange_background: 'bg-rich-orange_background',
  yellow_background: 'bg-rich-yellow_background',
  green_background: 'bg-rich-green_background',
  blue_background: 'bg-rich-blue_background',
  purple_background: 'bg-rich-purple_background',
  pink_background: 'bg-rich-pink_background',
  red_background: 'bg-rich-red_background',
};

const RichText = ({ rich_text }) => {
  const { plain_text, href, annotations, type } = rich_text;
  const { bold, italic, strikethrough, underline, code, color } = annotations;
  if (type !== 'text') {
    return <span className=' text-red-600'> !!!unsupported!!! </span>;
  }

  // This is for '\n' to wrap properly.
  const divided_text = plain_text.split('\n');
  const res = divided_text.slice(0, divided_text.length - 1).map((i, index) => {
    // if (i === '') return;
    return (
      <>
        <span
          className={`${colors[color]} ${bold ? 'font-bold' : ''} ${
            italic ? 'italic' : ''
          } ${strikethrough ? 'line-through' : ''} ${
            underline ? 'underline' : ''
          } ${code ? 'font-mono' : ''}`}
          key={index}>
          {i}
        </span>
        <br />
      </>
    );
  });
  return (
    <>
      {res}
      <span
        className={`${colors[color]} ${bold ? 'font-bold' : ''} ${
          italic ? 'italic' : ''
        } ${strikethrough ? 'line-through' : ''} ${
          underline ? 'underline' : ''
        } ${code ? 'font-mono bg-tag-gray' : ''}`}
        key={divided_text.length - 1}>
        {divided_text[divided_text.length - 1]}
      </span>
    </>
  );
};

export default RichText;
