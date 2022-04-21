import { retrieve_block_children } from './wrappedAPI';

export const retrieve_nested_children = async (block) => {
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
  return;
};
