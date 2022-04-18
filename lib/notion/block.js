import { retrieve_block_children } from './wrappedAPI';

// FIXME: find out a way to play with nested blocks. API is annoying. Need to be fixed.
export const retrieve_nested_children = async (block) => {
  // console.log('[retrieve_nested_children]: Start.');
  let currentBlock = block;
  const childrenList = (
    await retrieve_block_children({
      block_id: currentBlock.id,
      page_size: 100,
    })
  ).results;
  currentBlock.children = childrenList;
  await Promise.all(
    childrenList
      .filter((child) => child.has_children)
      .map((child) => {
        return retrieve_nested_children(child);
      })
  );
  // console.log('[retrieve_nested_children]: End.');
  return;
};
