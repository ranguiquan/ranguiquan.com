import {
  Paragraph,
  Heading_1,
  Heading_2,
  Heading_3,
  Bulleted_list_item,
  Numbered_list_item,
  Code,
  Callout,
  Quote,
  To_do,
  Notion_Image,
  Video,
  Embed,
  BookMark,
} from '../../components/Notion/Blocks';

// A map
// from type category of block object
// to the Component.
export const blockMap = {
  paragraph: Paragraph,
  heading_1: Heading_1,
  heading_2: Heading_2,
  heading_3: Heading_3,
  bulleted_list_item: Bulleted_list_item,
  numbered_list_item: Numbered_list_item,
  code: Code,
  callout: Callout,
  quote: Quote,
  to_do: To_do,
  image: Notion_Image,
  video: Video,
  embed: Embed,
  bookmark: BookMark,
  // render link_preview to a bookmark
  link_preview: BookMark,
};

// Map a block object to a Component
export const blockMapper = (block) => {
  const Block = blockMap[block.type];
  if (Block) {
    return <Block {...block} key={block.id} />;
  } else {
    return <div key={block.id}>Block {block.type} is not supported yet.</div>;
  }
};
