import { colors } from './color';

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
        className={` font- font-bold ${italic ? 'italic' : ''} ${
          strikethrough ? 'line-through' : ''
        } ${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : 'text-inherited'
        } ${code ? 'pl-2 pr-2' : ''}`}
      >
        {decorated_text}
      </strong>
    );
  } else if (italic) {
    decorated_text = (
      <em
        className={`italic ${strikethrough ? 'line-through' : ''} ${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : 'text-inherited'
        } ${code ? 'pl-2 pr-2' : ''}`}
      >
        {decorated_text}
      </em>
    );
  } else if (strikethrough) {
    decorated_text = (
      <del
        className={`line-through ${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : 'text-inherited'
        } ${code ? 'pl-2 pr-2' : ''}`}
      >
        {decorated_text}
      </del>
    );
  } else {
    decorated_text = (
      <span
        className={`${underline ? 'underline' : ''} ${
          color !== 'default' ? colors[color] : 'text-inherited'
        } ${code ? 'pl-2 pr-2' : ''}`}
      >
        {decorated_text}
      </span>
    );
  }

  // code $ href
  if (code) {
    decorated_text = (
      <code
        className={`bg-rich-code_background dark:bg-rich-code_background-dark
         text-rich-code dark:text-rich-code-dark rounded-md overflow-hidden font-mono`}
      >
        {decorated_text}
      </code>
    );
  }
  if (href) {
    decorated_text = (
      <a href={href} className={`inline underline hover:no-underline text-rich-underline`}>
        {decorated_text}
      </a>
    );
  }

  return <>{decorated_text}</>;
};
