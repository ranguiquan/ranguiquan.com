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

const rich_text_colors_raw = [
  'default',
  'gray',
  'brown',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'red',
  'gray_background',
  'brown_background',
  'orange_background',
  'yellow_background',
  'green_background',
  'blue_background',
  'purple_background',
  'pink_background',
  'red_background',
];

const notion = () => {
  // const tag_colors = {};
  // tag_colors_raw.forEach((color) => {
  //   tag_colors[`${color}`] = { bg: `bg-tag-${color}`, text: `text-tag-text-${color}` };
  // });

  const rich_text_colors = {};
  rich_text_colors_raw.forEach((color) => {
    rich_text_colors[`${color}`] = `${
      color.endsWith('background') ? `bg-rich-${color}` : `text-rich-${color}`
    }`;
  });
  return <pre>{JSON.stringify(rich_text_colors, null, 2)}</pre>;
};

export default notion;
