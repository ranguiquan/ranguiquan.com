// This is a place to handle notion api document, to reused some text. No big deal.
const tag_colors_raw = [
  'default',
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

const notion = () => {
  const tag_colors = {};
  tag_colors_raw.forEach((color) => {
    tag_colors[`${color}`] = { bg: `bg-tag-${color}`, text: `text-tag-text-${color}` };
  });
  return <pre>{JSON.stringify(tag_colors, null, 2)}</pre>;
};

export default notion;
