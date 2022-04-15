import Heading_1 from '../../components/Notion/Blocks/Heading_1';
import Heading_2 from '../../components/Notion/Blocks/Heading_2';
import Heading_3 from '../../components/Notion/Blocks/Heading_3';
import Paragraph from '../../components/Notion/Blocks/Paragraph';

// A map 
// from type category of block object 
// to the Component.
export const blockMap = {
  paragraph: Paragraph,
  heading_1: Heading_1,
  heading_2: Heading_2,
  heading_3: Heading_3,
};

// Map a block object to a Component
export const blockMapper = (block) => {
  const Block = blockMap[block.type];
  const param = {};
  param[block.type] = block[block.type];
  return <Block {...param} key={block.id} />;
};
