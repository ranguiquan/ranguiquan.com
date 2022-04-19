export const colors = {
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

// to format '\n' in plain_text to <br />
const plain_text_formatter = (plain_text) => {
  const divided_text = plain_text.split('\n');
  const res = [];
  divided_text.slice(0, divided_text.length - 1).forEach((item, index) => {
    res.push(...[item, <br key={index} />]);
  });
  res.push(divided_text[divided_text.length - 1]);
  res.filter((item) => item !== '');
  return res;
};

export const RichText = ({ rich_text }) => {
  const { plain_text, href, annotations, type } = rich_text;
  const { bold, italic, strikethrough, underline, code, color } = annotations;
  if (type !== 'text') {
    return <span className=' text-red-600'> !!!unsupported!!! </span>;
  }
  const formatted_text = plain_text_formatter(plain_text);
  let decorated_text = formatted_text;
  // start decorating...
  if (bold) {
    decorated_text = (
      <strong
        className={`font-bold ${italic ? 'italic' : ''} ${
          strikethrough ? 'line-through' : ''
        } ${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : ''
        } ${code ? 'pl-2 pr-2' : ''}`}>
        {decorated_text}
      </strong>
    );
  } else if (italic) {
    decorated_text = (
      <em
        className={`italic ${strikethrough ? 'line-through' : ''} ${
          underline ? 'underline' : ''
        } ${color !== 'default' ? colors[color] : ''} ${
          code ? 'pl-2 pr-2' : ''
        }`}>
        {decorated_text}
      </em>
    );
  } else if (strikethrough) {
    decorated_text = (
      <del
        className={`line-through ${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : ''
        } ${code ? 'pl-2 pr-2' : ''}`}>
        {decorated_text}
      </del>
    );
  } else {
    decorated_text = (
      <span
        className={`${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : ''
        } ${code ? 'pl-2 pr-2' : ''}`}>
        {decorated_text}
      </span>
    );
  }

  // code $ href
  if (code) {
    decorated_text = (
      <code
        className={`bg-rich-code_background text-rich-code rounded-md overflow-hidden font-mono`}>
        {decorated_text}
      </code>
    );
  }
  if (href) {
    decorated_text = (
      <a
        href={href}
        className={`inline underline hover:no-underline text-rich-underline`}>
        {decorated_text}
      </a>
    );
  }

  return <>{decorated_text}</>;
};

