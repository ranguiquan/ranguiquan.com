import { notion } from './client';

// FIXME: find out a way to play with nested blocks. API is annoying. Need to be fixed.
export const retrieve_nested_children = async (block) => {
  console.log('[retrieve_nested_children]: Start.');
  let currentBlock = block;
  if (currentBlock.has_children) {
    const childrenList = (
      await notion.blocks.children.list({
        block_id: currentBlock.id,
        page_size: 100,
      })
    ).results;
    currentBlock.children = childrenList;
    console.log(childrenList);
    for (let i = 0; i < childrenList.length; i++) {
      await retrieve_nested_children(childrenList[i]);
    }
  }
  console.log('[retrieve_nested_children]: End.');
};
