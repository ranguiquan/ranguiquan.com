const colors = [
  'default',
  'red',
  'gray',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
];

const RichText = ({ rich_text }) => {
  const { plain_text, href, annotations, type } = rich_text;
  if (type !== 'text') {
    return <span className=' text-red-600'> !!!unsupported!!! </span>;
  }
  return <pre>{JSON.stringify(colors.map((color) => `tag-${color}`))}</pre>;
};

export default RichText;
